<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\User;
use App\Phone;
use App\Item;
use App\ItemImage;
use App\Speaker;
use Faker\Generator as Faker;
use Illuminate\Support\Str;


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


$factory->define(Item::class, function (Faker $faker) {
    $item = [
        'label' => $faker->name,
        'img_url' => $faker->imageUrl($width = 50, $height = 50),
        'category_id' => 1,
        'price' => $faker->numberBetween($min = 500, $max = 2000),
        'description' => $faker->sentence($nbWords = 15, $variableNbWords = true)
    ];

        return $item;

});


$factory->define(ItemImage::class, function (Faker $faker) {
    return [
        'item_id' => 1,
        'img_url' => $faker->imageUrl($width = 50, $height = 50)
       
    ];
});



$factory->define(Speaker::class, function (Faker $faker) {
    $item = [
        'title' => $faker->name,
        'image_url' => $faker->imageUrl($width = 50, $height = 50),
        'user_id' => 1,
        'description' => $faker->sentence($nbWords = 15, $variableNbWords = true)
    ];

        return $item;

});