import React from 'react';

const ContactForm = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data using an API or other method
    console.log('Form submitted:', { name, email, message });
  };

  return (
    <section id="contact-section" style={{ height: '100vh' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label htmlFor="message">Message:</label>
        <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
