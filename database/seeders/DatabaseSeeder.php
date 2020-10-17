<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
   
    public function run()
    {
        $this->command->call('passport:install');

        // factory(\App\Speaker::class, 1)->create();
        // factory(\App\Audio::class, 45)->create();


        $this->call(RolePermissionSeeder::class);
        
        // $this->call(CouponSeeder::class);

        $this->call(CategorySeeder::class);
        // $this->call(AdvertSeeder::class);
        // $this->call(AdImageSeeder::class);




    }
}
