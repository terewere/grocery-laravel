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
            'number' => $this->email,
            'imgUrl' => $this->img_url,
            'permissions' => $this->getAllPermissions()->pluck('name'),
            'role' => $this->roles->first()['name'],
           
        ];
    }




}
