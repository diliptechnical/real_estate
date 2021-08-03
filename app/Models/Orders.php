<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    use HasFactory;
    protected $table = 'orders';
    protected $fillable = [
        "orderid","payable_type","payable_id","wallet_id","type","amount","confirmed","meta","uuid","uid","created_at","updated_at","status"
     ];
}
