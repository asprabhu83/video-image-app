<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class ClassDetails extends Model
{
    protected $table = 'class_details';
    protected $fillable = [
        'project_id',
        'class_name'
    ];
}
