<?php
namespace App\Http\Resources;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Resources\Json\JsonResource;

class Category extends JsonResource
{

    public function toArray($request)
    {
       
        // return [
        //     'category' => $this->getCategories(),
        //     'items' =>  new ItemCollection($this->items)
        //     // 'subCategories' =>  new CategoryCollection($this->subCategories),

        // ];

        return $this->getCategories();
    }

    public function getCategories()
    {
        return [
            'id' => $this->id,
            'label' => $this->label,
            'imgUrl' => $this->img_url,
            'categoryId' => $this->category_id

        ];
    }
    
}