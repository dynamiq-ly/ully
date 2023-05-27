<?php

use App\Http\Controllers\product\ProductController;
use App\Http\Controllers\store\CatalogController;
use App\Http\Controllers\store\CategoryController;
use App\Http\Controllers\store\StoreController;
use App\Http\Controllers\Users\UserController;
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

    // products
    Route::get('/product', ProductController::class . '@index');
    Route::post('/product', ProductController::class . '@store');
    Route::get('/product/{id}', ProductController::class . '@show');
    Route::patch('/product/{id}', ProductController::class . '@update');
    Route::delete('/product/{id}', ProductController::class . '@destroy');

    // categories
    Route::get('/category', CategoryController::class . '@index');
    Route::post('/category', CategoryController::class . '@store');
    Route::get('/category/{id}', CategoryController::class . '@show');
    Route::patch('/category/{id}', CategoryController::class . '@update');
    Route::delete('/category/{id}', CategoryController::class . '@destroy');

    // catalog
    Route::get('/catalog', CatalogController::class . '@index');
    Route::post('/catalog', CatalogController::class . '@store');
    Route::get('/catalog/{id}', CatalogController::class . '@show');
    Route::patch('/catalog/{id}', CatalogController::class . '@update');
    Route::delete('/catalog/{id}', CatalogController::class . '@destroy');

    // store
    Route::get('/', StoreController::class . '@index');
    Route::post('/', StoreController::class . '@store');
    Route::get('/{id}', StoreController::class . '@show');
    Route::patch('/{id}', StoreController::class . '@update');
    Route::delete('/{id}', StoreController::class . '@destroy');
});

Route::prefix('/users')->group(function () {

    // users
    Route::get('/', UserController::class . '@index');
    Route::post('/', UserController::class . '@store');
    Route::get('/{id}', UserController::class . '@show');
    Route::patch('/{id}', UserController::class . '@update');
    Route::delete('/{id}', UserController::class . '@destroy');
});
