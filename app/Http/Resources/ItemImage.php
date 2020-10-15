<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class ItemImage extends JsonResource
{

    public function toArray($request)
    {
       
        return [
            'id' => $this->id,
            'imgUrl' => $this->img_url,
            'itemId' => $this->item_id
        ];
    }

    
}