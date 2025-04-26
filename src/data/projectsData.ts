export interface ProjectType {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

export const projectsData: ProjectType[] = [
  {
    title: "Intelligent Business Card Data Extracter and Manager",
    description: "A comprehensive learning management system with course creation, enrollment, and progress tracking.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["Python", "MySQL", "EasyOCR", "Streamlit"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "AI ChatBot",
    description: "An application that uses machine learning to generate unique images based on text descriptions.",
    image: "https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "ai",
    technologies: ["Python", "TensorFlow", "Flask", "React", "OpenAI API"],
    github: "https://github.com"
  },
  {
    title: "Symposium Website",
    description: "Mobile application to track workouts, nutrition, and fitness goals with customizable plans.",
    image: "https://images.pexels.com/photos/4429141/pexels-photo-4429141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "other",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Mydeen's Portfolio",
    description: "A centralized dashboard to control IoT devices, monitor energy usage, and set automation rules.",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["Reactjs", "TypeScript", "CSS", "JavaScript", "MySQL"],
    github: "https://github.com"
  },
  {
    title: "Stock Market Analyzer",
    description: "Data visualization tool that analyzes stock market trends and provides predictive insights.",
    image: "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "ai",
    technologies: ["Python", "Pandas", "Scikit-learn", "D3.js", "Flask"],
    github: "https://github.com",
    demo: "https://demo.com"
  },

];