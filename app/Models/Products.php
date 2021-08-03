<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $fillable = ['name','added_by','linkname','meta_title','meta_description','meta_keywords', 'cname', 'selling_cost', 'purchese_cost', 'market_price', 'detail', 'attr', 'shipping_detail', 'policy_detail', 'image_collection', 'shipping', 'language', 'stock', 'youtube', 'is_offer', 'is_featured', 'visit', 'status', 'pcode', 'unit', 'video_url', 'is_accessories', 'gst', 'tag', 'header_image', 'footer_image', 'group_id'];

    public function added_by()
    {
        return $this->belongsTo(Amenities::class, 'added_by','id');
    }
}
