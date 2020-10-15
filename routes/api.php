<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



// Route::get('/categories', 'CategoryController@index');


// Route::group(['middleware' => ['auth:api']], function () {

//     Route::get('/user', 'UserController@user');
//     Route::post('logout', 'Auth\LoginController@logout');
//     Route::match(array('PUT', 'PATCH'), "/users/permissions/{user}", array(
//         'uses' => 'UserController@syncPermissions',
//     ));

//     });



Route::post('verify-token', 'Auth\VerifyTokenController');
// Route::post('request-token', 'Auth\RequestTokenController');
Route::post('reset-password', 'Auth\ResetPasswordController');
// Route::post('verify-phone', 'Auth\VerifyPhoneController');
Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login');
Route::post('refresh', 'Auth\LoginController@refresh');
Route::post('social_auth', 'Auth\SocialAuthController@socialAuth');