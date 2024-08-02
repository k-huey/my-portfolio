import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <form action="https://formspree.io/your-email" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
