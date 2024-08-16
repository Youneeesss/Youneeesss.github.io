import React from 'react';
import Card from '../components/Card';
import { FaFolderOpen } from "react-icons/fa";
import './Projects.css';

const projectData = [
  {
    image: 'https://via.placeholder.com/300', // Replace with DALL-E generated image URL
    title: 'Text Summarization using Transformers',
    details: `
      Developed a text synthesizer capable of automatically generating text summaries. 
      This project involved exploring the efficiency of abstractive summarization versus extractive summarization.
      Utilized Pytorch, RNN, Transformers, and ROUGE metrics for performance evaluation.`,
    githubLink: 'https://github.com/Youneeesss/Text-Summarization-DD2417'
  },
  {
    image: 'https://via.placeholder.com/300', // Replace with DALL-E generated image URL
    title: 'Database Management',
    details: `
      Implemented a database for managing orders and missions for a road transport company specializing in the delivery of fruits and vegetables.
      Utilized SQL via PostgreSQL and NoSQL via MongoDB for database implementation.`,
    githubLink: 'https://github.com/Youneeesss/BOFURI-Data-management'
  },
  {
    image: 'https://via.placeholder.com/300', // Replace with DALL-E generated image URL
    title: 'Explore Transfer Learning',
    details: `
      Fine-tuned a ConvNet to classify a PET dataset into cats and dogs.
      Faced the challenge of fine-tuning with fewer labeled training examples.
      Utilized Pytorch, Numpy, ResNet, and Pandas for the project.`,
    githubLink: 'https://github.com/Youneeesss/DD2424-DefaultProject1'
  },
  {
    image: 'https://via.placeholder.com/300', // Replace with DALL-E generated image URL
    title: 'Kalimaty: Arabic Contexto.me',
    details: `
      Developed an engaging Arabic word guessing game inspired by contexto.me, leveraging Machine Learning techniques and Natural Language Processing (NLP) using BERT from Huggingface for intelligent feedback. 
      Built with a Flask backend and React frontend, the application is fully containerized using Docker`,
    githubLink: 'https://github.com/Youneeesss/Arabic-Contexto.me/'
  },
];

function Projects() {
  return (
    <div id="projects" className="section projects">
      <h1><span role="img" aria-label="user"><FaFolderOpen /></span> My <span className="highlight">Projects</span></h1>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            details={project.details}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
