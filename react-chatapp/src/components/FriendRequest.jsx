import React, { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs, doc, updateDoc, setDoc, onSnapshot } from 'firebase/firestore';
import { app } from '../utils/firebaseConfig.js';

const firestore = getFirestore(app);

const FriendRequests = ({ currentUserId }) => {
  const [friendRequests, setFriendRequests] = useState([]);

  useEffect(() => {
    if (!currentUserId) return;

    const requestsRef = collection(firestore, 'friend_requests');
    const q = query(requestsRef, where('to', '==', currentUserId), where('status', '==', 'pending'));

    const unsubscribe = onSnapshot(q, async (snapshot) => {
      const requests = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Fetch user details for each request
      const userPromises = requests.map(async (request) => {
        const userDoc = await getDocs(query(collection(firestore, 'users'), where('uid', '==', request.from)));
        return { ...request, fromUser: userDoc.docs[0]?.data() };
      });

      const enrichedRequests = await Promise.all(userPromises);
      setFriendRequests(enrichedRequests);
    });

    return () => unsubscribe();
  }, [currentUserId]);

  const handleAcceptRequest = async (requestId, fromUserId) => {
    try {
      // Add to both users' friend lists
      await setDoc(doc(firestore, 'friends', `${currentUserId}_${fromUserId}`), {
        userId: currentUserId,
        friendId: fromUserId,
      });

      await setDoc(doc(firestore, 'friends', `${fromUserId}_${currentUserId}`), {
        userId: fromUserId,
        friendId: currentUserId,
      });

      // Mark friend request as accepted
      await updateDoc(doc(firestore, 'friend_requests', requestId), { status: 'accepted' });

      setFriendRequests(friendRequests.filter((request) => request.id !== requestId));
    } catch (error) {
      console.error('Error accepting request:', error);
    }
  };

  const handleRejectRequest = async (requestId) => {
    try {
      await updateDoc(doc(firestore, 'friend_requests', requestId), { status: 'rejected' });

      setFriendRequests(friendRequests.filter((request) => request.id !== requestId));
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  return (
    <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-white mb-4 text-center">Friend Requests</h2>
      {friendRequests.length === 0 ? (
        <p className="text-white text-center">No pending friend requests.</p>
      ) : (
        <ul className="space-y-2">
          {friendRequests.map((request) => (
            <li key={request.id} className="p-3 rounded-lg bg-white/20 text-white flex justify-between items-center">
              <span>{request.fromUser?.email || 'Unknown User'}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleAcceptRequest(request.id, request.from)}
                  className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleRejectRequest(request.id)}
                  className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendRequests;
