import React, { useState } from 'react';
import { getFirestore, collection, query, where, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { app } from '../utils/firebaseConfig.js';

const firestore = getFirestore(app);

const Search = ({ currentUserId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setMessage('');
    setResults([]);

    if (!searchTerm) return;

    try {
      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('email', '>=', searchTerm), where('email', '<=', searchTerm + '\uf8ff'));
      const snapshot = await getDocs(q);

      if (snapshot.empty) {
        setMessage('No users found.');
        return;
      }

      const users = snapshot.docs.map((doc) => doc.data());
      setResults(users);
    } catch (error) {
      console.error('Error searching users:', error);
      setMessage('Error searching users.');
    }
  };

  const handleSendFriendRequest = async (userId) => {
    try {
      // Prevent sending requests to oneself
      if (userId === currentUserId) {
        setMessage("You can't send a friend request to yourself.");
        return;
      }

      // Check if a friend request already exists
      const requestsRef = collection(firestore, 'friend_requests');
      const q = query(requestsRef, where('from', '==', currentUserId), where('to', '==', userId));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        setMessage('Friend request already sent.');
        return;
      }

      // Send friend request
      await addDoc(requestsRef, {
        from: currentUserId,
        to: userId,
        status: 'pending',
        createdAt: serverTimestamp(),
      });

      setMessage('Friend request sent!');
    } catch (error) {
      console.error('Error sending friend request:', error);
      setMessage('Error sending request.');
    }
  };

  return (
    <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4 text-center">Search for Users</h2>
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by email"
          className="flex-grow p-2 rounded-lg bg-white/20 text-white outline-none"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Search
        </button>
      </form>

      {message && <p className="text-center text-white mt-2">{message}</p>}

      <ul className="mt-4 space-y-2">
        {results.map((user) => (
          <li key={user.uid} className="p-3 rounded-lg bg-white/20 text-white flex justify-between items-center">
            <span>{user.email}</span>
            <button
              onClick={() => handleSendFriendRequest(user.uid)}
              className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Add Friend
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
