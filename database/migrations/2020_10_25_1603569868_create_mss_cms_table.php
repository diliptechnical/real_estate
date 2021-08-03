<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMssCmsTable extends Migration
{
    public function up()
    {
        Schema::create('mss_cms', function (Blueprint $table) {
            $table->increments("id");
            $table->string('linkname',250);
            $table->string('heading',245)->nullable();
            $table->integer('lorder')->nullable()->unsigned();
            $table->string('meta_title',245)->nullable();
            $table->text('meta_description')->nullable();
            $table->text('short_description')->nullable();
            $table->text('meta_keywords')->nullable();
            $table->text('pbody')->nullable();
            $table->string('image',500)->nullable();
            $table->tinyInteger('header')->default(0)->unsigned();
            $table->tinyInteger('topheader')->default(0)->unsigned();
            $table->tinyInteger('footer')->default(0)->unsigned();
            $table->integer('type')->default(0)->unsigned();
            $table->integer('underof')->default(0)->unsigned();
            $table->string('external',200)->nullable();
            $table->string('mclass')->nullable();
            $table->integer('top_header')->default(0)->unsigned();
            $table->integer('m_left')->default(0)->unsigned();
            $table->string('language',5)->default('en');
            $table->string('photo',250)->nullable();
            $table->tinyInteger('status')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mss_cms');
    }
}
