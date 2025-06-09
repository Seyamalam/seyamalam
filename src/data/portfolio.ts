import { Project, Experience, Skill, Publication, ResearchProject } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-platform", 
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI",
    longDescription: "A comprehensive e-commerce platform built with Next.js and Node.js, featuring real-time inventory tracking, payment processing, and an admin dashboard for order management. Implemented advanced features like product recommendations, cart persistence, and email notifications.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    liveUrl: "https://ecom-five-rho.vercel.app/",
    githubUrl: "https://github.com/Seyamalam/ecommerce-platform",
    featured: true
  },
  {
    id: "parishad-barta",
    title: "Parishad Barta",
    description: "News portal and content management system",
    longDescription: "A comprehensive news portal built with modern web technologies, featuring article management, user authentication, responsive design, and SEO optimization. Includes admin dashboard for content management and analytics.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "https://c70mvq7b7i.ufs.sh/f/rwSqviM7ZDM9nGrGHJRqMy5rCYpxPW2Ez4RZuQ6tSmFkNO9L",
    liveUrl: "https://parishadbarta.com/",
    featured: true
  },
  {
    id: "professor-sazzad",
    title: "Professor Sazzad Portfolio",
    description: "Professional academic portfolio website",
    longDescription: "A modern academic portfolio website showcasing research, publications, and achievements. Built with responsive design, smooth animations, and optimized for performance and SEO.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "public/projects/professor-sazzad.png",
    liveUrl: "https://www.professorsazzad.com/",
    featured: true
  },
  {
    id: "luxe-retreats",
    title: "Luxe Retreats",
    description: "Luxury accommodation booking platform",
    longDescription: "A sophisticated booking platform for luxury accommodations, featuring interactive maps, real-time availability, payment integration, and a beautiful user interface with smooth animations and modern design patterns.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe", "MapBox"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
    liveUrl: "https://luxe-retreats.vercel.app/",
    githubUrl: "https://github.com/Seyamalam/luxe-retreats",
    featured: true
  },
  {
    id: "task-management-app",
    title: "Collaborative Task Manager", 
    description: "Real-time team collaboration tool with drag-and-drop interface",
    longDescription: "A modern task management application inspired by Trello and Asana. Features include real-time collaboration using WebSockets, drag-and-drop task management, team workspace creation, and progress tracking with detailed analytics dashboard.",
    technologies: ["React", "TypeScript", "Express.js", "Socket.io", "MongoDB", "React DnD"],
    image: "/projects/taskmanager.jpg",
    liveUrl: "https://tasks.seyamalam.dev",
    githubUrl: "https://github.com/seyamalam/task-manager",
    featured: true
  },
  {
    id: "weather-dashboard",
    title: "Weather Analytics Dashboard",
    description: "Interactive weather dashboard with data visualization",
    longDescription: "A comprehensive weather dashboard that provides current conditions, forecasts, and historical weather data with beautiful visualizations. Features include location-based weather, interactive charts, weather alerts, and a responsive design that works across all devices.",
    technologies: ["React", "D3.js", "Weather API", "Chart.js", "CSS Grid"],
    image: "/projects/weather.jpg",
    liveUrl: "https://weather.seyamalam.dev", 
    githubUrl: "https://github.com/seyamalam/weather-dashboard",
    featured: false
  },
  {
    id: "ai-content-generator",
    title: "AI Content Generator",
    description: "OpenAI-powered content creation tool for marketers",
    longDescription: "An AI-powered content generation platform that helps marketers and content creators generate high-quality blog posts, social media content, and marketing copy. Built with modern React patterns and integrated with OpenAI's GPT models for intelligent content creation.",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind CSS", "Supabase"],
    image: "/projects/ai-content.jpg",
    githubUrl: "https://github.com/seyamalam/ai-content-generator",
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    id: "senior-fullstack-dev",
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "2023 - Present",
    description: "Lead development of customer-facing web applications serving 100K+ users. Architected microservices infrastructure and mentored junior developers. Improved application performance by 40% through optimization strategies.",
    technologies: ["React", "Next.js", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    id: "fullstack-dev",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    period: "2021 - 2023", 
    description: "Developed and maintained multiple client projects from conception to deployment. Collaborated with design teams to implement responsive user interfaces and built RESTful APIs for mobile and web applications.",
    technologies: ["React", "Express.js", "MongoDB", "JavaScript", "CSS3", "Git"],
  },
  {
    id: "frontend-dev",
    company: "Digital Agency Pro",
    position: "Frontend Developer",
    period: "2020 - 2021",
    description: "Created responsive websites and web applications for various clients. Worked closely with designers to translate mockups into pixel-perfect, interactive user experiences. Optimized websites for performance and SEO.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "SASS", "Webpack"],
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: "expert" },
  { name: "Next.js", category: "frontend", level: "expert" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "JavaScript", category: "frontend", level: "expert" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "HTML5", category: "frontend", level: "expert" },
  { name: "CSS3", category: "frontend", level: "expert" },
  { name: "React Native", category: "frontend", level: "advanced" },
  
  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "Python", category: "backend", level: "advanced" },
  { name: "Django", category: "backend", level: "advanced" },
  { name: "Go", category: "backend", level: "intermediate" },
  { name: "REST APIs", category: "backend", level: "advanced" },
  { name: "GraphQL", category: "backend", level: "intermediate" },
  { name: "Microservices", category: "backend", level: "intermediate" },
  
  // Database
  { name: "PostgreSQL", category: "database", level: "advanced" },
  { name: "MongoDB", category: "database", level: "advanced" },
  { name: "Redis", category: "database", level: "intermediate" },
  { name: "Prisma", category: "database", level: "advanced" },
  { name: "SQLite", category: "database", level: "advanced" },
  
  // AI & Data
  { name: "Machine Learning", category: "ai", level: "intermediate" },
  { name: "Data Analysis", category: "ai", level: "intermediate" },
  { name: "TensorFlow", category: "ai", level: "beginner" },
  { name: "Pandas", category: "ai", level: "intermediate" },
  { name: "NumPy", category: "ai", level: "intermediate" },
  
  // Tools
  { name: "Git", category: "tools", level: "expert" },
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "Webpack", category: "tools", level: "intermediate" },
  { name: "Vite", category: "tools", level: "advanced" },
  { name: "Linux", category: "tools", level: "intermediate" },
  
  // Cloud
  { name: "AWS", category: "cloud", level: "intermediate" },
  { name: "Vercel", category: "cloud", level: "advanced" },
  { name: "Netlify", category: "cloud", level: "advanced" },
  { name: "Digital Ocean", category: "cloud", level: "intermediate" },
];

