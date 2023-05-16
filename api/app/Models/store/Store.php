<?php

namespace App\Models\store;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Store extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'store_logo',
        'store_name',
        'store_description',
        'store_thumbnail',
        'store_email',
        'store_phone',
        'store_address',
        'store_instagram',
        'store_facebook',
        'store_twitter',
        'store_whatsapp',
        'store_status',
        'store_is_featured',
        'store_view_count',
        'user_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [];
}
