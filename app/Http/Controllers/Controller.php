<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function success($message, $data = null, $code = 201) {
        return response()->json(['message' => $message, 'data' => $data ] , $code);
    }

    public function error($error = 'Something went wrong.', $code = 401) {
        return response()->json(['error' => $error, $code]);
    }
}
