import React from 'react';
import './Contact.css';

const Touch = () => {
    return (
        <section className="touch" id="contact">
            <h2 className="section-title">Get in Touch</h2>
            <div className="contact-info">
                <p>Email: sakliadem94@gmail.com</p>
                <p>Phone: +33 773576489</p>
            </div>
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Send Message" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Touch;
