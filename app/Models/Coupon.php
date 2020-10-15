<?php

namespace App\Models;

class Coupon extends BaseModel
{
    
    public static function findByCode($code)
    {
        return self::where('code', $code)->first();
    }

    public function discount($total)
    {
        if ($this->type === 'fixed') {
           return $this->value;
        } elseif ($this->type === 'percent') {
           return round(($this->percent_off / 100) * $total);
        } else {
            return 0;
        }

    }
}
