<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\ClassDetailsController;
use App\Http\Controllers\AttributeDetailsController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('getProjects',  [VideoController::class, 'index']);
Route::post('upload',  [VideoController::class, 'store']);
Route::post('createClass',  [ClassDetailsController::class, 'store']);
Route::post('createAttribute',  [AttributeDetailsController::class, 'store']);

