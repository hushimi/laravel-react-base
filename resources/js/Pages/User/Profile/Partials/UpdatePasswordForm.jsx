import InputError from '@/Components/InputError';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/Components/ui/button';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import { useRef } from 'react';

export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-[#fffffe]">
                    パスワードの更新
                </h2>

                <p className="mt-1 text-sm text-[#bfc0c0]">
                    アカウントの安全のため、長くてランダムなパスワードを設定してください。
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <Label htmlFor="current_password">現在のパスワード</Label>
                    <Input
                        id="current_password"
                        name="current_password"
                        type="password"
                        className="h-8 text-sm py-1 mt-1 block w-full"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        autoComplete="off"
                        onChange={(e) => setData('current_password', e.target.value)}
                    />
                    <InputError
                        message={errors.current_password}
                        className="mt-2"
                    />
                </div>

                <div>
                    <Label htmlFor="password">新しいパスワード</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        className="h-8 text-sm py-1 mt-1 block w-full"
                        ref={passwordInput}
                        value={data.password}
                        autoComplete="off"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <Label htmlFor="password_confirmation">パスワード（確認）</Label>
                    <Input
                        id="password_confirmation"
                        name="password_confirmation"
                        type="password"
                        className="h-8 text-sm py-1 mt-1 block w-full"
                        value={data.password_confirmation}
                        autoComplete="off"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

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
