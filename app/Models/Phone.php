<?php

namespace App\Models;

class Phone extends BaseModel
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
