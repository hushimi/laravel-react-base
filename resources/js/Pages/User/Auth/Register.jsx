import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Button } from '@/Components/ui/button';
import InputError from '@/Components/InputError';

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />

            <Card className="mt-5 mx-auto border-none w-11/12 sm:w-3/5 bg-[#242629] text-[#94a1b2]">
                <CardHeader>
                    <CardTitle className="text-center text-[#fffffe] text-3xl">
                        Sign Up
                    </CardTitle>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent>
                        {/* name */}
                        <div className="w-full lg:w-4/6 mx-auto">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                value={data.name}
                                autoComplete="off"
                                onChange={(e) => setData('name', e.target.value)}
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        {/* email */}
                        <div className="w-full lg:w-4/6 mx-auto mt-3">
                            <Label htmlFor="email">Email</Label>
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
                        {/* password */}
                        <div className="w-full lg:w-4/6 mx-auto mt-3">
                            <Label htmlFor="password">Password</Label>
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
                        <div className="w-full lg:w-4/6 mx-auto mt-3">
                            <Label htmlFor="password_confirmation">Confirm Password</Label>
                            <Input
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                autoComplete="off"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                            />
                        </div>
                    </CardContent>

                    <CardFooter className="w-full flex-col">
                        <Button className="bg-[#7f5af0] mx-auto" disabled={processing}>
                            Sign Up
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    );
}

Register.layout = (page) => <GuestLayout children={page} />
export default Register;
