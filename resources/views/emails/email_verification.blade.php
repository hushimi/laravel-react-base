<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body style="margin:0;padding:0;background:#f7f7f8;font-family:sans-serif;">
    <table width="100%" bgcolor="#f7f7f8" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
            <td align="center">
                <table width="600" bgcolor="#fff" cellpadding="0" cellspacing="0"
                       style="border-radius:16px;box-shadow:0 2px 8px rgba(0,0,0,0.04);padding:40px 32px;">
                    <tr>
                        <td align="left">
                            <p style="color:#a259e6;margin:0 0 8px 0;font-weight:700;font-size:1.3em;">
                                メールアドレス認証のお知らせ
                            </p>
                            <p style="color:#6b7280;font-size:1em;margin:0 0 24px 0;">ご登録いただき、ありがとうございます。</p>
                            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;">
                            <p style="font-size:1em;margin:0 0 16px 0;">以下のリンクをクリックして、メールアドレスの認証を完了してください：</p>
                            <p style="margin:24px 0;">
                                <a href="{{ $url }}"
                                   style="
                                        display: inline-block;
                                        padding: 10px 20px;
                                        background: #a259e6;
                                        color: #fff;
                                        text-decoration: none;
                                        border-radius: 24px;
                                        font-size: 1em;
                                        font-weight: 600;
                                    ">
                                    メールアドレスを認証する
                                </a>
                            </p>
                            <p style="color:#6b7280;font-size:0.92em;margin:0 0 16px 0;">このリンクは60分間有効です。</p>
                            <p style="color:#6b7280;font-size:0.95em;margin:0 0 16px 0;">
                                もし、このアカウント登録を依頼していない場合は、このメッセージは無視してください。</p>
                            <p style="color:#6b7280;font-size:0.95em;margin:0;">よろしくお願いいたします。</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
