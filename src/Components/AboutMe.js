import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            
            <p style={{color: "black"}} className='justify'>I, Venkata Suresh Yarva, have committed myself to mastering software engineering and web development. With a solid foundation in software test automation engineering, I have evolved into a full-stack developer, specializing in both front-end and back-end technologies. My expertise lies in crafting interactive user interfaces (UIs) with React, managing component states, and enhancing performance for smooth user experiences. On the back-end, I have developed secure and efficient services using the Spring Framework, creating RESTful APIs, implementing authentication and authorization mechanisms, and integrating databases to maintain data integrity and security.
                <br></br><br></br>
                My proficiency with Spring extends to its various modules, including Spring Boot for rapid application development, Spring MVC for building web applications, and Spring Data for simplified data access. I've leveraged Spring Security to implement robust security measures and Spring Cloud for developing cloud-native applications. This comprehensive understanding of the Spring ecosystem allows me to build scalable, maintainable, and high-performance Java-based applications.
                <br></br><br></br>
                My journey has been enriched by gaining practical experience in Agile methodologies, version control with Git, and team collaboration. As a graduate student in Computer and Information Science and Engineering at the University of Florida, I have developed innovative solutions that address real-world problems, demonstrating my capability to solve complex issues. Professionally, I served as a Junior Software Test Automation Engineer at EPAM Systems, where I played a key role in integrating Mada and Rupay cards and spearheaded the migration of NPCI services. My research contributions have resulted in a published IEEE paper on transforming AutoCAD plots into G-code, underscoring my dedication to technological advancement and excellence.
                <br></br><br></br>
                I am eager to apply my full-stack development skills, including my expertise in Spring Framework and test automation, to new endeavors and projects. Feel free to contact me if you're interested in discussing potential partnerships or job opportunities.</p>

            <div className="contact-links">
                <a href="https://github.com/Sureshyarava" target="_blank" rel="noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" style={{width  :"10%", marginRight:"10px"}} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/yaravavenkatasuresh/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"  style={{width  :"10%", marginRight:"10px"}} alt="LinkedIn" />
                </a>
                <a href="https://leetcode.com/sureshyarava340/" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg"  style={{width  :"10%", marginRight:"10px"}} alt="LeetCode" />
                </a>
                <a href="https://codeforces.com/profile/Sureshyarava" target="_blank" rel="noreferrer">
                    <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/codeforces.svg"  style={{width  :"10%", marginRight:"10px"}} alt="CodeForces" />
                </a>
            </div>
            <div className="contact-info">
            <p style={{ color: "black" }}>
                <strong>Location:</strong> Gainesville, 
                Florida, USA
                </p>
                <p style={{color: "black"}}><strong>Email:</strong> yarava.venkatasu@ufl.edu </p>
                <p style={{color: "black"}}><strong>Phone Number:</strong> +1 (863)-656-6748</p>
            </div>
        </div>
    );
}

export default AboutMe;
