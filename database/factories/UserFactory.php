<?php

namespace Database\Factories;

use App\Models\User;
use App\Models\Phone;
use \App\Models\Item;
use \App\Models\ItemImage;
use Faker\Generator as Faker;
use Illuminate\Support\Str;
use Illuminate\Database\Eloquent\Factories\Factory;


$factory->define(Phone::class, function (Faker $faker) {
    return [
        'number' => '0243'. random(),
        'channel' => 'MTN',
        'status' => 0,
        'verify_token' => null,
        'user_id' => null
    ];
});

$factory->define(User::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => function(){
               return factory(Phone::class)->create( ['status' => 1] )->number;
        },
        'email_verified_at' => now(),
        'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
        'remember_token' => Str::random(10),
    ];
});


// $factory->define(Item::class, function (Faker $faker) {
//     $item = [
//         'label' => $faker->name,
//         'img_url' => $faker->imageUrl($width = 50, $height = 50),
//         'category_id' => 1,
//         'price' => $faker->numberBetween($min = 500, $max = 2000),
//         'description' => $faker->sentence($nbWords = 15, $variableNbWords = true)
//     ];

//         return $item;

// });


$factory->define(ItemImage::class, function (Faker $faker) {
    return [
        'item_id' => 1,
        'img_url' => $faker->imageUrl($width = 50, $height = 50)
       
    ];
});

