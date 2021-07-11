<?php

namespace App\Jobs;
use FFMpeg;
use App\Models\Video;
use Carbon\Carbon;
use FFMpeg\Coordinate\Dimension;
use FFMpeg\Format\Video\X264;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
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
        $current_timestamp = Carbon::now()->timestamp;
        $media = FFMpeg::fromDisk($this->video->disk)
        ->open($this->video->path);
        $durationInSeconds = $media->getDurationInSeconds();
        echo $durationInSeconds;
        for ($secs = 0; $secs <= $durationInSeconds; $secs++) {
            $media = $media->getFrameFromSeconds($secs)
                ->export()
                ->toDisk('public'.'/'.$current_timestamp)
                ->save("thumb_{$secs}.jpg");
          }
    }
 
    private function getCleanFileName($filename){
        return preg_replace('/\\.[^.\\s]{3,4}$/', '', $filename) . '.mp4';
    }
}
