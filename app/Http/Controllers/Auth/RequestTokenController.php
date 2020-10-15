<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;

use App\Notifications\SentTokenSMS;
use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class RequestTokenController extends Controller
{

    public function __invoke(Request $request)
    {

        $this->validate($request, [
            'number' => 'bail|required|size:10|regex:/^0([2,5])([0,3,4,5,6,7,8,9])/',
        ]);

        $phone = Phone::where('number', $request->input('number'))->first();

        if ($phone) {
            if ($phone->status == 0 && $phone->verify_token != null) {

                //use queue:work to dispatch
                // php artisan queue:work
                // dispatch(new SMSVerifyToken("0243250000"));

                $res = sendTokenViaSMS($phone);
                if ($res == 0 ) {
                    return response()->json('Connection Timed Out', 522);
                }

                return response()->json("verify-token");
           
            } else {

                return response()->json("user already verified", 201);
            }
        }
    }

}


