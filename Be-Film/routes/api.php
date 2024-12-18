<?php

use App\Http\Controllers\FilmController;
use App\Http\Controllers\KategoriController;
use Illuminate\Support\Facades\Route;

Route::get('/kategori', [KategoriController::class, 'index']);
Route::get('/films', [FilmController::class, 'index']);
Route::get('/films/{slug}', [FilmController::class, 'show']);
