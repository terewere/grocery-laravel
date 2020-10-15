<?php

namespace App\Models;

class Category extends BaseModel
{
    
    public function items()
    {
        return $this->hasMany(Item::class);
    }


    public function subCategories()
    {
        return $this->hasMany(Category::class, 'category_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }


}
