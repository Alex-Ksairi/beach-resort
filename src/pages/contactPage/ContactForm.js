import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const [user, setUser] = useState();
  const [hideAlert, setHideAlert] = useState('alert2');

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject , message } = e.target.elements;
    
    let details = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    setStatus('sending...')
    setUser(details.name);

    setTimeout(() => {
      setHideAlert('alert');
    }, 3000);

    setTimeout(() => {
      setStatus("submit");
      e.target.reset()
    }, 2000);

    setInterval(() => {
      setHideAlert('alert2');
    }, 8000);

  };

  return (
      <React.Fragment>
        <div className="container">
        <div className={hideAlert}><p>Dear {user}, you successfully sent us your message and we will try to get in touch with you as soon as possible!</p></div>
            <div className="sub-container">
                <form onSubmit={handleSubmit} className="form">
                    <label htmlFor="name">full name*</label>
                    <input type="text" id="name" required />

                    <label htmlFor="email">email address*</label>
                    <input type="email" id="email" required />
                    
                    <label htmlFor="subject">subject*</label>
                    <input type="text" id="subject" required />
                   
                    <label htmlFor="message">Message*</label>
                    <textarea id="message" required />
                    
                    <button type="submit" className="btn-primary">{status}</button>
                </form>
                <div className="map-container">
                    <div className="map-link">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.947357440122!2d8.652981315877504!3d54.37557998020758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b4641d2fc2b6d1%3A0xe5ab69d39bff60d9!2sS%C3%BCderdeich%2012%2C%2025881%20Westerhever!5e0!3m2!1sen!2sde!4v1621172871781!5m2!1sen!2sde" title="map" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
  );
};

export default ContactForm;