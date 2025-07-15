import React from 'react';
import { ReactTyped } from 'react-typed';
import './Hero.css';
import myPhoto from '../assets/hasibur.png'; // 👈 Adjust path if different

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <img src={myPhoto} alt="Hasibur Rahaman" className="hero-image" />
        <h1 className="fade-slide-top">
          Hi, I'm&nbsp;
          <ReactTyped
            strings={['Hasibur Rahaman 👋', 'a Web Developer 💻', 'a Creative Designer 🎨']}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h1>
        <p className="fade-slide-bottom">I build responsive websites, design logos & posters.</p>
        <a href="#contact" className="hero-btn fade-in">Hire Me</a>
      </div>
    </section>
  );
};

export default Hero;
