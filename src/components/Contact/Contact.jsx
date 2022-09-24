import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_64gfu7o',
        'template_q3trkvb',
        form.current,
        'WxQ7wYXZCDiyflHHs'
      )
      .then(
        (result) => {
          alert('Send successfully');
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form Contact">
      <div className="w-left">
        <div className="awesome">
          <span>Contact me</span>
          <div className="s-blur1"></div>
        </div>
      </div>
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Full Name..."
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="message"
            required
          />
          <input type="submit" value="Send" className="button c-button" />
          <span
            style={{
              fontSize: '27px',
              fontWeight: 'bold',
              color: 'orange',
            }}
          >
            {done && 'Thanks for contacting me...'}
          </span>
          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
