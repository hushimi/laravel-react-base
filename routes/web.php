<?php

use App\Http\Controllers\TopController;
use Illuminate\Support\Facades\Route;

// Topページ
Route::get('/', [TopController::class, 'index'])->name('root');

// user routes
require __DIR__.'/user.php';

// admin routes
Route::prefix('admin')->name('admin.')->group(function(){
    require __DIR__.'/admin.php';
});
