import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Website Development',
    price: '₹999 – ₹4999',
    desc: 'Custom websites for businesses, portfolios, etc.'
  },
  {
    title: 'Logo Design',
    price: '₹149 – ₹799',
    desc: 'Modern and eye-catching brand logos.'
  },
  {
    title: 'Poster/Brochure Design',
    price: '₹99 – ₹299',
    desc: 'Posters for coaching centers, events, etc.'
  }
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="services-heading">Services I Offer</h2>
      <div className="service-list">
        {services.map((s, i) => (
          <div key={i} className="service-card animate-card">
            <div className="service-top">
              <h3>{s.title}</h3>
              <div className="price-tag">{s.price}</div>
            </div>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
