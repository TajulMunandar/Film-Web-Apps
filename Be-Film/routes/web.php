<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;

use App\Http\Controllers\FilmDashboardController;
use App\Http\Controllers\KategoriController;
use App\Http\Controllers\KategoriDashboarController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::group(['middleware' => 'guest'], function () {
    Route::get('/login', [AuthController::class, 'index'])->name('login');
    Route::post('/login', [AuthController::class, 'authenticate'])->name('login');
});

Route::group(['middleware' => 'auth'], function () {
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
    Route::prefix('/dashboard')->group(function () {
        Route::get('/users', [UserController::class, 'index']);
        Route::get('/film', [FilmDashboardController::class, 'index']);
        Route::get('/kategori', [KategoriDashboarController::class, 'index']);
    });

    Route::get('/logout', [AuthController::class, 'logout'])->name('logout');
});
