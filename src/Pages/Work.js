import React from 'react';
import WorkCard from '../components/WorkCard';
import './Work.css';
import PolyImage from './Image/polyconseil.png'; 
import EAImage from './Image/EA.png'; 
import { FaBriefcase } from "react-icons/fa";

const workData = [
  {
    logo: EAImage, // Replace with actual logo path
    role: 'ML Engineer',
    company: 'Electronic Arts (EA)',
    duration: 'September 2023 - March 2024',
    description: 'TODO',
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'ResNet', 'Numpy', 'Seaborn', 'Plotly']
  },
  {
    logo: PolyImage, // Replace with actual logo path
    role: 'Software Engineer',
    company: 'Polyconseil',
    duration: 'April 2022 - September 2022',
    description: 'TODO',
    technologies: ['React', 'Django', 'Typescript', 'SQL','Docker', 'AWS', 'GraphQL', 'Jenkins']
  }
];

function Work() {
  return (
    <div id="work" className="section work">
      <h1><span role="img" aria-label="user"><FaBriefcase /></span> Work <span className="highlight">Experience</span></h1>
      <div className="work-horizontal">
        {workData.map((work, index) => (
          <WorkCard
            key={index}
            logo={work.logo}
            role={work.role}
            company={work.company}
            duration={work.duration}
            description={work.description}
            technologies={work.technologies}
          />
        ))}
      </div>
    </div>
  );
}

export default Work;
