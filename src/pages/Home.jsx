import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WorkSamples from '../components/WorkSamples';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WorkSamples />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
