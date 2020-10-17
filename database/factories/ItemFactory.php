<?php

namespace Database\Factories;

use App\Models\Item;
use Illuminate\Database\Eloquent\Factories\Factory;

class ItemFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Item::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'label' => $this->faker->name,
            'img_url' => $this->faker->imageUrl($width = 50, $height = 50),
            'category_id' => 1,
            'price' => $this->faker->numberBetween($min = 500, $max = 2000),
            'description' => $this->faker->sentence($nbWords = 15, $variableNbWords = true)
        ];
    }
}


