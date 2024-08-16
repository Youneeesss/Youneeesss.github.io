import React from "react";
import WorkCard from "../components/WorkCard";
import "./Work.css";
import PolyImage from "./Image/polyconseil.png";
import EAImage from "./Image/EA.png";
import CiuCiuImage from "./Image/Ciu.svg";
import { FaBriefcase } from "react-icons/fa";

const workData = [
  {
    logo: EAImage, // Replace with actual logo path
    role: "Data Scientist",
    company: "Electronic Arts (EA)",
    duration: "September 2023 - Ongoing",
    description: {
      title:
        "Development and evaluation of a Deep Learning generative model for voice-driven facial animations.",
      points: [
        "Implementation of a cVAE architecture for generating facial animations from speech for their EA FC characters.",
        "The use of metrics to objectively evaluate the performance of this speech-driven model in animating facial expressions.",
        "Implementation of NLP algorithms to evaluate the effectiveness of this model.",
        "Conducted A/B testing in a user study to compare facial animations from two models.",
        "Deployment of the generative model on AWS to ensure optimal scalability and availability.",
      ],
      result:
        "Result: Development of a speech-driven generative model and a corresponding metric to evaluate its performance.",
    },
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "AWS",
      "Numpy",
      "cVAE",
      "Hugging Face",
      "Pandas",
      "Scikit-Learn",
    ],
  },
  {
    logo: CiuCiuImage, // Replace with actual logo path
    role: "Data Scientist",
    company: "Cìù Cìù",
    duration: "Sep 2022 - Dec 2022 | Stockholm, Sweden",
    description: {
      title: "Sentiment Analysis for The Wine Industry",
      points: [
        "Big Data Analytics using Google Trends API to guide Cìù Cìù decisions and support their market.",
        "Web scraping to collect data from Vivino and WineEnthusiast.",
        "Sentiment Analysis of Wine reviews using VADER, LSTM, and SVM classifiers.",
        "Developed a GCP pipeline to continuously scrape new data and retrain the sentiment analysis model for up-to-date predictions.",
      ],
    },
    technologies: [
      "Python",
      "Scikit-Learn",
      "PySpark",
      "Selenium",
      "Neural Networks",
      "NLP",
      "GCP",
      "Vertex AI",
    ],
  },
  {
    logo: PolyImage, // Replace with actual logo path
    role: "Software Engineer",
    company: "Polyconseil",
    duration: "Apr 2022 - Sep 2022 | Paris, France",
    description: {
      title:
        "Refactoring the company's platform website and adding other functionalities to simplify the management of employees and their missions.",
      points: [
        "Development of custom React components to make the user interface more responsive.",
        "Design and implementation of the API with Django and GraphQL to manage data exchanges.",
        "Containerization with Docker and deployment on AWS.",
        "Maintenance of CI/CD pipelines and implementation of unit tests.",
        "Active participation in Scrum ceremonies, including daily stand-ups and sprint planning.",
      ],
      result:
        "Result: Significant improvement in user experience and deployment reliability.",
    },
    technologies: [
      "Linux",
      "Git",
      "Jenkins",
      "Jest",
      "ReactJs",
      "Django",
      "SQL",
      "GraphQL",
      "Docker",
      "AWS",
      "Github Actions",
    ],
  },
];

function Work() {
  return (
    <div id="work" className="section work">
      <h1>
        <span role="img" aria-label="user">
          <FaBriefcase />
        </span>{" "}
        Work <span className="highlight">Experience</span>
      </h1>
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
