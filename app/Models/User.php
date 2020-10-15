<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens,HasRoles;


    protected $guarded = [
        'id'
    ];


    protected $hidden = [
        'password', 'remember_token',
    ];


    protected $casts = [
        // 'email_verified_at' => 'datetime',
    ];


      public function phone()
     {
        return $this->hasMany(Phone::class);
     }



     public function orders()
     {
        return $this->hasMany(Order::class);
     }


    public function scopeNotUser($query)
    {
         $query->where('id', '!=', auth()->id());
    }

    public function audio()
    {
        return $this->hasMany(Audio::class);
    }

    public function speakers()
    {
        return $this->hasMany(Speaker::class);
    }

    public function devices()
    {
        return $this->hasMany(Device::class);
    }



}
