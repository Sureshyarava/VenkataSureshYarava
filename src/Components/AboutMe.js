import React from 'react';

const AboutMe = () => {
    return (
        <div className="about-me">
            <h2>About Me</h2>
            <p style={{color: "black"}}>As a graduate student in Computer and Information Science and Engineering at the University of Florida, I am dedicated to mastering software engineering and web development. With a track record of creating impactful solutions like the Crime Data Analysis web app, AutoCAD to G-Code Converter, and Gator Library, I thrive on tackling real-world challenges. My professional journey includes a role as a Junior Software Test Automation Engineer at EPAM Systems India Private Limited, where I honed my skills in Cards and Payments, collaborating with industry giants like Mastercard. Noteworthy achievements include integrating Mada and Rupay cards and spearheading the migration of NPCI services. My research prowess is highlighted by a published IEEE paper on converting AutoCAD plots to G-code. Proficient in Python, Java, SQL, and web technologies, coupled with expertise in SAFe Agile methodologies, I am eager to leverage my academic background and industry experience to drive positive change and excel in dynamic environments.</p>
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
