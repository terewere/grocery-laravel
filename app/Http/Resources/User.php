<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class User extends JsonResource
{

    public function toArray($request)
    {
        
        return [
            'id' => $this->id,
            'name' => $this->name,
            'email' => $this->email,
            'address' => $this->address,
            'city' => $this->city,
            'region' => $this->region,
            'phone' => $this->phone,
            'imgUrl' => $this->img_url,
            'permissions' => $this->getAllPermissions()->pluck('name'),
            'role' => $this->roles->first()['name'],
           
        ];
    }


}
