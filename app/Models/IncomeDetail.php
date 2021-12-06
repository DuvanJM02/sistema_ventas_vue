<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class IncomeDetail extends Model
{
    use HasFactory;

    protected $table = 'income_details';
    protected $primaryKey = "id";

    protected $fillable = ['quantity', 'purchase_price', 'sale_price', 'income_id', 'product_id'];
}
 