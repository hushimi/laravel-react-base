import GuestLayout from '@/Layouts/GuestLayout';
import { cn } from "@/lib/utils"
import { Head, Link, useForm } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from '@/Components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import InputError from '@/Components/InputError';

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
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <Card className="mt-5 mx-auto border-none w-11/12 sm:w-3/5 bg-[#242629] text-[#94a1b2]">
                <CardHeader>
                    <CardTitle className="text-center text-[#fffffe] text-3xl">
                        Login
                    </CardTitle>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent>
                        <div className="w-full lg:w-4/6 mx-auto">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="email"
                                id="email"
                                autoComplete="off"
                                onChange={(e) => setData('email', e.target.value)}
                            />
                        </div>
                        <div className="w-full lg:w-4/6 mx-auto mt-4">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                type="password"
                                id="password"
                                autoComplete="off"
                                onChange={(e) => setData('password', e.target.value)}
                            />
                        </div>
                        {(errors.email || errors.password) && (
                            <InputError
                                message="ログインIDまたはパスワードが一致しません。"
                                className="mt-2 w-full text-center"
                            />
                        )}
                    </CardContent>

                    <CardFooter className="w-full flex-col">
                        <div className="flex items-center space-x-2 mb-3">
                            <Checkbox id="remember"
                                className="border-white"
                                onChange={(e) =>
                                    setData('remember', e.target.checked)
                                }
                            />
                            <Label htmlFor="remember" className="cursor-pointer">Remember me</Label>
                        </div>
                        <Button className="bg-[#7f5af0] mx-auto" disabled={processing}>
                            LOG IN
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
