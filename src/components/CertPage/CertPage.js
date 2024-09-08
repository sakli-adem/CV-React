import React from 'react';
import './CertPage.css';

// Import images
import htImg from '../../assets/certif/ht.png';
import cssImg from '../../assets/certif/css.png';
import btImg from '../../assets/certif/bt.png';
import jssImg from '../../assets/certif/jss.png';
import begImg from '../../assets/certif/beg.png';
import python1Img from '../../assets/certif/python.jpg';
import python2Img from '../../assets/certif/pi.jpg';
import dataScienceImg from '../../assets/certif/pyy.png';
import html2Img from '../../assets/certif/html2.png';
import js2Img from '../../assets/certif/js2.png';
import phpImg from '../../assets/certif/pp.png';
import sqlImg from '../../assets/certif/sql.png';
import englishImg from '../../assets/certif/english.png';

const CertPage = () => {
  const certificates = [
    { src: htImg, title: 'HTML5', link: htImg },
    { src: cssImg, title: 'CSS', link: cssImg },
    { src: btImg, title: 'Bootstrap', link: btImg },
    { src: jssImg, title: 'JavaScript', link: jssImg },
    { src: begImg, title: 'Python for Beginner', link: begImg },
    { src: python1Img, title: 'Python 1', link: python1Img },
    { src: python2Img, title: 'Python 2', link: python2Img },
    { src: dataScienceImg, title: 'Python For Data Science', link: dataScienceImg },
    { src: html2Img, title: 'HTML5 - Certif2', link: html2Img },
    { src: js2Img, title: 'JavaScript - Certif2', link: js2Img },
    { src: phpImg, title: 'PHP', link: phpImg },
    { src: sqlImg, title: 'SQL', link: sqlImg },
    { src: englishImg, title: 'English B2', link: 'certif/Anglais_B2_Certif.pdf' }
  ];

  return (
    <div className="cert-page">
      <nav className="nav-bar">
        <header id="fixedHeader">
          <a className="btn btn-light" href="mycv.php#home">Go back</a>
        </header>
      </nav>

      <article id="down">
        <div className="card-deck">
          {certificates.map((cert, index) => (
            <div key={index} className="card mb-4">
              <div className="view overlay">
                <img className="card-img-top" src={cert.src} alt={cert.title} />
                <a href={cert.link}>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <div className="card-body">
                <header className="card-title">
                  <h6>{cert.title}</h6>
                </header>
                <article className="card-button">
                  <a href={cert.link} className="btn btn-primary">View certificate</a>
                </article>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};

export default CertPage;
