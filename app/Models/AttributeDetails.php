<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AttributeDetails extends Model
{
    use HasFactory;
    protected $table = 'attribute_details';
    protected $fillable = [
        'class_id',
        'attribute_name',
        'attribute_type',	
        'attribute_Values'
    ];
}
