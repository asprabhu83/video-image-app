<?php

namespace App\Jobs;
use FFMpeg;
use FFMpeg\Filters\Frame\FrameFilters;
use App\Models\Video;
use Carbon\Carbon;
use FFMpeg\Coordinate\Dimension;
use FFMpeg\Format\Video\X264;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class ConvertVideoForStreaming implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
 
    public $video;
 
    /**
     * Create a new job instance.
     *
     * @param Video $video
     */
    public function __construct(Video $video)
    {
        $this->video = $video;
    }
 
    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $media = FFMpeg::fromDisk($this->video->disk)
        ->open($this->video->file_name);
        $durationInSeconds = $media->getDurationInSeconds();
        $this->video->video_duration = $durationInSeconds;
        $video = Video::updateOrCreate(
            ['id' => $this->video->id],
            ['video_duration' => $durationInSeconds]
        );
        $diskName = Storage::build([
            'driver' => 'local',
            'root' => public_path('uploads/' . $this->video->image_Location.'/original'),
        ]);
        $thumbdiskName = Storage::build([
            'driver' => 'local',
            'root' => public_path('uploads/' . $this->video->image_Location.'/thumbs'),
        ]);
        $fps = $this->video->fps;
        for ($secs = 0; $secs <= $durationInSeconds; $secs++) {
            if($fps > 1){
                for($f = 1; $f <= $fps; $f++){
                    $newsec = $secs+(($fps/100)*$f);

                    $media = $media ->getFrameFromSeconds($newsec)
                    ->export()
                    ->toDisk($diskName)
                    ->save("thumb_{$secs}_{$f}.jpg");

                    $media = $media ->getFrameFromSeconds($newsec)                    
                    ->export()
                    ->addFilter(function (FrameFilters $filters) {
						$filters->custom('scale=224:126');
					})
                    ->toDisk($thumbdiskName)                    
                    ->save("thumb_{$secs}_{$f}.jpg");
                }
                
            }else{
                $media = $media ->getFrameFromSeconds($secs)
                ->export()
                ->toDisk($diskName)
                ->save("thumb_{$secs}.jpg");

                $media = $media ->getFrameFromSeconds($secs)
                ->export()
                ->addFilter(function (FrameFilters $filters) {
					$filters->custom('scale=224:126');
				})
                ->toDisk($thumbdiskName)
                ->save("thumb_{$secs}.jpg");              
                     
            }
            
          }
          
    }



}
