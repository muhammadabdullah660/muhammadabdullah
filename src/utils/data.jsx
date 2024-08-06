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

const Tools = [
  "Visual Studio Code",
  "Github",
  "Figma",
  "Jira",
  "Slack",
  "Postman",
  "Notion",
  "MongoDBCompass",
  "Microsoft Azure",
];
const ExperienceItems = {
  title: "Experience",
  data: [
    {
      icon: `${process.env.PUBLIC_URL}/images/Woit Solutions.png`,
      company: "Woit Solutions",
      title: "Software Development Intern",
      date: "Jun. 23 - Aug. 23",
      desc: "Enhanced WOIT Solutions’ website frontend with TypeScript to optimize user experience and navigation. Implemented Stripe payment gateway for secure and efficient transactions. Designed and built the admin panel using React, Node.js, and MongoDB, incorporating functionalities like user management and handling briefs and brands.",
      link: "https://www.linkedin.com/company/woit-solutions/",
    },

    {
      icon: `${process.env.PUBLIC_URL}/images/uet-lahore.png`,
      company: "University of Engineering and Techonology, Lahore",
      title: "Teaching Assistant",
      date: "Dec. 22 - Jun. 23",
      desc: "Instructed students in the Lab of PF and OOP, conducting sessions where they developed applications using .net, and designed graphical user interfaces with WinForms. Assisted in grading assignments and projects, providing feedback to students to help them improve their coding skills.",
      link: "https://uet.edu.pk/",
    },
    {
      icon: "https://img.icons8.com/ios-glyphs/50/000000/fiverr.png",
      company: "Fiverr - Freelance",
      title: "Front-End Developer",
      date: "Mar. 21 - Nov. 21",
      desc: "Translated design mockups from PSD, Figma, and InDesign into fully responsive HTML/CSS user interfaces. Crafted professional email signatures using HTML and CSS, ensuring alignment with company branding.",
      link: "https://www.fiverr.com",
    },
  ],
};
const EducationItems = {
  title: "Education",
  data: [
    {
      icon: `${process.env.PUBLIC_URL}/images/uet-lahore.png`,
      company: "University of Engineering and Techonology, Lahore",
      title: "BS. Computer Science",
      date: "2021 - Present",
      link: "https://uet.edu.pk/",
    },
  ],
};
const VolunteeringItems = {
  title: "Volunteering",
  data: [
    {
      icon: `${process.env.PUBLIC_URL}/images/GfD.png`,
      company: "Google For Developers",
      title: "Campus Lead",
      date: "2023 - 2024",
      link: "https://gdsc.community.dev/university-of-engineering-and-technology-lahore-lahore-pakistan/",
    },
    {
      icon: `${process.env.PUBLIC_URL}/images/mslearn.png`,
      company: "Microsoft Learn",
      title: "Gold Student Ambassador",
      date: "2022 - Present",
      link: "https://mvp.microsoft.com/en-US/studentambassadors/profile/ca9e1a70-d6f7-4376-9405-809e2894a0f2",
    },
  ],
};

const Socials = [
  {
    icon: "https://img.icons8.com/ios/50/FFFFFF/linkedin.png",
    link: "https://www.linkedin.com/in/muhammadabdullah00/",
  },
  {
    icon: "https://img.icons8.com/ios/50/FFFFFF/github--v1.png",
    link: "https://github.com/muhammadabdullah660",
  },
  {
    icon: `${process.env.PUBLIC_URL}/images/topmate.png`,
    link: "https://topmate.io/muhammad_abdullah15",
  },
  {
    icon: "https://img.icons8.com/ios/50/FFFFFF/youtube-play--v1.png",
    link: "https://www.youtube.com/channel/UCOJ6W9G7QW0JZq1vgIlDSKw",
  },
  {
    icon: "https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png",
    link: "https://www.instagram.com/muhammad__abdullahhh/",
  },
];

const Services = {
  title: "Services",
  data: [
    {
      title: "Web Design",
      desc: "Create responsive and visually appealing web interfaces using HTML, CSS, JavaScript, and React, ensuring a seamless user experience across all devices.",
    },
    {
      title: "SaaS Development",
      desc: "Develop and maintain robust web applications using React, Node.js, and MongoDB for comprehensive front-end and back-end solutions.",
    },
    {
      title: "Mentorship and Training",
      desc: "Provide guidance and training in software development, emphasizing C#, Python, JavaScript, Git, and Firebase, to enhance coding skills and project management.",
    },
    {
      title: "Community Building and Management",
      desc: "Create and execute strategies to develop thriving tech communities through events, workshops, and engagement initiatives.",
    },
  ],
};

export {
  Skills,
  ExperienceItems,
  EducationItems,
  VolunteeringItems,
  Tools,
  Socials,
  Services,
};
