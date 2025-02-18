import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, useForm } from '@inertiajs/react';

export default function Index({ blogs }) {
    const { delete: destory } = useForm();
    const handleDelete = (id) => {
        destory(route("blogs.destroy", id), {
            preserveScroll: true,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Blog Index
                </h2>
            }
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div>
                            <Link href={route("blogs.create")}>
                                <PrimaryButton type="button">
                                    Create
                                </PrimaryButton>
                            </Link>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Content</th>
                                </tr>
                            </thead>
                            <tbody>
                                {blogs.map((blog) => {
                                    return (
                                        <tr key={blog.id}>
                                            <td className="border px-4 py-2">
                                                {blog.title}
                                            </td>
                                            <td className="border px-4 py-2">
                                                {blog.content}
                                            </td>
                                            <td className="border px-4 py-2">
                                                <Link href={route("blogs.edit", blog.id)}>
                                                    <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-xs font-semibold">
                                                        更新
                                                    </button>
                                                </Link>
                                            </td>
                                            <td className="border px-4 py-2">
                                                <button
                                                    className="px-4 py-2 bg-red-500 text-white rounded-lg text-xs font-semibold"
                                                    onClick={() =>
                                                        handleDelete(blog.id)
                                                    }
                                                >
                                                    削除
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
