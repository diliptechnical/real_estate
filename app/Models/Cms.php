<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cms extends Model
{
    use HasFactory;
    protected $table = 'mss_cms';
    protected $fillable = ["language","lorder","status","heading","meta_title","meta_description","meta_keywords","pbody","underof","linkname"];
    public function underof()
    {
        return $this->belongsTo(self::class, 'underof','id');
        //return $this->hasOne('App\Models\Phone', 'foreign_key', 'local_key');
        //return $this->belongsTo('App\Models\User', 'foreign_key', 'owner_key');
    }
}
