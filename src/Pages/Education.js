import React from 'react';
import EducationCard from '../components/EducationCard';
import { FaGraduationCap } from "react-icons/fa";
import './Education.css';

const educationData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/KTH_Royal_Institute_of_Technology_logo.svg/1200px-KTH_Royal_Institute_of_Technology_logo.svg.png', // Replace with actual image URL
    degree: 'Double Degree with Centrale Nantes',
    institution: 'KTH Royal Institute of Technology',
    duration: '2022 - 2024',
    status: 'Pursuing',
    coursework: ['Machine Learning', 'Language Engineering', 'Speech Engineering', 'Deep Learning in Data Science', 'Data Mining', 'Artificial Neural Networks and Deep Architectures']
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Centrale_Nantes_Logo.svg/1280px-Centrale_Nantes_Logo.svg.png', // Replace with actual image URL
    degree: 'MEng Computer Science',
    institution: 'Centrale Nantes',
    duration: '2020 - 2024',
    status: 'Pursuing',
    coursework: ['Object Oriented Programming', 'Database Management', 'Web programming', 'Reinforcement Learning', 'Statistics', ' Probability Theory', 'Mathematics for Engineers']
  },
  {
    image: 'https://www.komiha.ma/img/light/projects/lydex/1.jpg', // Replace with actual image URL
    degree: 'Preparatory Classes for Engineering Schools',
    institution: 'Lycée d\'Excellence de Benguerir',
    duration: '2018 - 2020',
    status: 'Completed',
    coursework: ['Mathematics', 'Physics', 'Chemistry']
  }
];

function Education() {
  return (
    <div id="education" className="section education">
      <h1><span role="img" aria-label="user"><FaGraduationCap /></span> My <span className="highlight">Education</span></h1>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            image={edu.image}
            degree={edu.degree}
            institution={edu.institution}
            duration={edu.duration}
            status={edu.status}
            coursework={edu.coursework}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
