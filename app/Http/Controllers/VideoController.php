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
    public function index()
    {
        //$videos = Video::orderBy('created_at', 'DESC')->get();
        $videos = Video::all();
        $classDetails = ClassDetails::all();
        $imgArray = array();
        foreach($videos as $video) {
            foreach(Storage::disk('publicUploads')->allFiles($current_timestamp) as $video->image_Location) {
                $temp->classValue = $classDetails;
                $temp->image_Location = $file;
                $video->details=array();
                $video->details.push($temp);
            }
        }
        return $videos;
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
            'disk'          => 'public',
            'image_Location' => $current_timestamp,
            'file_name'          => $request->video->getClientOriginalName(),
            'project_name'         => $request->title
        ]);
        ConvertVideoForStreaming::dispatch($video);
        $video->save();
        $classDetails = ClassDetails::all();
        $imgArray = array();
        foreach(Storage::disk('publicUploads')->allFiles($current_timestamp) as $file) {
            $temp->classValue = $classDetails;
            $temp->image_Location = $file;
            $imgArray.push($temp);
        }
        return response()->json([
            "success" => true,
            "message" => "File successfully uploaded",
            "files" => $imgArray
        ]);
    }
}
