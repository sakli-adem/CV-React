import React from 'react';
import './ProjectPage.css'; // Create and style this CSS file based on your HTML
import mirrorImage from '../../assets/images/mirror.jpg';
import radioImage from '../../assets/images/radio.png';
import empresaImage from '../../assets/images/empresa.png';
import carImage from '../../assets/images/car.jpg';
import delevryImage from '../../assets/images/delevry.png';
import chamsImage from '../../assets/images/chams.jpg';
import ifmImage from '../../assets/images/ifm.jpg';
import jawharaImage from '../../assets/images/jawhara.jpg';
import knoozImage from '../../assets/images/knooz.png';
import mosaiqueImage from '../../assets/images/mosaique.png';
import zitounaImage from '../../assets/images/zitouna.png';
import wataniyaImage from '../../assets/images/wataniya.png';
import jeuneImage from '../../assets/images/jeune.png';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  return (
    <div>
      <header className="updated-header">
        <a style={{ width: '200px' }} type="button" className="btn btn-light" href="mycv.php#project">Go back</a>
      </header>

      {/* Section 1 */}
      <section id="Mirror" className="updated-animated-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
        <img className="updated-photoP" src={mirrorImage} alt="Smart Mirror" />
          </div>

          <div className="updated-containerr">
            <p className="updated-title1" style={{ textDecoration: 'underline', textDecorationColor: 'red' }}>Smart Mirror</p>
            <br />
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                Using Raspberry Pi4 I have created a smart mirror that offers several functionalities:
              </h4>
              <br />
              <p>
                {/* Project Details */}
                &bull; Development of several modules for the mirror (digital and analog clock, calendar, agenda, weather)<br />
                &bull; Development of a voice recognition system to control LEDs, YouTube, and Wikipedia using voice commands<br />
                &bull; Development of a health monitoring system that allows users to measure oxygen and heart rate<br />
                &bull; Development of a facial recognition system to enable the mirror to interact with each user<br />
                &bull; Development of a web application to control the mirror remotely<br />
                &bull; Development of a security, ventilation, and energy-saving system<br />
                &bull; Design and realization of a prototype<br />
                &bull; Integration of a USB hub for device charging and mirror configuration<br />
                &bull; Best university project of the year 2021/2022<br /><br />
                <span style={{ color: 'rgb(241, 44, 0)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>HTML | CSS | Bootstrap | PHP | SQL | Python | Flask | React.js | Node.js | Electron | Raspberry Pi 4</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
              <div className="updated-ButtonAnimation">
                <Link to="/mirror" className="demo">View Project</Link>
            </div>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="updated-animated-section1">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
          <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
            <img className="updated-photoP" src={radioImage} alt="Tunisian Radio" />
          </div>

          <div className="updated-containerr" style={{ backgroundColor: 'white' }}>
            <p className="updated-title">Tunisian Radio</p>
            <br />
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                Tunisian Radio that contains more than 20 famous national channels
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '10px' }}>
                <img src={chamsImage} alt="Chams" className="updated-canal" />
                <img src={ifmImage} alt="IFM" className="updated-canal" />
                <img src={jawharaImage} alt="Jawhara" className="updated-canal" />
                <img src={knoozImage} alt="Knooz" className="updated-canal" />
                <img src={mosaiqueImage} alt="Mosaique" className="updated-canal" />
                <img src={zitounaImage} alt="Zitouna" className="updated-canal" />
                <img src={wataniyaImage} alt="Wataniya" className="updated-canal" />
                <img src={jeuneImage} alt="Jeune" className="updated-canal" />
              </div>
              <p>
                <span style={{ color: 'rgb(20, 151, 165)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>HTML | CSS | JavaScript</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="updated-ButtonAnimation"><a className="demo" href="https://sakli-adem.github.io/radio1/radio.html" target="_blank" rel="noopener noreferrer">View Project</a></div>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="updated-animated-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
            <img className="updated-photoP" src={empresaImage} alt="Company Management" />
          </div>

          <div className="updated-containerr">
            <p className="updated-title1" style={{ textDecoration: 'underline', textDecorationColor: 'rgb(85, 12, 93)' }}>Company Management</p>
            <br />
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                Development of a website that allows managing a company:
              </h4>
              <br />
              <p>
                {/* Project Details */}
                &bull;&bull;<span style={{ fontWeight: 'bold' }}>Inventory Management:</span><br />
                &bull; Add a new product with the following parameters (product photo, name, reference, unit price, bulk price, quantity) | Delete a product | Automatically decrease the product quantity when a new receipt is added, containing the purchased quantity and product reference.<br />
                &bull;&bull;<span style={{ fontWeight: 'bold' }}>Customer Management through their profiles:</span><br />
                Add new customers | Customer data accessible to the super-admin and editable | Payment history of each customer | Total amount paid | Total amount remaining<br />
                &bull;&bull; <span style={{ fontWeight: 'bold' }}>Generation of receipts for each payment:</span> Archive of all receipts | Equipped with a search button to facilitate searching for a specific receipt<br />
                &bull;&bull;<span style={{ fontWeight: 'bold' }}>To-Do List:</span><br /><br />
                <span style={{ color: 'rgb(197, 24, 139)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>HTML | CSS | Bootstrap | PHP | AJAX | JavaScript | SQL/MySql</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="updated-ButtonAnimation" onClick={() => alert('This project is not uploaded yet, check it soon')}>View Project</div>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="updated-animated-section1">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
          <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
            <img className="updated-photoP" src={carImage} alt="MiniCar RPi4" />
          </div>

          <div className="updated-containerr" style={{ backgroundColor: 'white' }}>
            <p className="updated-title">MiniCar RPi4</p>
            <br /><br /><br />
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                Development of a small basic car using Raspberry Pi4:
              </h4>
              <br />
              <p>
                {/* Project Details */}
                &bull; This project is simple; I learned how to control motors using Python and RPi4 through Bluetooth.<br /><br />
                <span style={{ color: 'rgb(9, 131, 48)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>Python | BlueDot | Raspberry Pi 4 | 12V DC Hobby Motors</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="updated-ButtonAnimation" onClick={() => alert('This project is not uploaded yet, check it soon')}>View Project</div>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </section>

      {/* Section 5 */}
      <section className="updated-animated-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
        <div className="updated-photo-container" style={{ height: '100%', width: '700px' }}>
            <img className="updated-photoP" src={delevryImage} alt="Delivery Website" />
          </div>

          <div className="updated-containerr">
            <p className="updated-title1" style={{ textDecoration: 'underline', textDecorationColor: 'rgb(197, 24, 139)' }}>Delivery Website</p>
            <br />
            <div className="updated-description">
              <h4 style={{ textAlign: 'justify', fontWeight: 'bold' }}>
                Development of a website that allows people to deliver items to and from Tunisia:
              </h4>
              <br />
              <p>
                {/* Project Details */}
                &bull;&bull;<span style={{ fontWeight: 'bold' }}>Inventory Management:</span><br />
                &bull; Add a new product with the following parameters (product photo, name, reference, unit price, bulk price, quantity) | Delete a product | Automatically decrease the product quantity when a new receipt is added, containing the purchased quantity and product reference.<br />
                &bull;&bull;<span style={{ fontWeight: 'bold' }}>Customer Management through their profiles:</span><br />
                Add new customers | Customer data accessible to the super-admin and editable | Payment history of each customer | Total amount paid | Total amount remaining<br />
                &bull;&bull; <span style={{ fontWeight: 'bold' }}>Generation of receipts for each payment:</span> Archive of all receipts | Equipped with a search button to facilitate searching for a specific receipt<br />
                &bull;&bull;<span style={{ fontWeight: 'bold' }}>To-Do List:</span><br /><br />
                <span style={{ color: 'rgb(197, 24, 139)', fontWeight: 'bold' }}>Keywords:</span> <span style={{ fontSize: '15px', fontWeight: 'bold' }}>HTML | CSS | Bootstrap | PHP | AJAX | JavaScript | SQL/MySql</span>
              </p>
              <br />
              <div style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}>
                <div className="updated-ButtonAnimation" onClick={() => alert('This project is not uploaded yet, check it soon')}>View Project</div>
              </div>
            </div>
            <br /><br />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
