import React from 'react';
import dayjs from 'dayjs'; // Для форматирования дат

export default function UserCard({ user }) {
    return (
        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center">
                <img
                    src={user.avatarUrl || 'http://localhost/storage/avatars/avatar.jpg'}
                    alt={user.name}
                    className="h-10 w-10 rounded-full mr-4"
                />
                <div>
                    <div className="text-lg font-semibold">{user.name}</div>
                    <div className="text-sm text-gray-600">{user.email}</div>
                    {/* На маленьких экранах дата будет под именем и почтой */}
                    <div className="text-sm text-gray-500 sm:hidden">
                        Created: {dayjs(user.created_at).format('DD MMM YYYY')}
                    </div>
                </div>
            </div>
            {/* На больших экранах дата будет справа */}
            <div className="text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-auto hidden sm:block">
                Created: {dayjs(user.created_at).format('DD MMM YYYY')}
            </div>
        </div>
    );
}
