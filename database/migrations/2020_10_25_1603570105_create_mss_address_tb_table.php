<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMssAddressTbTable extends Migration
{
    public function up()
    {
        Schema::create('mss_address_tb', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->integer('add_id')->unsigned();
            $table->integer('user_id')->nullable()->unsigned();
            $table->string('ip_address',100);
            $table->string('fname',100);
            $table->string('lname',100);
            $table->string('company_name',50)->nullable();
            $table->text('add1');
            $table->text('add2')->nullable();
            $table->string('zipcode',20);
            $table->string('city',30);
            $table->string('c_state',20);
            $table->string('country',5);
            $table->text('add_info')->nullable();
            $table->string('contact_no',20);
            $table->string('mobile_no',20)->nullable();
            $table->string('email',100);
            $table->string('add_title',30);
            $table->tinyInteger('status')->default(0);
            $table->timestamps();

        });
    }

    public function down()
    {
        Schema::dropIfExists('mss_address_tb');
    }
}
