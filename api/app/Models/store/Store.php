<?php

namespace App\Models\store;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

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
    protected $hidden = [
        'user_id'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [];

    /**
     * Get the user that owns the Store
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    /**
     * Get all of the catalogs for the Store
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function catalogs(): HasMany
    {
        return $this->hasMany(Catalog::class, 'store_id', 'id');
    }
}
