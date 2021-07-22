<?php

namespace App\Http\Controllers;
use App\Http\Requests\AttributeDetail;
use App\Models\AttributeDetails;
use Illuminate\Http\Request;

class AttributeDetailsController extends Controller
{
    //
    public function store(AttributeDetail $request)
    {
        $validated = $request->validated();
        $saveClass = AttributeDetails::create([
            'class_id'       => $request['class_id'],
            'attribute_name' => $request['$attribute_name'],
            'attribute_type' => $request['attribute_type'],
            'attribute_Values' => $request['attribute_Values']? implode(",", $request['attribute_Values']):''
        ]);
        $saveClass->save();
        return response()->json([
            "success" => true,
            "message" => "Class Created successfully uploaded",
            'last_insert_id' => $saveClass->id
        ]);
    }
}
