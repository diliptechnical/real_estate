<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyDocument extends Model
{
    use HasFactory;
    protected $table = 'mss_my_document';
    protected $fillable = ["category_id", "short_detail", "document", "document_type"];
    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id', "id");
    }
}