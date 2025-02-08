import React from 'react';
import Friends from './Friends';
import FriendRequests from './FriendRequest'; // Fixed import

const Sidebar = ({ userId, onFriendSelect }) => {
  return (
    <div className="w-1/4 min-w-[250px] p-4 bg-white/10 backdrop-blur-lg border border-white/30 h-full shadow-xl rounded-xl">
      <h2 className="text-xl font-bold text-white text-center mb-4">Friends</h2>
      <Friends userId={userId} onFriendSelect={onFriendSelect} />
      <h2 className="text-lg font-bold mt-8 mb-4 text-white text-center">Friend Requests</h2>
      <FriendRequests currentUserId={userId} />
    </div>
  );
};

export default Sidebar;
