<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SliderModel extends Model
{
    use HasFactory;
    protected $table = 'mss_slider';
    protected $guarded = [];
    public $timestamps = false;
}
