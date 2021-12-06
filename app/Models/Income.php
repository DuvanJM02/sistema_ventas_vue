<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Income extends Model
{
    use HasFactory;

    protected $table = 'income';
    protected $primaryKey = 'id';

    protected $fillable = [
        't_comprobante',
        's_comprobante',
        'n_comprobante',
        'date',
        'tax',
        'status',
        'user_id',
    ];
}
