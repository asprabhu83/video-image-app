<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Jobs\ConvertVideoForStreaming;
use App\Models\Video;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function index()
    {
        $videos = Video::orderBy('created_at', 'DESC')->get();
        return view('videos')->with('videos', $videos);
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
        $path = str_random(16) . '.' . $request->video->getClientOriginalExtension();
        $request->video->storeAs('public', $request->video->getClientOriginalName());
        $current_timestamp = Carbon::now()->timestamp;
        $diskName = Storage::build([
            'driver' => 'local',
            'root' => storage_path('app/public/' . $current_timestamp),
        ]);
        $video = Video::create([
            'disk'          => 'public',
            'original_name' => $request->video->getClientOriginalName(),
            'path'          => $request->video->getClientOriginalName(),
            'title'         => $request->title,
            'diskName'      => $diskName
        ]);
 
        ConvertVideoForStreaming::dispatch($video);
        return response()->json([
            "success" => true,
            "message" => "File successfully uploaded",
            "diskName" => $diskName
        ]);
    }
}
