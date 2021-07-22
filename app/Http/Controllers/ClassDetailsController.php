<?php

namespace App\Http\Controllers;
use App\Http\Requests\ClassDetail;
use App\Models\ClassDetails;
use Illuminate\Http\Request;

class ClassDetailsController extends Controller
{
    //
    public function store(ClassDetail $request)
    {
        $validated = $request->validated();
        $saveClass = ClassDetails::create([
            'project_id' => $validated['projectid'],
            'class_name' => $validated['className']
        ]);
        $saveClass->save();
        return response()->json([
            "success" => true,
            "message" => "Class Created successfully uploaded",
            'last_insert_id' => $saveClass->id
        ]);
    }
}
