<?php

namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class Item extends JsonResource
{

    public function toArray($request)
    {
       
        // return [
        //     'item' => $this->getItems(),
        //     'itemImages' =>  new ItemImageCollection($this->itemImages)

        // ];

        return $this->getItems();
    }

    public function getItems()
    {
        return [
            'id' => $this->id,
            'label' => $this->label,
            'imgUrl' => $this->img_url,
            'categoryId' => $this->category_id,
            // 'active' => $this->active,
            'description' => $this->description,
            'price' => $this->price,
            // 'color' => $this->color,
            // 'size' => $this->size,
            // 'make' => $this->make,
            // 'model' => $this->model,
            // 'condition' => $this->condition,
            // 'fuelType' => $this->fuel_type,
            // 'mileage' => $this->mileage,
            // 'registrationYear' => $this->registration_year,
            // 'engineSize' => $this->engine_size,
            // 'transmission' => $this->transmission
        ];
    }

    
}