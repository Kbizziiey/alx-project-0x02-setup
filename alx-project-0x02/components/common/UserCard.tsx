import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-white hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600">📧 {email}</p>
      <p className="text-sm text-gray-500 mt-1">
        📍 {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
