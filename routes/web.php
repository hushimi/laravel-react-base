<?php

use App\Http\Controllers\TopController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// 認証前
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// })->name('root');

// Topページ
Route::get('/', [TopController::class, 'index'])
    ->name('root');

// users認証
require __DIR__.'/auth.php';

// admins認証
Route::prefix('admin')->name('admin.')->group(function(){
    require __DIR__.'/admin.php';
});
