import React, { useState } from 'react';
import axios from 'axios'; 
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ Send form data to live backend
      const res = await axios.post(
        'https://freelance-backend-55i4.onrender.com/api/contact',
        formData
      );

      if (res.status === 200 || res.status === 201) {
        alert('✅ Message sent successfully!');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        alert('❌ Failed to send message.');
      }
    } catch (err) {
      console.error('❌ Error submitting form:', err);
      alert('⚠️ Server error. Please try again later.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          name="service"
          value={formData.service}
          onChange={handleChange}
          placeholder="Service You Need"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
