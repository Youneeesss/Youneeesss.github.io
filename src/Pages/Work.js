import React from 'react';
import WorkCard from '../components/WorkCard';
import './Work.css';
import PolyImage from './Image/polyconseil.png'; 
import EAImage from './Image/EA.png'; 
import { FaBriefcase } from "react-icons/fa";

const workData = [
  {
    logo: EAImage, // Replace with actual logo path
    role: 'Data Scientist',
    company: 'Electronic Arts (EA)',
    duration: 'September 2023 - Ongoing',
    description: "Development and evaluation of a Deep Learning generative model for voice-driven facial animations.\n Implementation of a generative model that generates facial animation from speech (cVAE architecture) for their EA FC characters.\n The use of metrics to objectively evaluate the performance of this speech-driven model in animating facial expressions.\n Implementation of audio processing techniques to evaluate the effectiveness of these models.\n Development of a LipReading model to evaluate the accuracy of facial animations.\n Result: Development of a speech-driven generative model and a corresponding metric to evaluate its performance.",
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'ResNet', 'Numpy', 'Seaborn', 'Plotly']
  },
  {
    logo: PolyImage, // Replace with actual logo path
    role: 'Software Engineer',
    company: 'Polyconseil',
    duration: 'April 2022 - September 2022',
    description: "Refactoring of the company's platform website and addition of other functionalities to simplify the management of employees and their missions.\n Development of custom React components to make the user interface more responsive.\n Containerization with Docker and deployment on AWS.\n Development and maintenance of CI/CD pipelines. \n Implementation of unit tests to guarantee code reliability and quality. \n Result: Significant improvement in user experience and deployment reliability.",
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
