import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { authStateListener, logout } from './utils/auth';

function App() {
  const [user, setUser] = useState(null);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = authStateListener((user) => {
      setUser(user);
      if (user) {
        navigate('/chat');
      } else {
        navigate('/login');
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [navigate]);

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/chat"
          element={
            user ? (
              <div className="flex w-full h-screen bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/30">
                {/* Sidebar with Logout */}
                <Sidebar userId={user.uid} onFriendSelect={setSelectedFriend} />
                <button
                  onClick={logout}
                  className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-700 transition"
                >
                  Logout
                </button>

                {/* Chat Section */}
                <div className="flex-grow p-4">
                  {selectedFriend ? (
                    <Chat userId={user.uid} friendId={selectedFriend.uid} />
                  ) : (
                    <p className="text-white text-lg font-semibold text-center">Select a friend to start chatting.</p>
                  )}
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
