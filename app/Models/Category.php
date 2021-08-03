<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $table = 'mss_category';
    protected $fillable = ['linkname','design','heading','lorder','status','is_parent','short_detail','detail','tag_line','pbody','benefits','amount',];
    public $timestamps = false;
    public function parent()
    {
        return $this->belongsTo(self::class, 'is_parent','id');
    }
}
