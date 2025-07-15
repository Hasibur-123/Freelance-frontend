import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [replyMsg, setReplyMsg] = useState('');
  const [sending, setSending] = useState(false);

  const API_BASE = 'https://freelance-backend-55i4.onrender.com';

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/leads`);
        setLeads(res.data);
        setLoading(false);
      } catch (err) {
        console.error('❌ Error fetching leads:', err);
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  const openReplyModal = (email) => {
    setSelectedEmail(email);
    setReplyMsg('');
    setShowModal(true);
  };

  const sendReply = async () => {
    if (!replyMsg) return;

    setSending(true);
    try {
      await axios.post(`${API_BASE}/api/reply`, {
        toEmail: selectedEmail,
        subject: 'Reply from Hasibur',
        message: replyMsg
      });
      alert('✅ Reply sent successfully');
      setShowModal(false);
    } catch (err) {
      console.error('❌ Failed to send reply:', err);
      alert('❌ Failed to send reply');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="admin-container">
      <h2>📬 Contact Submissions</h2>
      {loading ? (
        <p>Loading leads...</p>
      ) : leads.length === 0 ? (
        <p>No leads submitted yet.</p>
      ) : (
        <table className="leads-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={lead._id}>
                <td data-label="#"> {index + 1}</td>
                <td data-label="Name">{lead.name}</td>
                <td data-label="Email">{lead.email}</td>
                <td data-label="Message">{lead.message}</td>
                <td data-label="Time">{new Date(lead.createdAt).toLocaleString()}</td>
                <td data-label="Action">
                  <button onClick={() => openReplyModal(lead.email)} className="reply-btn">Reply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Reply Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Reply to: {selectedEmail}</h3>
            <textarea
              value={replyMsg}
              onChange={(e) => setReplyMsg(e.target.value)}
              rows={6}
              placeholder="Write your message here..."
            />
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)} className="cancel-btn">Cancel</button>
              <button onClick={sendReply} className="send-btn" disabled={sending}>
                {sending ? 'Sending...' : 'Send Reply'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
