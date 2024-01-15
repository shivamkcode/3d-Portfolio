import { devs, freelance, sk } from "../assets/images";
import {
  ayesha,
  book,
  car,
  contact,
  css,
  entertainment,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  quotes,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  task,
  audiophile,
  sequelize,
  mysql,
  mongoose,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mongoose,
    name: "Mongoose",
    type: "ODB",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: mysql,
    name: "MYSQL",
    type: "Database",
  },
  {
    imageUrl: sequelize,
    name: "Sequelize",
    type: "ORM",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "MUI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "Freelance",
    icon: freelance,
    iconBg: "#fff",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining web applications imprementing HTML5, CSS, JS, React.js and other related technologies.",
      "Created full stack web applications and static websites for different clients across small and medium size businesses. Also, consulted on SEO and social media strategy. ",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Wev Developer",
    company_name: "100devs",
    icon: devs,
    iconBg: "#7abfb7",
    date: "October 2021 - July 2022",
    points: [
      "Collaborated with a team of developers to build modern and responsive web applications using best practices.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Built semantically structured full stack web applications.",
    ],
  },
  {
    title: "Retail Store Manager",
    company_name: "S.K. Departmental",
    icon: sk,
    iconBg: "#b7e4c7",
    date: "May 2018 - June 2020",
    points: [
      "Led a successful strategy and communications campaign that exceeded the sales goal by 300%, raising a total of $110,000, with $35,000 raised digitally.",
      "Oversaw day-to-day operations, managed a dedicated team, and implemented marketing initiatives, resulting in improved store performance and enhanced customer satisfaction",
      "Gained valuable insights into consumer behavior, market trends, and the importance of delivering a personalized retail experience.",
    ],
  },
  // {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#a2d2ff",
  //     date: "Jan 2023 - Present",
  //     points: [
  //         "Developing and maintaining web applications using React.js and other related technologies.",
  //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //         "Implementing responsive design and ensuring cross-browser compatibility.",
  //         "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "tel:226-927-5253",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/shivamkcode",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/shivam-kumar-401594251/",
  },
];

export const projects = [
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Pomodoro App",
    description:
      "This is a Pomodoro Timer application built with ReactJS. The application allows users to manage their time effectively using the Pomodoro technique. Users can set timers, change their default times, and customize the theme and fonts.",
    link: "https://github.com/shivamkcode/PomodoraApp",
    deploy: "https://pomodoro-app-kohl-nu.vercel.app/",
  },
  {
    iconUrl: audiophile,
    theme: "btn-back-orange",
    name: "audiophile ecommerce site",
    description:
      "This is a full-stack ecommerce website built using Next.js, TypeScript, Tailwind CSS and uses Sequelize with Mysql2 as database. Users can create an account, add products to their cart, fill out a checkout form, and receive a confirmation on the thank you page.",
    link: "https://github.com/shivamkcode/audiophile-e-commerce",
    deploy: "https://audiophile-e-commerce-three.vercel.app",
  },
  {
    iconUrl: task,
    theme: "btn-back-purple",
    name: "TaskTracker",
    description:
      "TaskTracker is a full-stack task management application built with React.js for the frontend and Node.js for the backend. The application allows users to sign up, log in, create new boards and columns, and manage tasks with their subtasks.",
    link: "https://github.com/shivamkcode/task-tracker",
    deploy: "task-tracker-teal-theta.vercel.app",
  },
  {
    iconUrl: entertainment,
    theme: "btn-back-red",
    name: "Entertainment App",
    description:
      "This is an entertainment app that allows users to browse and search through a collection of movies and TV series.The app is made fully responsive and is completely modeled to work with any related api.",
    link: "https://github.com/shivamkcode/EntertainmentApp/tree/main",
    deploy: "https://entertainment-app-five.vercel.app/",
  },
  {
    iconUrl: book,
    theme: "btn-back-orange",
    name: "Dictionary App",
    description:
      "This is a Dictionary application built with ReactJS and integrated with a third-party dictionary API. The application allows users to search for words and get definitions, synonyms, antonyms, and examples of usage.",
    link: "https://github.com/shivamkcode/FrontendMentors/tree/main/dictionaryApp",
    deploy: "https://frontend-mentors-silk.vercel.app/",
  },
  {
    iconUrl: ayesha,
    theme: "btn-back-green",
    name: "Ayesha's Salon Landing Page",
    description:
      "This is a responsive landing page for Ayesha's Salon. The design is fully responsive, ensuring a seamless transition across a multitude of devices. Whether you are browsing on a desktop, tablet, or smartphone.",
    link: "https://github.com/shivamkcode/freelance-projects/tree/main/ayesha",
    deploy: "https://ayesha-salon.vercel.app/",
  },
  {
    iconUrl: quotes,
    theme: "btn-back-black",
    name: "Random Quotes",
    description:
      "RandomQuotes is an innovative application that generates random quotes and brings them to life with speech synthesis. Built with a focus on user experience, the application provides an engaging way to discover and share inspiring quotes.",
    link: "https://github.com/shivamkcode/RandomQuotes",
    deploy: "https://random-quotes-rouge.vercel.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Todo Application",
    description:
      "This is a simple yet powerful Todo application built with ReactJS. The application allows users to manage their daily tasks more effectively. It gives user the freedom to add, edit and delete the tasks and keeps them saved using localStorage. ",
    link: "https://github.com/shivamkcode/todoList/tree/main/todo",
    deploy: "https://todo-list-lovat-psi.vercel.app/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Expense Tracker",
    description:
      "This application is an Expense Tracker, meticulously crafted using the popular JavaScript library, ReactJS. It serves as a practical tool for individuals who wish to have a clear and concise overview of their financial activities.",
    link: "https://github.com/shivamkcode/ExpenseTracker",
  },
];
