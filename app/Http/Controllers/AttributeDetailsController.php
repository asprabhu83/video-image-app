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
            'class_id'       => $request->$projectid,
            'attribute_name' => $request->$attributeName,
            'attribute_type' => $request->$attributeType,
            'attribute_Values' => implode(",", $request->$attributeValues)
        ]);
        $saveClass->save();
        return response()->json([
            "success" => true,
            "message" => "Class Created successfully uploaded",
            'last_insert_id' => $saveClass->id
        ]);
    }
}
