// ContactUsPage.js

import React from 'react';


const ContactPage = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Have a question or concern? Reach out to us, and we'll get back to you as soon as possible.
      </p>
      <form className="contact-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" placeholder="Type your message here" required />

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
