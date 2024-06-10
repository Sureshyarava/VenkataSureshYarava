import React from 'react';

const Education = ({ heading, degree, major, gpa, outOf, collegeName, startTime, endTime, courses }) => {
    return (
        <div>
            <h2>{heading}</h2>
            <p className='justify'>
                <strong>Degree:</strong> {degree}<br />
                <strong>Major:</strong> {major}<br />
                <strong>GPA:</strong> {gpa} / {outOf}<br />
                <strong>College Name:</strong> {collegeName}<br />
                <strong>Duration:</strong> {startTime} - {endTime}
            </p>
            { courses !== "None" && 
              <ul>
                <h3>Relevant Courses:</h3>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
              </ul>
            }
        </div>
    );
}

export default Education;
