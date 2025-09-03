import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "work",
    title: "Courses",
  },

  {
    id: "about",
    title: "Business",
  },

  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "One-to-One Live Courses",
    icon: web,
  },
  {
    title: "Unlimited Doubt Solving 24x7",
    icon: mobile,
  },
  {
    title: "Hands-on projects every week",
    icon: backend,
  },
  {
    title: "Industry-Relevant Curriculum.",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Advanced ML & DL with Mlops, NLP with Mlops & AI",
    company_name: "4-weeks course (3 sessions per week+ 1 weekend project)",
    
    icon: starbucks,
    iconBg: "#383E56",
    date: "Total Cost: Rs. 8500 including taxes ",
    points: [
      "Pattern Recognition and Machine Learning",
      "Establish a continuous learning infrastructure for ML models, including data drift detection, model retraining strategies, and deployment strategies for updated models.",
      "Focus on self-attention mechanisms, multi-head attention, and positional encoding, with a focus on fine-tuning BERT models for sentence similarity.",
      "Develop an end-to-end MLOps solution.",
    ],
    text: "4-weeks course (3 sessions per week+ 1 weekend project)",
    
  },
  {
    title: "Deep Learning & Generative AI",
    company_name: "12-weeks course(3 sessions per week+ 1 weekend project)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Total Cost: Rs. 8000 including taxes",
    points: [
      "Introduction to Gen AI and Advanced Natural Language Processing.",
      "Learn anout Language Models like BERT, RoBERTa and Transformers.",
      "Autoencoders, Variational Autoencoders, Generative Adversarial Networks.",
      "How Neural Networks Work, their Training and Advanced CNN, RNN",
      " Deep Learning Frameworks like TensorFLow, Py Torch and Keras",
      "Hands-on Real-World projects",
    ],
  },
  {
    title: "Machine Learning",
    company_name: "6-weeks course(3 sessions per week+ 1 weekend project)",
    icon: shopify,
    iconBg: "#383E56",
    date: "Total Cost: Rs. 7500 including taxes",
    points: [
      "Introduction to ML and its types",
      "Learn about Linear & Logistic Regression, Decision Trees, Random Forests, and Support Vector Machines and Reinforcement Learning",
      "ResNet, U-Net and Transformers (Advanced Neural Network Architectures).",
      "Optimisation Techniques and Algorithms in Machine Learning",
      "Hands-on Real-World projects",
    ],
  },
  {
    title: "Data Science",
    company_name: "4-weeks course (3 sessions per week+ 1 weekend project)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Total Cost: Rs. 7000 including taxes",
    points: [
      "Learn about Python, Data Structures and OOPS concepts.",
      "Covers mathematics for Data Science: Probability, Statistics & Linear Algebra.",
      "Data Science Life Cycle: From Data Collection To Feature Engineering",
      "Career Guidance & Interview Preparation",
      "Hands-on Real-World projects",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Every penny spend on this course is worth it,  Highly recommend!",
    name: "Dr. Aanchal Kesarwani",
    designation: "Clinical Physiotherapist",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a teacher who truly cares about their students' success like their(Aurora AI Tech) team does.",
    name: "Ujjwal Nagar",
    designation: "Student",
    company: "Delhi University",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After going through their course, my work efficiency increased by 50%. I can't thank them enough!",
    name: "Pradeep Kumar Gupta",
    designation: "Project Manager",
    company: "**(hidden for privacy)**",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AI-driven personalization for customers",
    description:
      "Deliver 24/7 support, anticipate customer needs, and resolve issues quickly.\n\n ",
    tags: [
      {
        name: "Grow",
        color: "blue-text-gradient",
      },
      {
        name: "Fly",
        color: "green-text-gradient",
      },
      {
        name: "Thrive",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Increased Efficiency and Productivity",
    description:
      "Automate repetitive tasks and streamline business processes, freeing up employees to focus on higher-value work",
    tags: [
      {
        name: "Grow",
        color: "blue-text-gradient",
      },
      {
        name: "Fly",
        color: "green-text-gradient",
      },
      {
        name: "Thrive",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Competitive Advantage",
    description:
      "Operate more efficiently, serve customers better, and make smarter business decisions",
    tags: [
      {
        name: "Grow",
        color: "blue-text-gradient",
      },
      {
        name: "Fly",
        color: "green-text-gradient",
      },
      {
        name: "Thrive",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
