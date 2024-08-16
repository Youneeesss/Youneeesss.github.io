import React from 'react';
import EducationCard from '../components/EducationCard';
import { FaGraduationCap } from "react-icons/fa";
import './Education.css';

const educationData = [
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/KTH_Royal_Institute_of_Technology_logo.svg/1200px-KTH_Royal_Institute_of_Technology_logo.svg.png', // Replace with actual image URL
    degree: "Master's of Science in Machine Learning",
    institution: 'KTH Royal Institute of Technology',
    duration: '2022 - 2024',
    status: 'Pursuing',
    description: 'Double Degree with Centrale Nantes',
    coursework: ['Machine Learning','Natural Language Processing', 'Computer Vision', 'Time-Series Analysis', 'Speech Engineering', 'Deep Learning in Data Science', 'Data Mining', 'Artificial Neural Networks and Deep Architectures']
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Centrale_Nantes_Logo.svg/1280px-Centrale_Nantes_Logo.svg.png', // Replace with actual image URL
    degree: "Master's of Engineering in Computer Science",
    institution: 'Centrale Nantes',
    duration: '2020 - 2024',
    status: 'Pursuing',
    description: "A highly selective French engineering school, member of France's Grandes Ecoles, conferring a diploma equivalent to a Master's Degree.",
    coursework: ['Object Oriented Programming', 'Database Management', 'Web programming', 'Reinforcement Learning', 'Statistics', ' Probability Theory', 'Mathematics for Engineers']
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7L2tUR3enVupsoQoz3__YZbASk3c6_xAz-g&s', // Replace with actual image URL
    degree: 'Preparatory Classes for Engineering Schools',
    institution: 'Lycée d\'Excellence de Benguerir',
    duration: '2018 - 2020',
    status: 'Completed',
    description: "An intensive two-year undergraduate course specialized in mathematics, computer science and physics, preparing for the top national competitive entrance exams of the French 'Grandes Écoles'",
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
            description={edu.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Education;
