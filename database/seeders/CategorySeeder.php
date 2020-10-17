<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Item;
use App\Models\ItemImage;
use App\Models\Category;

use Faker\Generator as Faker;


class CategorySeeder extends Seeder
{

    public function __construct(Faker $faker)
    {
        $this->faker = $faker;
    }


    public function run()
    {

        $categories = [
            "Electronics",
            "Phone & Tablets",
            "Healh & Beauty",
            "Home & Office",
            "Computing",
            "Fashion",
            "Men Fashion",
            "Women Fashion",
            "Sporting Goods",
            "Baby Products",
            "Automobile",
            "Books & Movies",
            // "Livestock"
        ];

        foreach( $categories as $category)
        {
            $cat = Category::create([
                'label'  => $category,
                'img_url' => $this->faker->imageUrl($width = 50, $height = 50)
            ]);

            $this->command->info( $cat->label . ' ' . $cat->id . ' created!');
            
            for ($i=0; $i < 30; $i++) {

                $item = Item::factory()->create(
                    [ 'category_id' => $cat->id]
                );
        
                 $this->command->info( $i . ' catID ' . $cat->id . ' created!');
        
               for ($j=0; $j < 2; $j++) { 
                   
                ItemImage::factory()->create(
                        ['item_id' => $item->id]
                    );
            
                   }
                }

        }

        
    }

}
