import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Experience.css';

const Experience = () => {
  const timelineRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => {
      timelineItems.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const experiences = [
    {
      company: "Stem Inc/AlsoEnergy",
      period: "Since Nov-2021",
      role: "Senior Software Engineer",
      description: "Working as a part of data ingest team for this product based company. Working and leading multiple projects. Working with a Product team to develop products and feature intakes for a solar power monitoring solution. Working on .NET based windows and web apps, AWS applications, Kubernetes, docker etc to build applications capable of managing large amounts of incoming logger data. Working closely with the devops team.",
      projects: [
        {
          name: "Simon",
          description: "WPF based application which primarily run background processes for managing various tasks. e.g. procuring and ingesting data from loggers, run migrations, generating reports etc. Worked on developing new features/processors and maintaining the application."
        },
        {
          name: "Low Fidelity Weather Data Puller",
          description: "Designed and developed a complete serverless app using AWS capable of handling very large amount of incoming weather data and capable of autoscaling based on the amount of incoming data size. The app is responsible for gathering the zipped files contained weather parameters supplied by our weather data provider. The weather data we request usually has 8 parameters e.g. dni, dhi, ghi, precipitation etc. for over 80,0000 coordinate locations. Every param is received in a separated text file inside the zipped file. Each file contains three arrays for latitude, longitude and param value for all requested locations. Each file gives us data for 2 hours which means we have 160,000 values to ingest for each parameter. This app used lambda functions to expand/inflate the data into proper rows and then insert them into a dynamo db table for further use by Stem's client facing applications. Using SQS and S3 buckets for chaining the lambda functions and allowing the application to scale based on the amount of input data. Using CloudWatch to trigger the app every 2 hours."
        },
        {
          name: "SkyBridge",
          description: "Designed and developed a complete ingest solution for onboarding the data of Solar Site loggers. (Thus, decommissioning the legacy platform in use by one of AlsoEnergy's ancillaries) The loggers are designed to send data via api calls. where each request contains the data points for all devices in a single request, each tag in the xml body contains all the data points in csv format. Skybridge refers the metadata created by another app which is used to migrate the site. Skybridge implements api for metadata, api/site settings and for uploading the data. This apps works in collaboration to another app called SMT (site migration tool). SMT is used to migrate/create sites for each customer. All the device and register mapping is uploaded as metadata to skybridge. Worked on setting up trace logging and Grafana dashboards to monitor live ingest status. Worked on developing a device update handling feature. This is where the logger sends a request to notify the system of any changes in the device register set. These changes must be reflected in skybridge to ensure correctness in the data ingest. Worked on setting up loadtesting environment using NBomber for .NET and utilized Visual Studio performance profiler to reduce CPU usage to upto 50% and reduce memory consumption to upto 40%."
        },
        {
          name: "Site Migration Tool",
          description: "Added features and maintained a WPF based application which is used to migrate the sites from the legacy platform to the PowerTrack app. Added features like handling setDevice requests, updating the metadata on skybridge. Using templates for efficient site migration."
        }
      ]
    },
    {
      company: "Accenture India",
      period: "Jul 2018 - Oct 2021",
      role: "Software Engineer",
      description: "Worked to develop, test and deliver software features for a large re-insurance client. Worked on win forms, wpf and Xamarin."
    },
    {
      company: "SEDEMAC Mechatronics",
      period: "May 2017 - Jun 2018",
      role: "Software Engineer",
      description: "Part of off-highway engines team (OHSW) to develop and maintain GCU flashing utility. Worked on Windows Forms, WPF and minor bug fixes for an Android application."
    },
    {
      company: "TATA Consultancy Services",
      period: "Mar 2015 - Apr 2017",
      role: "Software Engineer",
      description: "Worked on server based vehicle diagnostics. Developed mobile applications using Android and Xamarin."
    }
  ];

  return (
    <div className="experience">
      <div className="experience-container">
        <h1 className="page-title">Experience & Projects</h1>
        <div className="timeline" ref={timelineRef}>
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <h3>{exp.company}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <h4 className="role">{exp.role}</h4>
                <p className="description">{exp.description}</p>
                {exp.projects && (
                  <div className="projects">
                    <h4>Key Projects</h4>
                    {exp.projects.map((project, pIndex) => (
                      <div key={pIndex} className="project-card">
                        <h5>{project.name}</h5>
                        <p>{project.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;