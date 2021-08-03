<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserRatingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mss_user_rating', function (Blueprint $table) {
            $table->id();
            $table->string('heading',245);
            $table->string('detail',500)->nullable();
            $table->integer('rating');
            $table->unsignedBigInteger('from_id')->index();//bigInteger('from_id');
            $table->unsignedBigInteger('to_id')->index();//bigInteger('to_id');
            $table->foreign('from_id')->references('id')->on('mss_site_user')->onDelete('cascade');
            $table->foreign('to_id')->references('id')->on('mss_site_user')->onDelete('cascade');
            $table->tinyInteger('status')->default(0);
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
        Schema::dropIfExists('mss_user_rating');
    }
}
