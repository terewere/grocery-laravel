<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Coupon;

class CouponSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \DB::table('coupons')->insert([
            'code' => 'ABC123',
            'type' => 'fixed',
            'value' => 30,
            'created_at' => NOW()
        ]);

        \DB::table('coupons')->insert([
            'code' => 'DEF4566',
            'type' => 'percent',
            'percent_off' => 5,
            'created_at' => NOW()
        ]);
    }
}
