<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVideoRequest;
use App\Jobs\ConvertVideoForStreaming;
use App\Models\Video;
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
        $validator = Validator::make($request->all(), 
        [ 
        'title' => 'required',
        'file' => 'required',
       ]);   

if ($validator->fails()) {          
      return response()->json(['error'=>$validator->errors()], 401);                        
   }  


  if ($files = $request->file('file')) {
       
      //store file into document folder
      $file = $request->file->store('public/videos');

      //store your file into database
      $document = new Document();
      $document->title = $file;
      $document->user_id = $request->user_id;
      $document->save();

      $request->video->storeAs('public', $request->video->getClientOriginalName());

      $video = Video::create([
          'disk'          => 'public',
          'original_name' => $request->file->getClientOriginalName(),
          'path'          => $request->file->getClientOriginalName(),
          'title'         => $request->title,
      ]);

      ConvertVideoForStreaming::dispatch($video);
        
      return response()->json([
          "success" => true,
          "message" => "File successfully uploaded",
          "file" => $file
      ]);

  }

      
     
    }
}
