import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Home.css';
import profileImage from '../assets/images/profile/profile.jpg';

const Home = () => {
  const { theme } = useTheme();

  const technicalSkills = [
    { name: ".NET", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" },
    { name: "AWS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "SQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "System Design", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/architecture/architecture-original.svg" },
    { name: "Kubernetes", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Docker", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Xamarin", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg" }
  ];

  const personalSkills = [
    { name: "Communication", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chat/chat-original.svg" },
    { name: "Problem Solving", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg" },
    { name: "Teamwork", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { name: "Adaptability", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terminal/terminal-original.svg" },
    { name: "Leadership", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
  ];

  return (
    <div className="home">
      <div className="profile-container">
        <img
          src={profileImage}
          alt="Kshitij Saxena"
          className="profile-image animate-fade-in"
        />
        <h1 className="name animate-slide-down">Kshitij Saxena</h1>
        <div className="introduction">
          <p className="title animate-slide-up">Full Stack Developer</p>
          <p className="bio animate-slide-up">
            Fueled by the ambition to build things bigger and better, I specialize in developing Windows
            and Web apps using .NET but do not limit myself to one technology. With proven
            communication, teamwork, leadership skills and 'can do' attitude, will be a valuable
            addition to a good team.
          </p>
          <div className="skills-section animate-slide-up">
            <div className="skills-container">
              <div className="skills-category">
                <h3>Technical Skills</h3>
                <div className="skills-chips">
                  {technicalSkills.map((skill, index) => (
                    <span key={index} className="skill-chip">
                      <img src={skill.image} alt={skill.name} className="skill-icon" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3>Personal Skills</h3>
                <div className="skills-chips">
                  {personalSkills.map((skill, index) => (
                    <span key={index} className="skill-chip">
                      <img src={skill.image} alt={skill.name} className="skill-icon" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;