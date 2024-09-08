import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import about from '../../assets/img/about.jpg';
import CVFR from '../../assets/documents/CVFR.pdf';

const About = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const imageRef = useRef();

  useEffect(() => {
    const currentImageRef = imageRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsImageVisible(true);
          observer.disconnect(); // Stop observing once the image is visible
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (currentImageRef) {
      observer.observe(currentImageRef);
    }

    return () => {
      if (currentImageRef) {
        observer.unobserve(currentImageRef);
      }
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="max-width">
        <h1 className="sp">About me</h1>
        <div className="about-content">
          <div>
            <img
              className={`taswira1 ${isImageVisible ? 'visible' : 'hidden'}`}
              src={about}
              alt="about"
              ref={imageRef}
            />
          </div>
          <div className="div3ordh">
            <p className="ktiba2">
              <span className="sp1">Who I AM?</span><br />
              My name is Adem. I am a 24-year-old student currently in my second year of a Master's 
              program in Computer Science at the University of Bordeaux, 
              specializing in Artificial Intelligence. I have a strong passion for robotics and web development.
              My ultimate goal is to pursue further studies in the field of informatics and fulfill my dream of becoming an engineer.
              I am always eager to engage in creative endeavors and continuously learn new skills that will contribute to my personal and professional growth <p style={{ color: 'rgb(255, 123, 0)' }}>You can check my CV by clicking on "Download CV"</p>
            </p>
            <div className="dropdown">
              <button className="bttn" onClick={() => document.getElementById('options').style.display = 'block'}>Download CV</button>
              <div id="options" className="dropdown-content">
                <a href="documents/CV" download>English version</a>
                <a href="documents/CVESP.pdf" download>Spanish version</a>
                <a href={CVFR} download>French version</a>


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
