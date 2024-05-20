import React from 'react';
import SkillCard from '../components/SkillCard';
import {
  FaPython, FaNodeJs, FaJava, FaGithub, FaGit, FaHtml5, FaCss3Alt, FaJs, FaReact, FaAws, FaDatabase,
  FaDocker, FaGitAlt, FaJenkins, FaLinux, FaTools
} from 'react-icons/fa';
import {
  SiTensorflow, SiPytorch, SiKubernetes, SiPostgresql, SiMongodb, SiMysql, SiJupyter,
  SiScipy, SiTableau, SiPandas, SiNumpy, SiApachespark, SiGraphql, SiRedux, SiTypescript, SiApachecassandra, SiJquery, SiPlotly, SiScikitlearn, SiDocker, SiMicrosoftexcel
} from 'react-icons/si';
import './Skills.css';

const skillsData = [
  { icon: FaPython, name: 'Python' },
  { icon: FaNodeJs, name: 'NodeJS' },
  { icon: FaJava, name: 'Java' },
  { icon: FaGithub, name: 'GitHub' },
  { icon: FaGit, name: 'Git' },
  { icon: FaHtml5, name: 'HTML5' },
  { icon: FaCss3Alt, name: 'CSS3' },
  { icon: FaJs, name: 'JavaScript' },
  { icon: FaReact, name: 'ReactJS' },
  { icon: FaAws, name: 'AWS' },
  { icon: FaDatabase, name: 'SQL' },
  { icon: FaDocker, name: 'Docker' },
  { icon: FaGitAlt, name: 'Git' },
  { icon: FaLinux, name: 'Linux' },
  { icon: SiTensorflow, name: 'TensorFlow' },
  { icon: SiPytorch, name: 'PyTorch' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiMysql, name: 'MySQL' },
  { icon: FaJenkins, name: 'Jenkins' },
  { icon: SiJupyter, name: 'Jupyter' },
  { icon: SiScipy, name: 'SciPy' },
  { icon: SiTableau, name: 'Tableau' },
  { icon: SiPandas, name: 'Pandas' },
  { icon: SiNumpy, name: 'NumPy' },
  { icon: SiApachespark, name: 'Apache Spark' },
  { icon: SiGraphql, name: 'GraphQL' },
  { icon: SiRedux, name: 'Redux' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiApachecassandra, name: 'Cassandra' },
  { icon: SiJquery, name: 'jQuery' },
  { icon: SiPlotly, name: 'Plotly' },
  { icon: SiScikitlearn, name: 'Scikit-Learn' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiMicrosoftexcel, name: 'Excel' },
];

function Skills() {
  return (
    <div id="skills" className="section skills">
      <h1><span role="img" aria-label="user"><FaTools /></span> Skills & <span className="highlight">Abilities</span></h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
