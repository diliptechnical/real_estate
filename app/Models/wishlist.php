<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class wishlist extends Model
{
    use HasFactory;
    protected $table = 'mss_wishlist';
    protected $guarded = [];
    public $timestamps = false;
}
