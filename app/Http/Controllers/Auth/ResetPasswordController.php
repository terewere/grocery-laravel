<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\VerifyUser;
use App\Notifications\SentTokenSMS;
use Illuminate\Http\Request;
use App\Phone;


class ResetPasswordController extends Controller
{
    

    public function __invoke(Request $request)
    {
        $this->validate($request, [
            'number' => 'bail|required|size:10|regex:/^0([2,5])([0,3,4,5,6,7,8,9])/',
        ]);

        $phone = Phone::where('number', $request->input('number'))->first();

        if (!$phone) {
            return response()->json("User not found", 404);
        }

            $phone->status = 0;

            $phone->verify_token = random();

            $phone->save();


        $res = sendTokenViaSMS($phone);
        if ($res == 0 ) {
            return response()->json('Connection Timed Out', 522);
        }

            //Check your Phone for the SMS or Mail for the email
            //redirect to verify token page
            return response()->json("verify-token");
        }



}