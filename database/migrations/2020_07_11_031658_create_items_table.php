<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('label');
            $table->string('img_url');
            $table->boolean('active')->default(0);
            $table->string('description')->nullable();
            $table->double('price', 2)->nullable();
            $table->string('color')->nullable();
            $table->string('size')->nullable();


            //vehicle
            $table->string('make')->nullable();
            $table->string('model')->nullable();
            $table->string('condition')->nullable();
            $table->string('fuel_type')->nullable();
            $table->string('mileage')->nullable();
            $table->string('registration_year')->nullable();
            $table->string('engine_size')->nullable();
            $table->string('transmission')->nullable()->comment('manual and automatic');
           
        

            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade')->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
}
