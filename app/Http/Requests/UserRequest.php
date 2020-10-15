<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
 
    public function authorize()
    {
        return true;
    }

  
    public function rules()
    {
        return [
            'name' => 'required',
            'password'  => 'required:confirmed|min:6',
            'email' => 'required|unique:users',
            // 'role' => 'required',
     
        ];
    }
}

