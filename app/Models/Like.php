<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Like extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    function resep()
    {
        return $this->belongsTo(Resep::class);
    }

    function user()
    {
        return $this->belongsTo(User::class);
    }
}
