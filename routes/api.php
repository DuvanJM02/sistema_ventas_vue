<?php

use App\Http\Controllers\AuthUserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\SupplierController;
use App\Models\Income;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('category', CategoryController::class);

Route::resource('product', ProductController::class);
Route::post('product/{product}', [ProductController::class, 'update'])->name('product.update');
Route::post('product/activate/{product}', [ProductController::class, 'activate'])->name('product.activate');

Route::resource('supplier', SupplierController::class);
Route::post('supplier/{supplier}', [SupplierController::class, 'update'])->name('supplier.update');
Route::post('supplier/activate/{supplier}', [SupplierController::class, 'activate'])->name('supplier.activate');

Route::resource('income', IncomeController::class);
Route::post('income/{income}', [IncomeController::class, 'update'])->name('income.update');
Route::post('income/activate/{supplier}', [IncomeController::class, 'activate'])->name('income.activate');

Route::resource('customer', CustomerController::class);
Route::post('customer/{customer}', [CustomerController::class, 'update'])->name('customer.update');
Route::post('customer/activate/{customer}', [CustomerController::class, 'activate'])->name('customer.activate');

Route::resource('sale', SaleController::class);
Route::post('sale/{sale}', [SaleController::class, 'update'])->name('sale.update');
Route::post('sale/activate/{supplier}', [SaleController::class, 'activate'])->name('sale.activate');