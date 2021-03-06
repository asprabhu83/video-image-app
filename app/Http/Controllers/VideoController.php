<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Jobs\ConvertVideoForStreaming;
use App\Models\Video;
use App\Models\ClassDetails;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Intervention\Image\ImageManagerStatic as Image;

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
            $durationInSeconds = $video->video_duration;
            $fps = $video->fps;
            for ($secs = 0; $secs <= $durationInSeconds; $secs++) {
                if($fps > 1){
                    for($f = 1; $f <= $fps; $f++){
                        $obj=array('boundingBoxes'=>array(), 'classDetails'=>$classDetails, 'thumb_image_Location'=> $video->image_Location."/thumbs/thumb_{$secs}_{$f}.jpg", 'image_Location'=> $video->image_Location."/original/thumb_{$secs}_{$f}.jpg");
                        array_push($details, $obj);
                    }
                }else{
                    $obj=array('boundingBoxes'=>array(), 'classDetails'=>$classDetails, 'thumb_image_Location'=> $video->image_Location."/thumbs/thumb_{$secs}.jpg", 'image_Location'=> $video->image_Location."/original/thumb_{$secs}.jpg");
                    array_push($details, $obj);      
                }
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
            'project_name'   => $request->title,
            'fps'   => $request->fps,
        ]);
        ConvertVideoForStreaming::dispatch($video);
        $video->save();
        return response()->json([
            "success" => true,
            "message" => "File successfully uploaded",
            "last_insert_id" => $video->id
        ]);
    }

    public function createThumbs(Request $request){
        $videos = Video::where('id', $request->video_id)->get();        
        foreach($videos as $video) {
            $thumbdiskName = Storage::build([
                'driver' => 'local',
                'root' => public_path('uploads/' . $video->image_Location.'/thumbs'),
            ]);
            foreach(Storage::disk('publicUploads')->allFiles($video->image_Location.'/original') as $image) {      
                echo $image;          
                $thumbfile = str_replace('original','thumbs',$image);
                Image::make(public_path('uploads/' . $image))->resize(224,126)->save(public_path('uploads/' . $thumbfile));                
            }
        }
    }
}
