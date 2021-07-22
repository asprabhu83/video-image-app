<?php

namespace App\Http\Controllers;
use App\Http\Requests\ClassDetail;
use App\Models\ClassDetails;
use Illuminate\Http\Request;

class ClassDetailsController extends Controller
{
    //
    public function index()
    {
        $data = ClassDetails::join('class_details', 'DESC')
                                    ->join('attribute_details', 'class_details.id', '=', 'attribute_details.class_id')
                                    ->get();
        return ClassDetails::all();
    }
    public function store(ClassDetail $request)
    {
         $validated = $request->validated();
        $saveClass = ClassDetails::create([
            'project_id' => $request['projectid'],
            'class_name' => $request['className']
        ]);
        $saveClass->save();
        return response()->json([
            "success" => true,
            "message" => "Class Created successfully uploaded",
            'last_insert_id' => $saveClass->id
        ]);
    }
}
