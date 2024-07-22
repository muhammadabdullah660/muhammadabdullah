const Skills = [
  "Web Design",
  "JavaScript",
  "React",
  "Node.js",
  "CSS3",
  "HTML5",
  "Python",
  "SQL",
  "Git",
  "C#",
];

const ExperienceItems = [
  {
    icon: `${process.env.PUBLIC_URL}/images/Woit Solutions.png`,
    company: "Woit Solutions",
    title: "Software Development Intern",
    date: "Jun. 23 - Aug. 23",
    desc: "Enhanced WOIT Solutions’ website frontend with TypeScript to optimize user experience and navigation. Implemented Stripe payment gateway for secure and efficient transactions, managing the integration process. Designed and built the admin panel using React, Node.js, and MongoDB, incorporating functionalities like user management and handling briefs and brands.",
  },

  {
    icon: `${process.env.PUBLIC_URL}/images/uet-lahore.png`,
    company: "University of Engineering and Techonology, Lahore",
    title: "Teaching Assistant",
    date: "Dec. 22 - Jun. 23",
    desc: "Instructed students in the Lab of PF and OOP, conducting sessions where they developed applications using C# and C++, managed version control with GitHub, and designed graphical user interfaces with WinForms. Assisted in grading assignments and projects, providing feedback to students to help them improve their coding skills.",
  },
  {
    icon: "https://img.icons8.com/ios-glyphs/50/000000/fiverr.png",
    company: "Fiverr - Freelance",
    title: "Front-End Developer",
    date: "Mar. 21 - Nov. 21",
    desc: "Translated design mockups from PSD, Figma, and InDesign into fully responsive HTML/CSS user interfaces. Crafted professional email signatures using HTML and CSS, ensuring alignment with company branding.",
  },
];
const EducationItems = [
  {
    icon: `${process.env.PUBLIC_URL}/images/uet-lahore.png`,
    company: "University of Engineering and Techonology, Lahore",
    title: "BS. Computer Science",
    date: "2021 - Present",
  },
];

export { Skills, ExperienceItems, EducationItems };
