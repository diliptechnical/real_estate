<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserRequest extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mss_user_request', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->index();//>bigInteger('user_id');
            $table->unsignedBigInteger('vender_id')->index();//bigInteger('vender_id');
            $table->foreign('user_id')->references('id')->on('mss_site_user')->onDelete('cascade');
            $table->foreign('vender_id')->references('id')->on('mss_site_user')->onDelete('cascade');
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
        Schema::dropIfExists('mss_user_request');
    }
}
