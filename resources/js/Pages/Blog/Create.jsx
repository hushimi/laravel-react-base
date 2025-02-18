import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create({ }) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("blogs.store"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create blog
                </h2>
            }
        >

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <form onSubmit={submit}>
                                {/* タイトル */}
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />

                                    <TextInput
                                        type="text"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="title"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.title}
                                        className="mt-2"
                                    />
                                </div>
                                {/* コンテンツ */}
                                <div>
                                    <InputLabel
                                        htmlFor="content"
                                        value="Content"
                                    />

                                    <TextInput
                                        type="text"
                                        name="content"
                                        value={data.content}
                                        autoComplete="content"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("content", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.content}
                                        className="mt-2"
                                    />
                                </div>
                                {/* ボタン */}
                                <div className="flex items-center justify-end mt-4">
                                    <PrimaryButton
                                        className="ml-4"
                                        disabled={processing}
                                    >
                                        作成
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}
