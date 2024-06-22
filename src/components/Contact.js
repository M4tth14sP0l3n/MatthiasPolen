import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Feel free to reach out to me via email at{' '}
        <a href="mailto:your.email@example.com">your.email@example.com</a>.
      </p>
      <div>
        <p>Connect with me on social media:</p>
        <ul>
          <li>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          {/* Add more social media links as needed */}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
