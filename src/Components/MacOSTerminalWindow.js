import React from 'react';
import '../MacOSTerminalWindow.css'; // Import CSS file for styling
import Project from './Project';
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Publication from './Publication';
import Achievements from './Achievments';
import Educationlist from '../Json Files/EducationList.json'
import Experiences from '../Json Files/Experiences.json'
import SkillList from '../Json Files/SkillList.json'
import Publications from '../Json Files/Publications.json'


const TerminalLine = ({ heading }) => {
    return (
      <div className="terminal-line">
        <span className="username">@sureshyarava/</span>
        <span className="heading">{heading}%</span>
      </div>
    );
  };

  const Projects = [
    {
        "projectName": "Crime Data Analysis",
        "projectURL": "https://github.com/Sureshyarava/Crime_Data_Analysis",
        "projectDescription": "'Crime Data Analysis for Safer Communities' is a comprehensive analysis focusing on crime trends spanning the past two decades, with a specific emphasis on seasonal variations in crime occurrences and their temporal and spatial distribution. Utilizing sophisticated computational methods, the project aims to establish long-term crime means rather than solely focusing on seasonal fluctuations. It serves as a valuable tool for users to assess crime patterns within specific locations over extended periods, enabling comparisons of safety levels. By examining serious crimes through the lens of IUCR codes, the project tracks their progression and aids in anticipating potential increases in crime rates, contributing to informed decision-making for proactive crime prevention efforts.",
        "technologiesUsed": ["React", "Python", "CSS", "HTML" , "Git", "FLASK", "Oracle DataBase"]
    },
    {
        "projectName": "Gator Library",
        "projectURL": "https://github.com/Sureshyarava/GatorLibrary",
        "projectDescription": "GatorLibrary is a fictional library management system designed to efficiently manage books, patrons, and borrowing operations. The system utilizes a Red-Black tree data structure for book management and a Binary Min-heap for handling book reservations. Each book node in the Red-Black tree is equipped with various attributes, including a reservation heap for tracking patron reservations.",
        "technologiesUsed": ["Python", "Pycharm"]
    },
    {
        "projectName": "Chord based Peer-to-Peer System Simulator",
        "projectURL": "https://github.com/Sureshyarava/Chord",
        "projectDescription": "This program simulates a Chord-based peer-to-peer system, implementing the functionalities mentioned in the Chord paper. The key features include creating a network ring, dynamically adding nodes, performing scalable key lookups, and simulating key lookups with hop count tracking.",
        "technologiesUsed": ["F#", "Visual Studio Code"]
    }
];

const MacOSTerminalWindow = () => {
    return (
        <div className="macos-terminal-window">
            <div className="macos-terminal-header">
                <div className="button close"></div>
                <div className="button minimize"></div>
                <div className="button maximize"></div>
            </div>
            <div className="scrollable-content">
            <TerminalLine id="work_experience" heading="WorkExperience" />
                <div className="center" >
                  {Experiences.map((experience, index) => (
                      <WorkExperience 
                        key = {index}
                        jobTitle={experience.jobTitle}
                        companyName={experience.companyName}
                        datesEmployment={experience.datesEmployment}
                        responsibilities={experience.responsibilities}
                        achievements={experience.achievements}
                        skillsUtilized={experience.skillsUtilized}
                        projects={experience.projects}
                    />
                    ))}
                </div>
                <TerminalLine id="projects" heading="Projects" />
                <div className="center">
                {Projects.map((project, index) => (
                <Project
                    key={index}
                    projectName={project.projectName}
                    projectURL={project.projectURL}
                    projectDescription={project.projectDescription}
                    technologiesUsed={project.technologiesUsed.join(", ")}
                />
                ))}
                </div>
                <TerminalLine id="education" heading="Education" />
                <div className="center">
                  {Educationlist.map((education , index) => (
                    <Education 
                        key = {index}
                        heading = {education.heading}
                        degree={education.degree} 
                        major={education.major}
                        gpa={education.gpa} 
                        outOf={education.outOf} 
                        collegeName={education.collegeName}
                        startTime = {education.startTime}
                        endTime = {education.endTime}
                        courses={education.courses}
                    />
                  ))}
                </div>
                <TerminalLine id="skills" heading="Skills" />
                <div className="center">
                {SkillList.map((skill, index) => (
                <Skills key={index} skill={skill} />
            ))}
                </div >
                <TerminalLine id="publications" heading="Publications" />
                <div className="center"> 
                {Publications.map((publication,index) => (
                <Publication
                      key = {publication.index}
                      title={publication.title}
                      authors={publication.authors}
                      journalConference={publication.journalConference}
                      doi={publication.doi}
                      description={publication.description}
                      keywords={publication.keywords}
                      youtubeUrl={publication.youtubeUrl}
                  />
                  ))}
                </div>
                <TerminalLine id="achievements" heading="Achievements" />
                <div className="center">
                <Achievements />
                </div>
            </div>
        </div>
    );
}

export default MacOSTerminalWindow;