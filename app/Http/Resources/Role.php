<?php

namespace App\Http\Resources;

use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class Role extends JsonResource
{

    public function toArray($request)
    {
    
        return [
            'id' => $this->id,
            'name' => $this->name,
            'permissions' => new PermissionCollection($this->permissions),

        ];
    }



}
