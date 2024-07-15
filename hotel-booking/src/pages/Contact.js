import React from 'react';
import './Contact.css'; // Assurez-vous d'avoir votre fichier CSS pour le style

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us.</p>
        <p>Email: contact@yourwebsite.com</p>
        <p>Phone: +1-123-456-7890</p>
      </div>
      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
