<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Laravel\Passport\Client;
use Illuminate\Http\Request;
use DB;

class LoginController extends Controller
{
    private $client;
    use IssueTokenTrait;

    public function __construct()
    {
        $this->client = Client::find(2);
    }

    public function login(Request $request)

    {

        $this->validate($request, [
            
            'email' => 'bail|required|email',
            'password' => 'required',
        ]);
        

        return $this->issueToken($request, 'password');

    }


    public function refresh(Request $request)
    {
        $this->validate($request, [
            'refresh_token' => 'required'

        ]);


        return $this->issueToken($request, 'refresh_token');
    }

    public function logout()
    {
        $accessToken = auth()->user()->token();

        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)
            ->update(['revoked' => true]);

        $accessToken->revoke();

        return response()->json([ 'message', 'logout successfully'], 204);
    }

}


