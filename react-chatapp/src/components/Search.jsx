import React, { useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { firestore } from '../../utils/firebaseConfig';

const Search = ({ currentUserId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    
    if (!searchTerm.trim()) {
      setError("Enter an email to search.");
      return;
    }

    try {
      const usersRef = collection(firestore, 'users');
      const q = query(usersRef, where('email', '>=', searchTerm), where('email', '<=', searchTerm + '\uf8ff'));
      const snapshot = await getDocs(q);
      
      if (snapshot.empty) {
        setResults([]);
        setError("No users found.");
        return;
      }

      const users = snapshot.docs.map((doc) => doc.data());
      setResults(users);
      setError('');
    } catch (err) {
      console.error('Error searching users:', err.message);
      setError("Failed to fetch users. Check your database permissions.");
    }
  };

  const handleSendFriendRequest = async (userId) => {
    try {
      await addDoc(collection(firestore, 'friend_requests'), {
        from: currentUserId,
        to: userId,
        status: 'pending',
        createdAt: serverTimestamp(),
      });
      alert('Friend request sent!');
    } catch (err) {
      console.error('Error sending request:', err);
      alert('Failed to send request.');
    }
  };

  return (
    <div className="search p-4 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSearch} className="flex space-x-2">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by email"
          className="flex-grow p-2 border rounded-md"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700">
          Search
        </button>
      </form>
      
      {error && <p className="text-red-500 mt-2">{error}</p>}

      <ul className="mt-4">
        {results.map((user) => (
          <li key={user.uid} className="p-2 border-b flex justify-between items-center">
            <span>{user.email}</span>
            <button
              onClick={() => handleSendFriendRequest(user.uid)}
              className="p-1 bg-green-500 text-white rounded-md hover:bg-green-700"
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
