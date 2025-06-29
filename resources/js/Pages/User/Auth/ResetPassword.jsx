import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/Components/ui/button';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="パスワード再設定" />
            <Card className="mt-5 mx-auto border-none w-11/12 sm:w-3/5 bg-[#242629] text-[#94a1b2]">
                <CardHeader>
                    <CardTitle className="text-center text-[#fffffe] text-3xl">
                        パスワード再設定
                    </CardTitle>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent>
                        <input type="hidden" name="token" value={data.token} />
                        <div className="w-full lg:w-4/6 mx-auto">
                            <Label htmlFor="email">メールアドレス</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                autoComplete="off"
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="w-full lg:w-4/6 mx-auto mt-4">
                            <Label htmlFor="password">パスワード</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                autoComplete="off"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="w-full lg:w-4/6 mx-auto mt-4">
                            <Label htmlFor="password_confirmation">パスワード（確認）</Label>
                            <Input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                autoComplete="off"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>
                    </CardContent>
                    <CardFooter className="w-full flex-col">
                        <Button className="bg-[#7f5af0] mx-auto" disabled={processing}>
                            Reset Password
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
