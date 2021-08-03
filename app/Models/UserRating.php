<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserRating extends Model
{
    use HasFactory;
    protected $table = 'mss_user_rating';
    protected $fillable = ["from_id","to_id","heading","detail","rating","status"];
    public function from_user()
    {
        return $this->belongsTo(User::class, 'from_id','id');
    }
    public function to_user()
    {
        return $this->belongsTo(User::class, 'to_id','id');
    }
}
