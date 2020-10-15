<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\User as UserResource;

class HomeController extends Controller
{

    public function index()
    {
        return view('home');
    }



    public function user()
    {
       return new UserResource( request()->user());
    }
}
