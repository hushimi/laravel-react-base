<?php

use App\Http\Controllers\TopController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Topページ
Route::get('/', [TopController::class, 'index'])
    ->name('root');

// users認証
require __DIR__.'/user.php';

// admins認証
Route::prefix('admin')->name('admin.')->group(function(){
    require __DIR__.'/admin.php';
});
