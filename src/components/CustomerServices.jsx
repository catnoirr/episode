import React, { useState , useEffect } from "react";
import "../style/customerServices.css"; // Add custom styling for the Customer Services section

const faqs = [
  { question: "How can I track my order?", answer: "You can track your order using the 'Track Order' section with your order ID." },
  { question: "What is your return policy?", answer: "We offer a 30-day return policy. Please visit our 'Returns' section for more information." },
  { question: "How do I contact customer support?", answer: "You can contact us via email at support@episode.in or call us at +1-800-123-456." },
  { question: "Do you offer international shipping?", answer: "Yes, we offer international shipping to select countries. Check the 'Shipping Info' for more details." },
];

const CustomerServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add a function here to handle sending the inquiry
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="customer-services-container">
      <h1 className="heading-underline" style={{ textAlign: "center", marginBottom: "20px" }}>
        Customer Services
      </h1>
      <p style={{ textAlign: "center",  marginTop:"0" }}>
        We're here to help! Browse our FAQs or contact us directly.
      </p>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="contact-form-section">
        <h2>Contact Us</h2>
        {isSubmitted ? (
          <p style={{ color: "green", textAlign: "center" }}>Your inquiry has been submitted! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="contact-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contact-input"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contact-textarea"
              required
            ></textarea>
            <button type="submit" className="contact-submit-btn">Submit</button>
          </form>
        )}
      </div>

      {/* Contact Information */}
      <div className="contact-info-section">
        <h2 style={{textAlign:"start"}}>Contact Information</h2>
        <p>Email: support@episode.in</p>
        <p>Phone: +1-800-123-456</p>
        <p>Working Hours: Mon-Fri, 9AM - 6PM</p>
      </div>
    </div>
  );
};

export default CustomerServices;
