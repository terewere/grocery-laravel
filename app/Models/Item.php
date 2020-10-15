<?php

namespace App\Models;


class Item extends BaseModel
{
    
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function orders()
    {
       return $this->belongsToMany(Order::class)->withPivot('quantity');
    }

    public function itemImages()
    {
       return $this->hasMany(ItemImage::class);
    }
}

