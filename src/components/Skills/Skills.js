import React, { useState, useRef, useEffect } from 'react';
import './Skills.css'; 
import nodejs from  '../../assets/skills/nodejs.png'; 
import html from  '../../assets/skills/html.png'; 
import bootstrap from  '../../assets/skills/css.png'; 
import css from  '../../assets/skills/bootstrap.png'; 
import js from  '../../assets/skills/js.png'; 
import react from  '../../assets/skills/react.png'; 
import java from  '../../assets/skills/java.png'; 
import angular from  '../../assets/skills/Angular.png'; 
import python from  '../../assets/skills/py.png'; 
import php from  '../../assets/skills/php.png'; 
import docker from  '../../assets/skills/docker.png'; 
import api from  '../../assets/skills/api.png'; 
import mysql from '../../assets/skills/mysql.png'; 
import gitlab from '../../assets/skills/gitlab.png'; 
// databases
import postgres from '../../assets/skills/post.png'; 
import sql from '../../assets/skills/sql.png'; 
// systemes d'exploitations
import windows from '../../assets/skills/windows.png'; 
import Linux from '../../assets/skills/linux.png'; 
// electronique
import isis from '../../assets/skills/isis.png'; 
import lab from '../../assets/skills/labview.png';
import grafcet from '../../assets/skills/grafcet.png';
import arduino from '../../assets/skills/arduino.png'; 
import pi from '../../assets/skills/pi.png';
import vhdl from '../../assets/skills/vhdl.png';
const skillsData = {
  "Informatique": [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "Bootstrap", img: bootstrap },
    { name: "Node.js", img: nodejs },
    { name: "Angular", img: angular },
    { name: "JavaScript", img: js },
    { name: "React.js", img: react },
    { name: "Java", img: java },
    { name: "Python", img: python },
    { name: "PHP", img: php },
    { name: "SQL", img: sql },
    { name: "API", img: api },
    { name: "Docker", img: docker },
    { name: "Gitlab", img: gitlab },

  ],
  "Electronique": [
    { name: "ISIS", img: isis },
    { name: "LabView", img: lab },
    { name: "Grafcet", img: grafcet },
    { name: "VHDL", img: vhdl },
    { name: "Raspberry Pi", img: pi },
    { name: "Arduino", img: arduino},
  ],
  "Base des données": [
    { name: "MySQL", img: mysql },
    { name: "PostgreSQL", img: postgres },
  ],
  "Systèmes d'exploitation": [
    { name: "Linux", img: Linux },
    { name: "Windows", img: windows }
  ]
};

const Skills = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const contentRefs = useRef({});

  useEffect(() => {
    // Calculate heights for each active category
    Object.keys(contentRefs.current).forEach(category => {
      if (activeCategories.includes(category) && contentRefs.current[category]) {
        contentRefs.current[category].style.maxHeight = `${contentRefs.current[category].scrollHeight}px`;
      } else if (contentRefs.current[category]) {
        contentRefs.current[category].style.maxHeight = '0px';
      }
    });
  }, [activeCategories]);

  const toggleCategory = (category) => {
    setActiveCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(cat => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  return (
    <section id="mi" className="skills">
      <div className="section-title">
        <h2>My Skills</h2>
      </div>
      <div className="container">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <button className="collapsible" onClick={() => toggleCategory(category)}>
              {category}
            </button>
            <div
              className="content"
              ref={el => contentRefs.current[category] = el}
            >
              <div className="skill-list">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
