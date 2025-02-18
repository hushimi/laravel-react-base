<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Request;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // ログインしていない場合のリダイレクト
        $middleware->redirectGuestsTo(function (Request $request) {
            // admin route
            if ($request->routeIs('admin.*')) {
                return route('admin.login');
            }

            return route('login');
        });

        $middleware->web(append: [
            \App\Http\Middleware\HandleInertiaRequests::class,
            \Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets::class,
        ]);

        // エイリアスとして追加(ログイン後のリダイレクト / email認証確認)
        $middleware->alias([
            'verified' => \App\Http\Middleware\CustomEnsureEmailIsVerified::class,
            'guest' => \App\Http\Middleware\CustomRedirectIfAuthenticated::class,
        ]);

    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
