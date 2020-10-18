<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class Order extends JsonResource
{

    public function toArray($request)
    {
       
        // return [
        //     'item' => $this->getItems(),
        //     'itemImages' =>  new ItemImageCollection($this->itemImages)

        // ];

      

        return $this->getOrder();
    }

    public function getOrder()
    {
        return [
            'id' => $this->id,
            'deliveryMethod' => $this->delivery_method,
            'shippingFee' => $this->shipping_fee,
            'status' => $this->status,
            'createdAt' => $this->created_at,
            'grandTotal' => $this->grand_total,
            'paymentMethod' => $this->payment_method,
            'user' =>  new User($this->user),
            'items' =>  new ItemCollection($this->items),

          
        ];
    }

    
}