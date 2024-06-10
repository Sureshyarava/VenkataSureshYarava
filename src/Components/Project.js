import React from 'react';


const Project = ({ projectName, projectURL, projectDescription, technologiesUsed }) => {
    return (
        <div className='project centered-container'>
            {projectName && <h2>{projectName}</h2>}
            {projectURL && <p><strong>Project URL:</strong> <a href={projectURL} style={{color : "#268bd2",textDecoration: "underline"}}> Explore Project Here</a> </p>}
            {projectDescription && <p className='justify padding'><strong>Description:</strong> {projectDescription}</p>}
            {technologiesUsed && <p><strong>Technologies Used:</strong> {technologiesUsed}</p>}
            <br></br>
        </div>
    );
};
export default Project;