export const publications: Publication[] = [
  {
    id: "leaf-disease-cnn",
    title: "Comparing pre-trained models for efficient leaf disease detection: a study on custom CNN",
    authors: ["Seyam, Touhidul Alam", "Jowthi, Chandni Barua", "Pathak, Abhijit"],
    publication: "Journal of Electrical Systems and Information Technology",
    year: 2024,
    volume: "11",
    number: "1",
    pages: "1-26",
    publisher: "SpringerOpen",
    researchArea: "agriculture",
    abstract: "A comprehensive study comparing various pre-trained CNN models for efficient detection of plant leaf diseases, contributing to precision agriculture and crop health management.",
    featured: true
  },
  {
    id: "agriscan-nextjs",
    title: "AgriScan: Next.js powered cross-platform solution for automated plant disease diagnosis and crop health management",
    authors: ["Seyam, Touhidul Alam", "Pathak, Abhijit"],
    publication: "Journal of Electrical Systems and Information Technology",
    year: 2024,
    volume: "11",
    number: "1",
    pages: "45",
    publisher: "Springer Berlin Heidelberg",
    researchArea: "agriculture",
    abstract: "A modern web-based solution built with Next.js for automated plant disease diagnosis, bridging the gap between advanced AI research and practical agricultural applications.",
    featured: true
  },
  {
    id: "tuberculosis-ml",
    title: "Application of Machine Learning K-Means Clustering and Linear Regression in Determining the Risk Level of Pulmonary Tuberculosis",
    authors: ["Pathak, Abhijit", "Bablu, Ziaul Islam", "Limon, Towhidul Haque", "Barua, Sowmik", "Dey, Piyal", "Jiba, Mowmita Tajnin", "Seyam, Touhidul Alam"],
    publication: "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
    year: 2024,
    pages: "1-6",
    publisher: "IEEE",
    researchArea: "healthcare",
    abstract: "Novel application of machine learning techniques for early detection and risk assessment of pulmonary tuberculosis using clustering and regression algorithms.",
    featured: true
  },
  {
    id: "cardiovascular-svm",
    title: "Enhancing Cardiovascular Risk Prediction Using Support Vector Machines and Advanced Machine Learning Algorithms",
    authors: ["Pathak, Abhijit", "Seyam, Touhidul Alam", "Chakraborty, Arnab", "Santa, Nurjahan Kamal", "Uddin, Eftakar", "Mim, Tasmim Akther"],
    publication: "2024 IEEE International Conference on Computing, Applications and Systems (COMPAS)",
    year: 2024,
    pages: "1-6",
    publisher: "IEEE",
    researchArea: "healthcare",
    abstract: "Advanced machine learning approach for cardiovascular risk prediction using Support Vector Machines and ensemble methods.",
    featured: true
  },
  {
    id: "llama2-optimization",
    title: "Fine-tuning LLaMA 2 interference: a comparative study of language implementations for optimal efficiency",
    authors: ["Hossain, Sazzad", "Seyam, Touhidul Alam", "Chowdhury, Avijit", "Xamidov, Munis", "Ghose, Rajib", "Pathak, Abhijit"],
    publication: "arXiv preprint arXiv:2502.01651",
    year: 2025,
    publisher: "arXiv",
    researchArea: "llm",
    abstract: "Comprehensive analysis of LLaMA 2 model optimization techniques across different programming language implementations for enhanced efficiency.",
    featured: true
  },
  {
    id: "malware-classification",
    title: "Efficient Malware Classification Using Multiprocessing and Bag-of-Words Vectorization",
    authors: ["Avijit Chowdhury", "Touhidul Alam Seyam", "Moin Uddin Ahmed Babar", "Chonchal Khan", "Saima Akter"],
    publication: "Advances in Networks",
    year: 2025,
    volume: "12",
    number: "1",
    pages: "19-28",
    publisher: "Scientific Publishing Group",
    researchArea: "cybersecurity",
    abstract: "Novel approach to malware classification leveraging multiprocessing capabilities and advanced vectorization techniques for improved detection accuracy.",
    featured: true
  },
  {
    id: "paddy-disease-cnn",
    title: "Enhancing Agricultural Diagnostics: Advanced Training of Pre-Trained CNN Models for Paddy Leaf Disease Detection",
    authors: ["Hossain, Sazzad", "Seyam, Touhidul Alam", "Chowdhury, Avijit", "Ghose, Rajib", "Rahaman, Arifur", "Hadika, Zarin", "Pathak, Abhijit"],
    publication: "Machine Learning",
    year: 2025,
    volume: "10",
    number: "1",
    pages: "1-13",
    publisher: "Machine Learning Journal",
    researchArea: "agriculture",
    abstract: "Advanced techniques for training pre-trained CNN models specifically for paddy leaf disease detection, contributing to agricultural sustainability.",
    featured: true
  },
  {
    id: "kmeans-mojo",
    title: "Next-Generation K-Means Clustering: Mojo-Driven Performance for Big Data",
    authors: ["Seyam, Touhidul Alam", "Hossain, Md Sazzad", "Ghose, Rajib", "Nurmamatov, Mekhriddin", "Fayzullo, Nazarov", "Hadika, Zarin", "Pathak, Abhijit"],
    publication: "International Journal",
    year: 2025,
    volume: "14",
    number: "1",
    pages: "7-19",
    publisher: "International Journal",
    researchArea: "big-data",
    abstract: "Revolutionary approach to K-Means clustering using Mojo programming language for unprecedented performance in big data analytics.",
    featured: true
  }
];

