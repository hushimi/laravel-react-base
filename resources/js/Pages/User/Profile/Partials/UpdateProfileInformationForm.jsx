import InputError from '@/Components/InputError';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/Components/ui/button';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = '',
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-[#fffffe]">
                    プロフィール情報
                </h2>

                <p className="mt-1 text-sm text-[#bfc0c0]">
                    アカウントのプロフィール情報とメールアドレスを更新できます。
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <Label htmlFor="name">名前</Label>
                    <Input
                        id="name"
                        name="name"
                        type="text"
                        className="h-8 text-sm py-1 mt-1 block w-full"
                        value={data.name}
                        autoComplete="off"
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <Label htmlFor="email">メールアドレス</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        className="h-8 text-sm py-1 mt-1 block w-full"
                        value={data.email}
                        autoComplete="off"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />
                    <InputError className="mt-2" message={errors.email} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-[#bfc0c0]">
                            メールアドレスが未認証です。
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-[#bfc0c0] underline hover:text-[#fffffe] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                認証メールを再送するにはこちらをクリックしてください。
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                新しい認証リンクをメールアドレスに送信しました。
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <Button className="bg-[#7f5af0]" disabled={processing}>Save</Button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-[#bfc0c0]">
                            保存しました。
                        </p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
