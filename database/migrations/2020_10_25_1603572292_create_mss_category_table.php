<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMssCategoryTable extends Migration
{
    public function up()
    {
        Schema::create('mss_category', function (Blueprint $table) {

		$table->bigIncrements('id');
		$table->string('heading',245)->nullable();
		$table->integer('lorder')->nullable();
		$table->integer('is_parent')->default(0);
		$table->string('icon',110)->nullable();
		$table->string('design',150)->nullable();
		$table->text('benefits')->nullable();
        $table->string('tag_line',100)->nullable();
		$table->text('detail')->nullable();
		$table->text('pbody')->nullable();
        $table->double('amount')->default(0);
        $table->string('linkname',250);
        $table->string("short_detail")->nullable();
        $table->tinyInteger('status')->default(0);
        $table->timestamps();

        });
    }

    public function down()
    {
        Schema::dropIfExists('mss_category');
    }
}
