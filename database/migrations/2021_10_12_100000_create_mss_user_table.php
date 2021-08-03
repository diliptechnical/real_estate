<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMssUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mss_site_user', function (Blueprint $table) {
            $table->bigIncrements("id");
            $table->string('name');
            $table->string('email')->unique()->nullable();
            $table->string('mobile')->nullable();
            $table->string('address')->nullable();
            $table->string('caddress')->nullable();
            $table->string('raddress')->nullable();
            $table->string('latitude')->nullable();
            $table->string('longitude')->nullable();
            $table->string('ip')->nullable();
            $table->date("dob")->nullable();
            $table->string("profession")->nullable();
            $table->string("relative_person")->nullable();
            $table->string("relation")->nullable();
            $table->string("govt_document")->nullable();
            $table->string("govt_gid")->nullable();
            $table->string("qualification")->nullable();
            $table->unsignedBigInteger('role_id')->index();
            $table->string('avatar')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->text('about')->nullable();
            $table->string('api_token', 80)->unique()->nullable()->default(null);
            $table->tinyInteger('status')->default(0);
            $table->foreign('role_id')->references('id')->on('mss_roles')->onDelete('cascade');
            $table->rememberToken();
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
        Schema::dropIfExists('mss_site_user');
    }
}