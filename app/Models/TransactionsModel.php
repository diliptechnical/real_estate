<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionsModel extends Model
{
    use HasFactory;
    protected $table = 'transactions';
    protected $fillable = [
        "payable_type", "payable_id", "wallet_id", "type", "amount", "confirmed", "meta", "uuid", "created_at", "updated_at"
    ];
    public static function history($user)
    {
        //$wallet = MyWallet::where("user_id", $user->id);
        //return $this->hasone('wallet_id', $wallet->id);
    }
}