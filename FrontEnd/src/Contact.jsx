import React from 'react'
import './Contact.css';
import ContactForm from './ContactForm';

function Contact() {
    return (
      <div className="contact-container">
      <h2>Other ways to contact us:</h2>
      <p>Thank you for your interest in reaching out! Whether you want a job, want to hire someone , or simply want to connect, we’d love to hear from you. Please feel free to use any of the following methods to get in touch:</p>
  
      <div className="contact-methods">
        {/* <div>
            <ContactForm />
        </div> */}
          <div>
              <h3>Email</h3>
              <p>You can reach us directly via email at <a href="mailto:yuvahr@rediffmail.com">yuvahr@rediffmail.com</a>. We strive to respond to all inquiries promptly, so please don’t hesitate to drop us a message with your questions or project details.</p>
          </div>
  
          <div>
              <h3>Social Media</h3>
              <p>Connect with us on social media platforms to stay updated on job offers and insights:</p>
              <ul className="social-links">
                  <li><a href="https://www.linkedin.com/company/yuvahrservices" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                  {/* <li><a href="https://github.com/yourcompany" target="_blank" rel="noopener noreferrer">GitHub</a></li> */}
             
              </ul>
          </div>
  
          <div>
              <h3>Phone</h3>
              <p>If you prefer a more direct conversation, you can reach us via phone at <strong>+91 965 725 8233</strong>. Please note our availability during business hours, and feel free to leave a message if we're unable to answer your call.</p>
          </div>
  
          <div>
              <h3>Location</h3>
              <p>We are based in Pune, India, and are available for remote work opportunities worldwide. If you’re in the area and would like to meet in person, please reach out to schedule a meeting.</p>
          </div>
      </div>
  </div>
  
    );
}


export default Contact