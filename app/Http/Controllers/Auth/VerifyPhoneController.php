<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Phone;
use Illuminate\Http\Request;

class VerifyPhoneController extends Controller
{

    const ACTIVE = 1;
    const INACTIVE = 0;

    public function __invoke(Request $request)
    {

        $this->validate($request, [
            'number' => 'bail|required|size:10|regex:/^0([2,5])([0,3,4,5,6,7,8,9])/',
        ]);

        $phone = Phone::where('number', $request->input('number'))->first();

        if ($phone) {

            if ($phone->status == self::ACTIVE) {

                $user = $phone->user;
                //user does not exist
                if ($user == null) {

                    //direct to register page
                    return response()->json("register");
                }
                //User verified - direct him to login page

                return response()->json("login");

            } else if ($phone->status == self::INACTIVE) {

                //User not verified  - direct him to verify token page
                return response()->json( "verify-token");
            }

        } else {

   
            $phone = new Phone();
            $phone->number = $request->number;

            $phone->verify_token = random();

           $phone->channel = getPhoneChannel($request->number);

            $phone->save();

            $res = sendTokenViaSMS($phone);
            if ($res == 0) {
                return response()->json('timeout', 522);
            }

            //Check your Phone for the SMS or Mail for the token
            //redirect to verify token page
            return response()->json("verify-token");

        }

    }

}
