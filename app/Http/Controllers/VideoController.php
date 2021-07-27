<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Jobs\ConvertVideoForStreaming;
use App\Models\Video;
use App\Models\ClassDetails;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index(Request $request)
    {
        //$videos = Video::orderBy('created_at', 'DESC')->get();
        $videos = Video::where('project_id', $request->project_id)->get();
        $classDetails = ClassDetails::where('project_id', $request->project_id)->get();
        $Details=array();
        foreach($videos as $video) {
            $details=array();
            foreach(Storage::disk('publicUploads')->allFiles($video->image_Location) as $file) {
                $obj=array('boundingBoxes'=>array(), 'classDetails'=>$classDetails, 'image_Location'=>$file);
                array_push($details, $obj);
            }
            $temp=array("id"=>$video->id, "project_name"=>$video->project_name, "image_Location"=>$video->image_Location, "Details"=>$details );
            array_push($Details, $temp);
        }
        return $Details;
    }
 
    /**
     * Return uploader form view for uploading videos
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function uploader(){
        return view('uploader');
    }
 
    /**
     * Handles form submission after uploader form submits
     * @param StoreVideoRequest $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreVideoRequest $request)
    {
        $disk = Storage::disk('public');
        $disk->put($request->video->getClientOriginalName(), fopen($request->video, 'r+'));
        $current_timestamp = Carbon::now()->timestamp;
        $video = Video::create([
            'project_id'   => $request->projectId,
            'disk'          => 'public',
            'image_Location' => $current_timestamp,
            'file_name'      => $request->video->getClientOriginalName(),
            'project_name'   => $request->title
        ]);
        ConvertVideoForStreaming::dispatch($video);
        $video->save();
        $Details=array();
        foreach(Storage::disk('publicUploads')->allFiles($video->image_Location) as $file) {
            $obj=array('classDetails'=>$classDetails, 'image_Location'=>$file, 'boundingBoxes'=>array());
            array_push($details, $obj);
        }
        $temp=array("project_name"=>$video->project_name, "Details"=>$details);
        array_push($Details, $temp);
        return $Details;
    }
}
