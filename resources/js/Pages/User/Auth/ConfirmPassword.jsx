import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from '@/Components/ui/button';
import InputError from '@/Components/InputError';
import GuestLayout from '@/Layouts/GuestLayout';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.confirm'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="パスワード確認" />
            <Card className="my-8 mx-auto border-none w-11/12 sm:w-2/5 lg:w-1/3 bg-[#242629] text-[#94a1b2]">
                <CardHeader>
                    <CardTitle className="text-center text-[#fffffe] text-xl">
                        パスワード確認
                    </CardTitle>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent>
                        <div className="mb-4 text-sm text-gray-400 text-center">
                            こちらはセキュリティ保護されたエリアです。続行するにはパスワードを入力してください。
                        </div>
                        <div className="w-full mx-auto">
                            <Label htmlFor="password">パスワード</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="off"
                                className="h-8 text-sm py-1 mt-1"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                isFocused={true}
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                    </CardContent>
                    <CardFooter className="w-full flex-col">
                        <Button className="bg-[#7f5af0] mx-auto" disabled={processing}>
                            Confirm
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </GuestLayout>
    );
}
