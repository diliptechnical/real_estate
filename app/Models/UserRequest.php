<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRequest extends Model
{
    use HasFactory;
    protected $table = 'mss_user_request';
    protected $fillable = ["user_id","vender_id","status"];
    public function vendor()
    {
        return $this->belongsTo(User::class, 'id','vender_id');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id','id');
    }
}
