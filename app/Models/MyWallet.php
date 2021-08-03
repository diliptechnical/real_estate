<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyWallet extends Model
{
    use HasFactory;
    protected $table = 'wallets';

    public function transactions()
    {
        return $this->hasMany(TransactionsModel::class, "wallet_id", "id");
    }
}