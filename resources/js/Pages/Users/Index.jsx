import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import UserCard from '@/Components/UserCard'; // Подключаем компонент UserCard

export default function Index({ auth, users }) {
    return (
        <AuthenticatedLayout>
            <Head title="Users" />

            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                    {users.length > 0 ? (
                        users.map(user => (
                            <UserCard key={user.id} user={user} />
                        ))
                    ) : (
                        <p className="p-4 text-gray-600">No users found.</p>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