export const researchProjects: ResearchProject[] = [
  {
    id: "precision-agriculture-ai",
    title: "AI-Driven Precision Agriculture Platform",
    description: "Comprehensive AI system for crop health monitoring and disease detection",
    longDescription: "A multi-faceted research project developing advanced AI models for precision agriculture, including plant disease detection, crop health monitoring, and yield prediction. The project combines computer vision, machine learning, and web technologies to create practical solutions for farmers.",
    researchArea: "agriculture",
    technologies: ["Python", "TensorFlow", "OpenCV", "Next.js", "CNN", "Transfer Learning"],
    publications: ["leaf-disease-cnn", "agriscan-nextjs", "paddy-disease-cnn"],
    status: "ongoing",
    featured: true
  },
  {
    id: "healthcare-ml-suite",
    title: "Healthcare ML Diagnostic Suite",
    description: "Machine learning models for early disease detection and risk assessment",
    longDescription: "Research focused on developing machine learning algorithms for healthcare applications, including cardiovascular risk prediction and tuberculosis detection. The project explores various ML techniques and their applications in medical diagnosis.",
    researchArea: "healthcare",
    technologies: ["Python", "Scikit-learn", "SVM", "K-Means", "Statistical Analysis"],
    publications: ["tuberculosis-ml", "cardiovascular-svm"],
    status: "completed",
    featured: true
  },
  {
    id: "llm-optimization",
    title: "Large Language Model Optimization",
    description: "Research on efficient LLM implementations and optimization techniques",
    longDescription: "Cutting-edge research on optimizing large language models, specifically focusing on LLaMA 2 fine-tuning techniques and comparative analysis of different programming language implementations for optimal efficiency.",
    researchArea: "llm",
    technologies: ["Python", "PyTorch", "Transformers", "Mojo", "CUDA", "Distributed Computing"],
    publications: ["llama2-optimization"],
    status: "published",
    featured: true
  },
  {
    id: "cybersecurity-ml",
    title: "Advanced Cybersecurity with ML",
    description: "Machine learning approaches for cybersecurity and malware detection",
    longDescription: "Research project developing advanced machine learning techniques for cybersecurity applications, with focus on efficient malware classification using multiprocessing and novel vectorization approaches.",
    researchArea: "cybersecurity",
    technologies: ["Python", "Machine Learning", "Multiprocessing", "NLP", "Security Analysis"],
    publications: ["malware-classification"],
    status: "published",
    featured: true
  },
  {
    id: "big-data-performance",
    title: "High-Performance Big Data Analytics",
    description: "Next-generation clustering algorithms for big data processing",
    longDescription: "Research into high-performance computing solutions for big data analytics, featuring revolutionary K-Means clustering implementations using the Mojo programming language for unprecedented performance improvements.",
    researchArea: "big-data",
    technologies: ["Mojo", "Python", "Distributed Computing", "Big Data", "Performance Optimization"],
    publications: ["kmeans-mojo"],
    status: "published",
    featured: true
  }
];
