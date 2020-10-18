<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');

            // $table->string('email')->nullable();
            // $table->string('name')->nullable();
            // $table->string('address')->nullable();
            // $table->string('city')->nullable();
            // $table->string('region')->nullable();
            // $table->string('phone')->nullable();
            // $table->string('name_on_card')->nullable();
            $table->integer('discount')->default(0);
            $table->string('discount_code')->nullable();
            $table->integer('sub_total')->nullable();
            $table->integer('tax')->nullable();
            $table->integer('grand_total')->nullable();
            $table->string('payment_method')->nullable();
            $table->string('delivery_method')->nullable();
            $table->integer('shipping_fee')->nullable();
            $table->string('payment_gateway')->default('hubtel');
            $table->enum('status', [ 'processed', 'shipped', 'delivered'])->default('processed');
            $table->string('error')->nullable();
            $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
