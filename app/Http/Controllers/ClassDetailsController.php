<?php

namespace App\Http\Controllers;
use App\Http\Requests\ClassDetail;
use Illuminate\Http\Request;

class ClassDetailsController extends Controller
{
    //
    public function index()
    {
        $data = ClassDetails::join('attribute_details', 'class_details.id', '=', 'attribute_details.class_id')
                              ->get(['class_details.class_name', 'attribute_details.attribute_name', 'attribute_details.attribute_type', 'attribute_details.attribute_Values']);
        return compact('data');
    }
    public function store(Request $request)
    {
        $saveClass = ClassDetails::create([
            'project_id' => $request->project_id,
            'class_name' => $request->class_name
        ]);
        $saveClass->save();
        return response()->json([
            "success" => true,
            "message" => "Class Created successfully uploaded",
            'last_insert_id' => $saveClass->id
        ]);
    }
}
