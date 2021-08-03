<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Interfaces\Wallet;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements Wallet
{
    use HasFactory, Notifiable, HasWallet, HasApiTokens;

    protected $table = 'mss_user';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'email',
        'mobile',
        'address',
        'password',
        'avatar',
        'latitude',
        'longitude',
        'access_token',
        'ip',
        'name',
        'dob',
        'profession',
        'caddress',
        'raddress',
        'relative_person',
        'relation',
        'govt_document',
        'gid',
        'qualification',
        'api_token',
        'status',
        'role_id',
        'isAdmin',
        "created_at",
        "updated_at"
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
    public static function getByToken($apiToken)
    {
        return User::where('api_token', $apiToken);
    }
    public function rating()
    {
        return $this->hasMany(UserRating::class, 'to_id', 'id');
    }
    public function role()
    {
        return $this->belongsTo(Roles::class, 'role_id', 'id');
    }
    // public function products()
    // {
    //     return $this->hasMany(Product::class, 'added_by','id');
    // }
    public function mydocument()
    {
        return $this->hasMany(MyDocument::class, 'user_id', 'id');
    }
    public function category()
    {
        return $this->belongsTo(MyDocument::class, "id", "user_id");
    }
    public function wallets()
    {
        return $this->hasMany(MyWallet::class, "holder_id", "id");
    }
}
