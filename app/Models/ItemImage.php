<?php

namespace App\Models;

class ItemImage extends BaseModel
{
    
    public function item()
    {
        return $this->belongsTo(Item::class);
    }
}
