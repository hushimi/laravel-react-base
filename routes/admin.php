<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Admin\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Admin\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Admin\Auth\NewPasswordController;
use App\Http\Controllers\Admin\Auth\PasswordController;
use App\Http\Controllers\Admin\Auth\PasswordResetLinkController;
use App\Http\Controllers\Admin\Auth\RegisteredUserController;
use App\Http\Controllers\Admin\Auth\VerifyEmailController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// --------------------------------------------------
// 認証前Route
// --------------------------------------------------
Route::middleware('guest:admin')->group(function () {
    // admin root アクセス
    Route::get('/', [AuthenticatedSessionController::class, 'create']);

    // 登録
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');
    Route::post('register', [RegisteredUserController::class, 'store']);

    // ログイン
    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');
    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    // Forgot password
    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');
    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    // Reset password
    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');
    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

// ----------------------------------------------------
// 認証後Route
// ----------------------------------------------------
Route::middleware('auth:admin')->group(function () {
    // email認証
    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    // 認証ページ
    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    // 認証メール送信
    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    //
    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    // パスワード変更
    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);
    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    // ログアウト
    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    // ----------------------------------------------------
    // Verified
    // ----------------------------------------------------
    Route::middleware(['verified:admin'])->group(function () {
        // Dashboard
        Route::get('/dashboard', function () { return Inertia::render('Admin/Dashboard'); })
            ->name('dashboard');
    });
});
