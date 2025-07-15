import React from 'react';
import Slider from 'react-slick';
import './WorkSamples.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    img: '/sample1.png',
    title: 'Tuition Center Website',
    link: 'https://your-tuition-website.vercel.app/',
    desc: 'A responsive website for a local tuition center built with MERN stack.'
  },
  {
    img: '/sample2.png',
    title: 'Coaching Poster Design',
    link: 'https://your-poster-design.vercel.app/',
    desc: 'A poster designed in Canva for a coaching institute event.'
  },
  {
    img: '/sample3.png',
    title: 'Logo for Hostel',
    link: 'https://your-hostel-logo.vercel.app/',
    desc: 'Clean and simple hostel logo created using AI tools.'
  }
];

const WorkSamples = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <section className="work" id="work">
      <h2 className="work-heading">My Work</h2>

      {/* Mobile View */}
      <div className="work-carousel">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <img src={project.img} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="work-btn"
              >
                View Project
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Desktop View */}
      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-card animate-work" key={index}>
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-btn"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSamples;
