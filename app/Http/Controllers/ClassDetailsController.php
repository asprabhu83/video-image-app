<?php

namespace App\Http\Controllers;
use App\Http\Requests\ClassDetail;
use App\Models\ClassDetails;
use Carbon\Carbon;
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
        $saveClass = new ClassDetails;
        $saveClass->project_id = $request->project_id;
        $saveClass->class_name = $request->class_name;
        $saveClass->save();
        return response()->json([
            "success" => true,
            "message" => "Class Created successfully uploaded",
            'last_insert_id' => $saveClass->id
        ]);
    }
}
