<?php

use App\Http\Controllers\store\StoreController;
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

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('/store')->group(function () {
    // store
    Route::get('/', StoreController::class . '@index');
    Route::post('/', StoreController::class . '@store');
    Route::get('/{id}', StoreController::class . '@show');
    Route::put('/{id}', StoreController::class . '@update');
    Route::delete('/{id}', StoreController::class . '@destroy');
});
