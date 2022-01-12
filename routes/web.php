<?php

use App\Http\Controllers\AuthUserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\SaleController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('layouts.admin');
// });
Auth::routes();

Route::get('showUser', [AuthUserController::class, 'showUser']);

Route::middleware('auth')->group(function(){
    Route::post('income-store', [IncomeController::class, 'store'])->name('income.store');
    Route::get('income-print', [IncomeController::class, 'incomePrint'])->name('income.print');
    Route::get('income-print/{income}', [IncomeController::class, 'incomePrint'])->name('income.printt');

    Route::post('sale-store', [SaleController::class, 'store'])->name('sale.store');
    Route::get('sale-print', [SaleController::class, 'salePrint'])->name('sale.print');
    Route::get('sale-print/{income}', [SaleController::class, 'salePrint'])->name('sale.printt');

    Route::get('{any}', function () {
        return view('app');
    })->where('any', '.*');
});