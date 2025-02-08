
import { getMessages, sendMessage } from '../utils/firestore';
import React, { useState, useEffect, useRef } from 'react';
// import { sendMessage, getMessages } from '../../firestore';

const Chat = ({ userId, friendId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!userId || !friendId) return;
    
    const unsubscribe = getMessages(userId, friendId, setMessages);
    return () => unsubscribe();
  }, [userId, friendId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendMessage(userId, friendId, message);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-blue-500 to-purple-500 p-6">
      {/* Chat Header */}
      <div className="p-4 bg-white/10 backdrop-blur-lg text-white text-center text-lg font-semibold rounded-t-xl">
        Chat with {friendId}
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-white/10 backdrop-blur-lg border border-white/30 rounded-xl shadow-2xl">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`p-3 rounded-lg max-w-xs w-fit ${
                msg.userId === userId ? 'ml-auto bg-blue-500' : 'bg-gray-700'
              }`}
            >
              <strong className="block text-xs text-gray-300">{msg.userId}</strong>
              <p className="text-sm text-white">{msg.message}</p>
            </div>
          ))
        ) : (
          <p className="text-white text-center">No messages yet. Start a conversation!</p>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <form onSubmit={handleSendMessage} className="p-4 bg-white/10 backdrop-blur-lg flex rounded-b-xl border-t border-white/30">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg bg-white/20 backdrop-blur-md text-white placeholder-white outline-none"
        />
        <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
