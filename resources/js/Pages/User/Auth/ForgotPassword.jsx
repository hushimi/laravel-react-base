import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/Components/ui/button';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600 text-center">
                    {status}
                </div>
            )}

            <Card className="mt-5 mx-auto border-none w-11/12 sm:w-3/5 bg-[#242629] text-[#94a1b2]">
                <CardHeader>
                    <CardTitle className="text-center text-[#fffffe] text-3xl">
                        Forgot Password
                    </CardTitle>
                    <div className="text-sm text-gray-400 mt-2 text-center">
                        Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.
                    </div>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent>
                        <div className="w-full lg:w-4/6 mx-auto">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                autoComplete="off"
                                onChange={(e) => setData('email', e.target.value)}
                                isFocused={true}
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                    </CardContent>
                    <CardFooter className="w-full flex-col">
                        <Button className="bg-[#7f5af0] mx-auto" disabled={processing}>
                            Email Password Reset Link
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
