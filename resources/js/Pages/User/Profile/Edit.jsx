import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />
            <Card className="my-8 mx-auto border-none w-11/12 sm:w-2/5 lg:w-1/3 bg-[#242629] text-[#94a1b2]">
                <CardHeader>
                    <CardTitle className="text-center text-[#fffffe] text-3xl">
                        Profile
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-6">
                        <div className="bg-transparent p-0 shadow-none sm:rounded-lg sm:p-0">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>
                        <div className="bg-transparent p-0 shadow-none sm:rounded-lg sm:p-0">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>
                        <div className="bg-transparent p-0 shadow-none sm:rounded-lg sm:p-0">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </CardContent>
                <CardFooter />
            </Card>
        </AuthenticatedLayout>
    );
}
