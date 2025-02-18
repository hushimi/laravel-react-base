<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\URL;
use Illuminate\Auth\Middleware\EnsureEmailIsVerified as BaseEnsureEmailIsVerified;

// 追加
use Illuminate\Contracts\Auth\MustVerifyEmail;

class CustomEnsureEmailIsVerified extends BaseEnsureEmailIsVerified
{
    /**
     * Emailが認証されているか確認
     *
     */
    public function handle($request, Closure $next, $guard = null, $redirectToRoute = null)
    {
        $user = auth()->guard($guard)->user();
        if (! $user || ($user instanceof MustVerifyEmail && ! $user->hasVerifiedEmail())) {
            $route = $redirectToRoute;
            if ($guard === 'admin') {
                $route = $redirectToRoute ?: 'admin.verification.notice';
            } else {
                $route = $redirectToRoute ?: 'verification.notice';
            }

            return $request->expectsJson()
                ? abort(403, 'Your email address is not verified.')
                : Redirect::guest(URL::route($route));
        }

        return $next($request);
    }
}
