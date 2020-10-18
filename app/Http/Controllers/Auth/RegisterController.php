<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Phone;
use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Passport\Client;
use App\Mail\UserRegisteredMail;
use Illuminate\Support\Facades\Mail;

class RegisterController extends Controller
{
    private $client;
    use IssueTokenTrait;

    public function __construct()
    {
        $this->client = Client::find(2);
    }

    public function register(Request $request)
    {
//         return response()->json($request->all());

        $this->validate($request, [

            'name' => 'required',
            'email' => 'bail|required|email|unique:users,email',
            'password' => 'required|confirmed|min:6',

        ]);


        //register new user

        $data = [
            'name' => $request['name'],
            'email' => $request['email'],
            'address' => $request['address'],
            'city' => $request['city'],
            'region' => $request['region'],
            'phone' => $request['phone'],
            'password' => bcrypt($request['password'])
        ];

         $user = User::create($data);

         Mail::to($user)->send(new \App\Mail\UserRegisteredMail($user));
        

        return $this->issueToken($request, 'password');

    }

}
