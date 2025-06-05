import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="border border-red-400 rounded-lg p-4 shadow-sm">
      <h2 className="text-lg font-semibold text-blue-700">{title}</h2>
      <p className="text-sm text-gray-600">{body}</p>
      <div className="text-xs text-yellow-400 mt-2">User ID: {userId} | Post ID: {id}</div>
    </div>
  );
};

export default PostCard;
