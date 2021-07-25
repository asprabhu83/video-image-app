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
        if($request->attribute_Values && count($request->attribute_Values) > 0) {
            $css = implode(', ', $request->attribute_Values);
        } else {
            $css = null;
        }
        $saveClass = AttributeDetails::create([
            'class_id'       => $validated['class_id'],
            'attribute_name' => $validated['attribute_name'],
            'attribute_type' => $validated['attribute_type'],
            'attribute_Values' => $css 
        ]);
        $saveClass->save();
        return response()->json([
            "success" => true,
            "message" => "Class Created successfully uploaded",
            'last_insert_id' => $saveClass->id
        ]);
    }
}
