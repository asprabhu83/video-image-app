<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VideoController;
use App\Http\Controllers\ProjectsController;
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
Route::get('getProjects',  [ProjectsController::class, 'index']);
Route::get('getVideos',  [VideoController::class, 'index']);
Route::get('getClasses',  [ClassDetailsController::class, 'index']);
Route::get('getAttributes',  [AttributeDetailsController::class, 'index']);
Route::post('upload',  [VideoController::class, 'store']);
Route::post('create-thumbs',  [VideoController::class, 'createThumbs']);
Route::post('createProject',  [ProjectsController::class, 'store']);
Route::post('createClass',  [ClassDetailsController::class, 'store']);
Route::post('createAttribute',  [AttributeDetailsController::class, 'store']);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


Route::group(['prefix' => 'users'], function()  
{  
    Route::post('/register', 'UserController@register');
    Route::post('/login', 'UserController@login');
    Route::get('/index','UserController@index');
    Route::get('/show/{id}', 'UserController@show');
    Route::put('/update/{id}', 'UserController@update');
    Route::delete('/delete/{id}', 'UserController@delete');

    Route::middleware('auth:api')->get('/currentUser','UserController@currentUser');

    Route::post('/logout','UserController@logout');

}); 

//permission table

Route::group(['prefix' => 'permission'], function()  
{  
    Route::post('/store', 'PermissionController@store');
    Route::get('/index', 'PermissionController@index');
    Route::get('/show/{id}', 'PermissionController@show');
    Route::put('/update/{id}', 'PermissionController@update');
    Route::delete('/delete/{id}', 'PermissionController@delete');
}); 

