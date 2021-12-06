<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    use HasFactory;

    protected $table = 'sales';
    protected $primaryKey = 'id';

    protected $fillable = [
        't_comprobante',
        's_comprobante',
        'n_comprobante',
        'date',
        'tax',
        'status',
        'sale_total',
        'user_id',
    ];
}
 