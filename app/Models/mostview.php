<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class mostview extends Model
{
    use HasFactory;
    protected $table = 'mostview';
    protected $guarded = [];
    public $timestamps = false;
}
