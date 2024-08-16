import React from "react";
import SkillCard from "../components/SkillCard";
import { FaTools } from "react-icons/fa";
import "./Skills.css";

function Skills() {
  const skillsData = [
    {
      icon: "devicon-python-plain colored",
      name: "Python",
      category: "Programming",
    },
    {
      icon: "devicon-java-plain colored",
      name: "Java",
      category: "Programming",
    },
    {
      icon: "devicon-javascript-plain colored",
      name: "JavaScript",
      category: "Programming",
    },
    {
      icon: "devicon-cplusplus-plain colored",
      name: "C++",
      category: "Programming",
    },
    {
      icon: "devicon-scikitlearn-plain colored",
      name: "Scikit-learn",
      category: "Data Science",
    },
    {
      icon: "devicon-tensorflow-original colored",
      name: "Tensorflow",
      category: "Data Science",
    },
    {
      icon: "devicon-pytorch-original colored",
      name: "Pytorch",
      category: "Data Science",
    },
    {
      icon: "devicon-pandas-plain colored",
      name: "Pandas",
      category: "Data Science",
    },
    {
      icon: "devicon-jupyter-plain-wordmark colored",
      name: "Jupyter",
      category: "Data Science",
    },
    {
      icon: "devicon-numpy-plain-wordmark colored",
      name: "Numpy",
      category: "Data Science",
    },
    {
      icon: "devicon-postgresql-plain-wordmark colored",
      name: "PostgreSQL",
      category: "Data Engineering & Big Data",
    },
    {
      icon: "devicon-mongodb-plain-wordmark colored",
      name: "MongoDB",
      category: "Data Engineering & Big Data",
    },
    {
      icon: "devicon-apachespark-plain-wordmark colored",
      name: "Spark",
      category: "Data Engineering & Big Data",
    },
    {
      icon: "devicon-hadoop-plain-wordmark",
      name: "Hadoop",
      category: "Data Engineering & Big Data",
    },
    {
      icon: "devicon-git-plain-wordmark colored",
      name: "Git",
      category: "DevOps & Cloud",
    },
    {
      icon: "devicon-docker-plain-wordmark colored",
      name: "Docker",
      category: "DevOps & Cloud",
    },
    {
      icon: "devicon-jenkins-plain",
      name: "Jenkins",
      category: "DevOps & Cloud",
    },
    {
      icon: "devicon-amazonwebservices-plain-wordmark colored",
      name: "AWS",
      category: "DevOps & Cloud",
    },
    {
      icon: "devicon-googlecloud-plain-wordmark colored",
      name: "GCP",
      category: "DevOps & Cloud",
    },
    {
      icon: "devicon-github-plain colored",
      name: "GitHub",
      category: "DevOps & Cloud",
    },
    {
      icon: "devicon-nodejs-plain colored",
      name: "NodeJS",
      category: "Software Development",
    },
    {
      icon: "devicon-html5-plain colored",
      name: "HTML5",
      category: "Software Development",
    },
    {
      icon: "devicon-css3-plain colored",
      name: "CSS3",
      category: "Software Development",
    },
    {
      icon: "devicon-typescript-plain colored",
      name: "Typescript",
      category: "Software Development",
    },
    {
      icon: "devicon-react-original colored",
      name: "ReactJS",
      category: "Software Development",
    },
    {
      icon: "devicon-graphql-plain-wordmark colored",
      name: "GraphQL",
      category: "Software Development",
    },
    {
      icon: "devicon-django-plain-wordmark colored",
      name: "Django",
      category: "Software Development",
    },
    {
      icon: "devicon-flask-original-wordmark colored",
      name: "Flask",
      category: "Software Development",
    },
    {
      icon: "devicon-spring-original colored",
      name: "SpringBoot",
      category: "Software Development",
    },
    {
      icon: "devicon-bash-plain colored",
      name: "Bash",
      category: "Software Development",
    },
    {
      icon: "devicon-ubuntu-plain-wordmark colored",
      name: "Ubuntu",
      category: "Software Development",
    },
    {
      icon: "devicon-matplotlib-plain-wordmark colored",
      name: "Matplotlib",
      category: "Data Visualization",
    },
    {
      icon: "devicon-plotly-plain-wordmark colored",
      name: "Plotly",
      category: "Data Visualization",
    },
  ];
  const categories = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div id="skills" className="section skills">
      <h1>
        <FaTools /> Skills & <span className="highlight">Abilities</span>
      </h1>
      {Object.entries(categories).map(([category, skills]) => (
        <div key={category} style={{ padding: "2%" }}>
          <h2 style={{ color: "black", textAlign: "left" }}>{category}</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
