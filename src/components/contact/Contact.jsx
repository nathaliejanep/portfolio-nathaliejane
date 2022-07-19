import emailjs from '@emailjs/browser';
import { faAt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import './contact.scss';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_c62bv04',
        'template_w0dbjcf',
        form.current,
        'Gom3N4Uo4CeQek_0T'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again');
        }
      );
    e.target.reset();
  };

  return (
    <div className="container left">
      <div className="left">
        <h2>Get in touch.</h2>
        <div className="info">
          <FontAwesomeIcon icon={faPhone} />
          <a href="tel:0041766194431" className="info">
            +41 766 194 431
          </a>
        </div>
        <div className="info">
          <FontAwesomeIcon icon={faAt} />
          <a href="mailto:nathalie.persson@hotmail.com" className="info">
            nathalie.persson@hotmail.com
          </a>
        </div>
      </div>
      <div className="right">
        <h2>Say something.</h2>
        <div className="right_wrapper">
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              className="form-input"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="form-input"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="form-input"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              type="text"
              className="form-input"
              name="message"
              placeholder="Say hi..."
              rows="10"
              required
            />
            <input type="submit" className="form-button" value="SUBMIT" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
