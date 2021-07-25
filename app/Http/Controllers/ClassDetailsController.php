<?php

namespace App\Http\Controllers;
use App\Models\ClassDetails;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ClassDetailsController extends Controller
{
    //
    public $classdetails;
 
    /**
     * Create a new job instance.
     *
     * @param Video $video
     */
    public function __construct(ClassDetails $classdetails)
    {
        $this->classdetails = $classdetails;
    }
 
    public function index(Request $request)
    {
        return ClassDetails::all()->where('project_id', $request->projectid);
    }
    public function store(Request $request)
    {
        $classdetails = ClassDetails::create([
            'project_id'  => $request->projectid,
            'class_name' => $request->className
        ]);
        $classdetails->save();
        return response()->json([
            "success" => true,
            "message" => "Class Created successfully uploaded",
            'last_insert_id' => $classdetails->id
        ]);
    }
}
