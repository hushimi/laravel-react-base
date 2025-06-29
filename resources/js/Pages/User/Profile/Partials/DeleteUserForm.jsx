import InputError from '@/Components/InputError';
import Modal from '@/Components/Modal';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/Components/ui/button';
import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
        clearErrors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        clearErrors();
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header>
                <h2 className="text-lg font-medium text-[#fffffe]">
                    アカウント削除
                </h2>

                <p className="mt-1 text-sm text-[#bfc0c0]">
                    アカウントを削除すると、すべてのデータとリソースが完全に削除されます。削除前に必要なデータをダウンロードしてください。
                </p>
            </header>

            <Button variant="destructive" onClick={confirmUserDeletion}>
                Delete Account
            </Button>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-[#fffffe]">
                        本当にアカウントを削除しますか？
                    </h2>

                    <p className="mt-1 text-sm text-[#bfc0c0]">
                        アカウントを削除すると、すべてのデータとリソースが完全に削除されます。パスワードを入力して削除を確定してください。
                    </p>

                    <div className="mt-6">
                        <Label htmlFor="password" className="sr-only">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            ref={passwordInput}
                            value={data.password}
                            className="h-8 text-sm py-1 mt-1 block w-3/4"
                            autoComplete="off"
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder="Password"
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <Button variant="secondary" type="button" onClick={closeModal}>
                            Cancel
                        </Button>

                        <Button variant="destructive" className="ms-3" disabled={processing}>
                            Delete Account
                        </Button>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
