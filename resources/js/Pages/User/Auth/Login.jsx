import { Head, Link, useForm } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/Components/ui/button';
import { Checkbox } from "@/components/ui/checkbox";
import InputError from '@/Components/InputError';
import { cn } from "@/lib/utils";
import GuestLayout from '@/Layouts/GuestLayout';

const Login = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600 text-center">
                    {status}
                </div>
            )}

            <Card className="my-5 mx-auto border-none w-11/12 sm:w-2/5 lg:w-1/3 bg-[#242629] text-[#94a1b2]">
                <CardHeader>
                    <CardTitle className="text-center text-[#fffffe] text-xl">
                        Log in
                    </CardTitle>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent>
                        <div className="w-full mx-auto">
                            <Label htmlFor="email">メールアドレス</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="off"
                                className="h-8 text-sm py-1"
                                onChange={(e) => setData('email', e.target.value)}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="w-full mx-auto mt-3">
                            <Label htmlFor="password">パスワード</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="off"
                                className="h-8 text-sm py-1"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                    </CardContent>
                    <CardFooter className="w-full flex-col">
                        <div className="flex items-center space-x-2 mb-3">
                            <Checkbox id="remember"
                                className="border-white"
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <Label htmlFor="remember" className="cursor-pointer">Remember me</Label>
                        </div>
                        <Button className="bg-[#7f5af0] mx-auto" disabled={processing}>
                            Log in
                        </Button>
                        {canResetPassword && (
                            <div className='mt-3'>
                                <Link
                                    href={route('password.request')}
                                    className={cn(
                                        "rounded-md",
                                        "text-sm text-[#7f5af0] underline",
                                    )}
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        )}
                    </CardFooter>
                </form>
            </Card>
        </>
    );
}

Login.layout = (page) => <GuestLayout children={page} />
export default Login;
