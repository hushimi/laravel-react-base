import { Head, useForm } from '@inertiajs/react';
import { HiCommandLine } from "react-icons/hi2";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const VerifyEmail = ({ status }) => {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <>
            <Head title="メール認証" />

            <Card className="mt-5 mx-auto border-none w-11/12 sm:w-3/5 bg-[#242629] text-[#94a1b2]">
                <CardHeader>
                    <CardTitle className="text-center text-[#fffffe] text-2xl">
                        <h1 className='flex justify-center items-center'>
                            <HiCommandLine size={25} />
                            <span className="hidden md:block">
                                LR-base
                            </span>
                        </h1>
                    </CardTitle>
                </CardHeader>
                <form onSubmit={submit}>
                    <CardContent>
                        <p className='text-center'>
                            認証メールを送信しました。メール内の確認リンクをクリックしてください。
                        </p>

                    </CardContent>

                    <CardFooter className="w-full flex-col">
                        {status === 'verification-link-sent' && (
                            <div className="text-sm font-medium text-green-600 text-center">
                                認証メール送信完了
                            </div>
                        )}
                        <Button className="bg-[#7f5af0] mx-auto" disabled={processing}>
                            メール再送信
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </>
    );
}

VerifyEmail.layout = (page) => <AuthenticatedLayout children={page} />
export default VerifyEmail;
