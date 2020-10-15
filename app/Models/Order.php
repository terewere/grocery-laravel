<?php

namespace App\Models;


class Order extends BaseModel
{

    public function items()
    {
       return $this->belongsToMany(Item::class)->withPivot('quantity');
    }
    

    public function user()
    {
       return $this->belongsTo(User::class);
    }
}
