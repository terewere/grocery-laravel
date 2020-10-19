<?php

use Illuminate\Support\Facades\Route;


// Route::get('email', function(){
//     $user = [
//         'name' => 'shaibu',
//         'email' => 'shaibu@gmail.com'
//     ];

//     return new App\Mail\UserRegisteredMail($user);
// });

Route::get('/{any}', 'HomeController@index')->where('any', '^(?!api).*$');