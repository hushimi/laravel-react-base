<?php

namespace App\Notifications;

use Illuminate\Auth\Notifications\ResetPassword as BaseResetPassword;
use Illuminate\Notifications\Messages\MailMessage;

class CustomResetPassword extends BaseResetPassword
{

    /**
     * Get the reset URL for the given notifiable (user or admin).
     *
     * @param  mixed  $notifiable
     * @return string
     */
    protected function resetUrl($notifiable)
    {
        // 管理者の場合は admin のルート、それ以外のユーザーの場合は user のルートを使用
        if (request()->routeIs('admin.*')) {
            return url(route('admin.password.reset', [
                'token' => $this->token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false));
        } else {
            return url(route('password.reset', [
                'token' => $this->token,
                'email' => $notifiable->getEmailForPasswordReset(),
            ], false));
        }
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        $url = $this->resetUrl($notifiable);
        return (new MailMessage)
            ->subject('パスワード再設定のご案内')
            ->view('emails.password_reset', [
                'url' => $url,
            ]);
    }

}
