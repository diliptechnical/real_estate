<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class testimonial extends Model
{
    use HasFactory;
    protected $table = 'testimonial';
    protected $guarded = [];
    public $timestamps = false;
}
