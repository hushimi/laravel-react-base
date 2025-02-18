<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// 認証前
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('root');

// 認証後のリダイレクト
// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// 認証後Route
// Route::middleware(['auth'])->group(function () {

// });

// users認証
require __DIR__.'/auth.php';

// admins認証
Route::prefix('admin')->name('admin.')->group(function(){
    require __DIR__.'/admin.php';
});
