<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Phone;

class VerifyTokenController extends Controller
{

    private $user;

    public function __invoke()
    {


        $this->validate(request(), [
            'number' => 'bail|required|size:10|regex:/^0([2,5])([0,3,4,5,6,7,8,9])/',
            'token' => 'required|numeric|digits:6',
        ]);

        //add where phone number is 0243270000
        $phone = Phone::where(['number' => request()->number, 'verify_token' => request()->token])->first();

        if ($phone) {

            $phone->update(['verify_token' => null, 'status' => 1]);

            return response()->json("register");

        } else {
            return response()->json('token not found', 404);
        }



    }

}
