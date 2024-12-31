import React from 'react';

const WorkExperience = ({ jobTitle, companyName, datesEmployment, responsibilities, achievements, skillsUtilized, projects }) => {
    return (
        <div>
            <h2>{jobTitle} at {companyName}</h2>
            <p><strong>Dates of Employment:</strong> {datesEmployment}</p>
            <h3>Key Responsibilities:</h3>
            <ul>
                {responsibilities.map((responsibility, index) => (
                    <li key={index} style={{ textAlign: 'justify', marginRight: '10px'}}>{responsibility}</li>
                ))}
            </ul>
            <h3>Achievements:</h3>
            <ul>
                {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                ))}
            </ul>
            <h3>Skills Utilized:</h3>
            <ul>
                {skillsUtilized.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
            {projects.length > 0 && (
                <>
                    <h3>Relevant Projects:</h3>
                    <ul>
                        {projects.map((project, index) => (
                            <li key={index}>{project}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default WorkExperience;