<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMssMyDocument extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mss_my_document', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->unsignedBigInteger('category_id')->index(); //bigInteger('category_id');
            $table->string("short_detail")->nullable();
            $table->string("document");
            $table->string("document_type");
            $table->timestamps();
            $table->foreign('category_id')->references('id')->on('mss_category')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mss_my_document');
    }
}