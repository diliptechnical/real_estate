<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
// use Illuminate\Notifications\Notifiable;
// use Laravel\Sanctum\HasApiTokens;

class Contact extends Model
{
    use HasFactory;


    protected $table = 'mss_contact';
    protected $guarded = [];
    public $timestamps = false;

}
