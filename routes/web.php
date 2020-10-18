<?php

use Illuminate\Support\Facades\Route;


Route::get('email', function(){

    return new App\Mail\UserRegisteredMail();
});

Route::get('/{any}', 'HomeController@index')->where('any', '^(?!api).*$');