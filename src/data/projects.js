import faceImg1 from "../images/face-recognition.png";
import faceImg2 from "../images/Docker-Makefile-Two-Tier.png";
import faceImg3 from "../images/AWS EC2 Instance Create Using Bash.png";
import { BiLogoGithub, BiLogoPython } from "react-icons/bi";
import { SiFlask, SiGnubash, SiDocker, SiAmazonaws } from "react-icons/si";
import { DiLinux } from "react-icons/di";

const ProjectsData = [
  {
    id: "101",
    name: "Face Recognition Web App with Flask",
    image: faceImg1,
    icons: [BiLogoGithub, SiFlask, BiLogoPython, DiLinux],
    description:
      "Developed a real-time Face Recognition Web Application using Python, OpenCV, and Flask, with deployment on Heroku and version control via GitHub.",
    github: "https://github.com/muhammadhammad2005/Face-App.git",
    demo: "https://drive.google.com/file/d/1O8jz4wGoazxJOnf1o1brNHsTGWq-bXlZ/view?usp=sharing",
  },
  {
    id: "102",
    name: "Makefile for Two-Tier App using bash",
    image: faceImg2,
    icons: [BiLogoGithub, SiGnubash, DiLinux, SiDocker],
    description:
      "I built a Docker Makefile for a two-tier application, using Shell Scripting to streamline and automate the deployment process!",
    github: "https://github.com/muhammadhammad2005/two-tier-flask-app",
    demo: "https://drive.google.com/file/d/1ldyAhRhbN3qMtlu-yGMFgxvB0JSEL_i-/view?usp=sharing",
  },
  {
    id: "103",
    name: "AWS EC2 Instance Create Using Bash",
    image: faceImg3,
    icons: [SiAmazonaws, SiGnubash, BiLogoPython, DiLinux],
    description:
      "This project focuses on automating essential AWS EC2 instance operations using Bash scripting, enhancing efficiency, security, and scalability in cloud.",
    demo: "https://drive.google.com/file/d/1FTov_99T1YkhPIPtKNR7aUdW6TSxjNkF/view?usp=sharing",
  },
];

export default ProjectsData;
