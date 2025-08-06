/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Yunxing Tao",
  title: "Hi all, I'm Yunxing Tao",
  subTitle: emoji(
    "A motivated graduate student at Concordia University with a strong foundation in Embedded Systems and NLP. Passionate about developing intelligent systems and interactive user experiences."
  ),
 resumeLink: "https://aurora-tao.github.io/aurora-cv-site/assets/Resume_Aug2025.pdf",


  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/aurora-tao",
  linkedin: "https://www.linkedin.com/in/aurora-tao/",
  gmail: "yunxingtao@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "NLP & Embedded Enthusiast | Full Stack Explorer",
  skills: [
    emoji("⚡ Build intelligent systems using NLP models like LSTM"),
    emoji("⚡ Develop smart sensor-based applications on STM32/Keil"),
    emoji("⚡ Web application development using React, Flask, and SQL")
  ],
  softwareSkills: [
    { skillName: "html-5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "reactjs", fontAwesomeClassname: "fab fa-react" },
    { skillName: "python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "sql", fontAwesomeClassname: "fas fa-database" },
    { skillName: "stm32", fontAwesomeClassname: "fas fa-microchip" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Concordia University",
     //logo: require("./assets/images/concordiaLogo.png"),
      subHeader: "Master of Engineering in Electrical and Computer Engineering",
      duration: "2025 - Present",
      desc: "Electrical and Computer Engineering"
    },
    {
      schoolName: "Chengdu University of Technology",
      //logo: require("./assets/images/chengduLogo.png"), 记得加图片
      subHeader: "Bachelor of Engineering in Internet of Things Engineering",
      duration: "2020 - 2024",
      desc: "Internet of Things Engineering"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Embedded Systems", progressPercentage: "85%" },
    { Stack: "NLP / ML", progressPercentage: "70%" },
    { Stack: "Web Development", progressPercentage: "75%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "Personal and Academic Highlights",
  projects: [
    {
      //image: require("./assets/images/newsNlp.webp"),记得加图片
      projectName: "News NLP Platform",
      projectDesc: "Developed a visualization news classification platform using BiLSTM and Python, integrated with Flask and SQL.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/aurora-tao/news-nlp-platform"
        }
      ]
    },
    {
      //image: require("./assets/images/farmIoT.webp"),记得加图片
      projectName: "Smart Agriculture System",
      projectDesc: "Built an STM32-based system with light and humidity sensors, automatic watering, and pest control features.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/aurora-tao/smart-farm"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Highlights of academic and personal milestones.",
  achievementsCards: [],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "I enjoy sharing my life in Montreal!.",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://aurora-tao.github.io/aurora-cv-site/blog/travel.html",
      title: "Hiking with my friends!",
      description: "first hiking with ray and matt."
    }
  ],
  display: true
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Love sharing and collaborating with others."),
  talks: [],
  display: true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Conversations on tech and innovation.",
  podcast: [],
  display: true
};

const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s collaborate on something great!",
  number: "",
  email_address: "yunxingtao@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
