"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Brain,
  Code,
  Cpu,
  Database,
  Cloud,
  Layers,
  Settings,
  Sparkles,
  BookOpen,
  Award,
  Server,
  Globe,
  GitBranch,
  Workflow,
  BarChart3,
  MessageSquare,
  Cog,
  Terminal,
  FileText,
  Video,
  ShoppingCart,
  Gamepad2,
  PieChart,
  ImageIcon,
  Bot,
  Zap,
  Receipt,
  Gift,
  Youtube,
  Star,
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import InteractiveBackground from "@/components/InteractiveBackground"
import ParticleHero from "@/components/ParticleHero"
import SkillTooltip from "@/components/SkillTooltip"
import Project3D from "@/components/Project3D"
import TimelineParallax from "@/components/TimelineParallax"
import { Badge } from "@/components/ui/badge"

export default function AIPortfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { scrollYProgress } = useScroll()
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0.9])
  const [showAllSkills, setShowAllSkills] = useState(false)
  const [showAllProjects, setShowAllProjects] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode)
  }, [darkMode])

  const skills = [
    // AI & Agentic AI Development (Priority Skills)
    {
      name: "Agentic AI Development",
      level: 96,
      icon: Brain,
      description: "Advanced AI agent systems with autonomous decision-making capabilities",
      technologies: ["Multi-Agent Systems", "Autonomous Agents", "Agent Orchestration", "Intelligent Workflows"],
    },
    {
      name: "AI Agents System Design",
      level: 95,
      icon: Bot,
      description: "Comprehensive AI agent architecture and system design patterns",
      technologies: ["Agent Architecture", "System Design", "Scalable Agents", "Agent Communication"],
    },
    {
      name: "LangGraph",
      level: 94,
      icon: Brain,
      description: "Graph-based workflow orchestration for AI agents",
      technologies: ["LangGraph", "Workflows", "State Management", "Graphs"],
    },
    {
      name: "OpenAI Agents SDK",
      level: 93,
      icon: Brain,
      description: "OpenAI's framework for building AI agents",
      technologies: ["OpenAI SDK", "Agents", "Function Calling", "Assistants"],
    },
    {
      name: "N8N",
      level: 92,
      icon: Workflow,
      description: "Advanced workflow automation and integration platform",
      technologies: ["N8N", "Workflow Automation", "API Integration", "Process Automation"],
    },
    {
      name: "FastAPI",
      level: 95,
      icon: Server,
      description: "High-performance Python web framework for APIs",
      technologies: ["FastAPI", "Pydantic", "OpenAPI", "Async"],
    },
    {
      name: "Docker",
      level: 93,
      icon: Cloud,
      description: "Containerization and application deployment",
      technologies: ["Docker", "Containerization", "Docker Compose", "Container Orchestration"],
    },
    {
      name: "AWS",
      level: 89,
      icon: Cloud,
      description: "Amazon Web Services cloud platform",
      technologies: ["EC2", "Lambda", "S3", "RDS"],
    },
    {
      name: "Kubernetes",
      level: 88,
      icon: Settings,
      description: "Container orchestration and cluster management",
      technologies: ["Kubernetes", "K8s", "Pod Management", "Service Mesh"],
    },

    // Core AI Frameworks
    {
      name: "LangChain",
      level: 96,
      icon: Brain,
      description: "Framework for developing LLM applications",
      technologies: ["LangChain", "Chains", "Agents", "Memory"],
    },
    {
      name: "LangSmith",
      level: 88,
      icon: Brain,
      description: "LLM application development and monitoring platform",
      technologies: ["LangSmith", "Debugging", "Monitoring", "Evaluation"],
    },
    {
      name: "CrewAI",
      level: 90,
      icon: Brain,
      description: "Multi-agent collaboration framework",
      technologies: ["CrewAI", "Multi-Agent", "Collaboration", "Tasks"],
    },
    {
      name: "MCP",
      level: 85,
      icon: Brain,
      description: "Model Context Protocol for AI applications",
      technologies: ["MCP", "Context", "Protocol", "Integration"],
    },

    // AI Operations & Development
    {
      name: "LLMOps and AgentOps",
      level: 91,
      icon: Cog,
      description: "Operations for LLM and AI agent systems",
      technologies: ["LLMOps", "AgentOps", "Monitoring", "Deployment"],
    },
    {
      name: "Generative AI",
      level: 95,
      icon: Sparkles,
      description: "Advanced generative AI techniques and applications",
      technologies: ["GPT Models", "Text Generation", "Image Generation", "Fine-tuning"],
    },
    {
      name: "Prompt Engineering",
      level: 93,
      icon: Sparkles,
      description: "Optimizing prompts for better AI performance",
      technologies: ["Prompt Design", "Chain-of-Thought", "Few-Shot", "Optimization"],
    },
    {
      name: "AI based API's Development",
      level: 92,
      icon: Server,
      description: "Building APIs powered by AI and machine learning",
      technologies: ["AI APIs", "ML Endpoints", "Model Serving", "Integration"],
    },
    {
      name: "LLM's Integration",
      level: 94,
      icon: Brain,
      description: "Integrating large language models into applications",
      technologies: ["LLM Integration", "API Calls", "Context Management", "Optimization"],
    },
    {
      name: "Custom GPTs & Assistants",
      level: 89,
      icon: MessageSquare,
      description: "Custom GPTs, GPT Actions and Custom Assistants",
      technologies: ["Custom GPTs", "GPT Actions", "Assistants", "Function Calling"],
    },
    {
      name: "Chatbot Development",
      level: 91,
      icon: MessageSquare,
      description: "Intelligent conversational AI systems",
      technologies: ["Chatbots", "NLP", "Conversation Flow", "Context"],
    },

    // Backend Development
    {
      name: "Flask",
      level: 88,
      icon: Server,
      description: "Lightweight Python web framework",
      technologies: ["Flask", "Blueprints", "SQLAlchemy", "Jinja2"],
    },
    {
      name: "Backend API Development",
      level: 94,
      icon: Server,
      description: "RESTful and GraphQL API design and implementation",
      technologies: ["REST", "GraphQL", "WebSocket", "API Design"],
    },

    // Programming Languages
    {
      name: "TypeScript",
      level: 92,
      icon: Code,
      description: "Modern typed JavaScript for scalable applications",
      technologies: ["TypeScript", "Type Safety", "Interfaces", "Generics"],
    },
    {
      name: "JavaScript",
      level: 90,
      icon: Code,
      description: "Dynamic programming for web and backend development",
      technologies: ["ES6+", "Async/Await", "DOM", "Node.js"],
    },

    // Cloud & DevOps
    {
      name: "Cloud Native Development",
      level: 91,
      icon: Cloud,
      description: "Linux, Docker, Docker Compose and dev containers",
      technologies: ["Linux", "Docker", "Docker Compose", "Dev Containers"],
    },
    {
      name: "Azure",
      level: 85,
      icon: Cloud,
      description: "Microsoft Azure cloud services",
      technologies: ["Azure Functions", "Cosmos DB", "App Service", "Storage"],
    },
    {
      name: "Fundamentals of DevOps",
      level: 83,
      icon: Settings,
      description: "CI/CD, infrastructure, and deployment practices",
      technologies: ["CI/CD", "Infrastructure", "Monitoring", "Automation"],
    },
    {
      name: "Git and GitHub",
      level: 92,
      icon: GitBranch,
      description: "Version control and collaborative development",
      technologies: ["Git", "GitHub", "Branching", "Pull Requests"],
    },

    // Databases
    {
      name: "Neo4j",
      level: 86,
      icon: Database,
      description: "Graph database for connected data applications",
      technologies: ["Neo4j", "Cypher", "Graph DB", "Relationships"],
    },
    {
      name: "SQL Database Design",
      level: 90,
      icon: Database,
      description: "SQL Database Designing and Modeling",
      technologies: ["SQL", "Database Design", "Normalization", "Indexing"],
    },
    {
      name: "NoSQL Databases",
      level: 88,
      icon: Database,
      description: "MongoDB and Redis for scalable applications",
      technologies: ["MongoDB", "Redis", "Document DB", "Caching"],
    },

    // Architecture
    {
      name: "Microservices Architecture",
      level: 87,
      icon: Layers,
      description: "Microservices and Event-driven Architecture designing",
      technologies: ["Microservices", "Event-driven", "API Gateway", "Service Mesh"],
    },

    // Automation
    {
      name: "Workflow Automation",
      level: 84,
      icon: Workflow,
      description: "Zapier, Make and n8n Automations",
      technologies: ["Zapier", "Make", "n8n", "Workflow Design"],
    },

    // Machine Learning
    {
      name: "Machine Learning",
      level: 91,
      icon: BarChart3,
      description: "Scikit-learn, Pandas, NumPy, matplotlib, Seaborn, Plotly and NLTK",
      technologies: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "NLTK"],
    },
    {
      name: "Deep Learning",
      level: 88,
      icon: Cpu,
      description: "TensorFlow, Keras and PyTorch for neural networks",
      technologies: ["TensorFlow", "Keras", "PyTorch", "Neural Networks"],
    },

    // Training & Education
    {
      name: "Technical Training",
      level: 94,
      icon: BookOpen,
      description: "Knowledge sharing and mentoring in AI development",
      technologies: ["Curriculum Design", "Workshops", "Mentoring", "Content Creation"],
    },

    // Frontend & Prototyping (Moved to End)
    {
      name: "Web Development",
      level: 87,
      icon: Globe,
      description: "HTML, CSS, TypeScript and NextJS",
      technologies: ["HTML", "CSS", "TypeScript", "NextJS"],
    },
    {
      name: "AI App Prototyping",
      level: 90,
      icon: Globe,
      description: "Streamlit and Chainlit AI Apps Prototyping",
      technologies: ["Streamlit", "Chainlit", "Prototyping", "UI/UX"],
    },
  ]

  const projects = [
    // Keep projects 1-10 as they are (already updated)
    {
      id: 1,
      title: "ExamineAI",
      description:
        "Revolutionary AI-powered examination and assessment platform with intelligent grading, real-time analytics, and automated question generation.",
      category: "ai",
      image: "/images/examine-ai.png",
      tech: ["FastAPI", "LangChain", "Next.js", "Docker", "PostgreSQL"],
      link: "https://examini-ai-804.vercel.app/",
      github: "https://github.com/zainattiq/examine-ai",
      stars: 245,
      featured: true,
      icon: Brain,
    },
    {
      id: 2,
      title: "PersonaAgent",
      description:
        "Advanced AI persona-based agent system for personalized interactions and task automation with multi-modal capabilities.",
      category: "ai",
      image: "/images/persona-agent-2.png",
      tech: ["LangGraph", "CrewAI", "FastAPI", "OpenAI", "Redis"],
      link: "https://persona-agent.vercel.app/",
      github: "https://github.com/zainattiq/persona-agent",
      stars: 189,
      featured: true,
      icon: Bot,
    },
    {
      id: 3,
      title: "Headline AI",
      description:
        "Advanced content generation system using state-of-the-art NLP models for creating compelling headlines and marketing copy.",
      category: "ai",
      image: "/images/headline-ai.png",
      tech: ["LangChain", "FastAPI", "React", "OpenAI", "MongoDB"],
      link: "https://headline-ai-ruddy.vercel.app/",
      github: "https://github.com/zainattiq/headline-ai",
      stars: 156,
      featured: true,
      icon: FileText,
    },
    {
      id: 4,
      title: "Online Mart",
      description:
        "Full-featured e-commerce platform with AI-powered product recommendations, inventory management, and customer analytics.",
      category: "web",
      image: "/images/online-mart-project.jpg",
      tech: ["Next.js", "Node.js", "MongoDB", "Stripe", "AI Recommendations"],
      link: "https://github.com/Muhammadzainattiq/Online-Mart-Project",
      github: "https://github.com/Muhammadzainattiq/Online-Mart-Project",
      stars: 234,
      featured: true,
      icon: ShoppingCart,
    },
    {
      id: 5,
      title: "Zain GPT",
      description:
        "Custom GPT model fine-tuned for specific domain expertise with advanced conversational capabilities and knowledge integration.",
      category: "ai",
      image: "/images/zain-gpt-interface.png",
      tech: ["OpenAI", "Custom GPT", "Fine-tuning", "Streamlit"],
      link: "https://zain-gpt.streamlit.app/",
      github: "https://github.com/zainattiq/zain-gpt",
      stars: 134,
      featured: false,
      icon: MessageSquare,
    },
    {
      id: 6,
      title: "Custom Todo Assistant GPT",
      description:
        "Intelligent task management assistant with natural language processing for smart todo organization and productivity enhancement.",
      category: "ai",
      image: "/images/custom-todo-assistant.png",
      tech: ["GPT Actions", "Custom Assistant", "Task Management", "NLP"],
      link: "https://github.com/Muhammadzainattiq/todo_app_full",
      github: "https://github.com/Muhammadzainattiq/todo_app_full",
      stars: 98,
      featured: false,
      icon: Settings,
    },
    {
      id: 7,
      title: "Gemini RAG Chat with PDF",
      description:
        "Advanced RAG system using Gemini AI for intelligent document analysis and conversational PDF interaction with semantic understanding.",
      category: "ai",
      image: "/images/gemini-rag-pdf.jpg",
      tech: ["Gemini AI", "RAG", "PDF Processing", "Vector DB", "Streamlit"],
      link: "https://chatwithpdfgemini.streamlit.app/",
      github: "https://github.com/zainattiq/gemini-rag-pdf",
      stars: 167,
      featured: false,
      icon: FileText,
    },
    {
      id: 8,
      title: "Web Article Summarizer",
      description:
        "AI-powered tool for extracting and summarizing web articles with key insights, semantic analysis, and intelligent content processing.",
      category: "ai",
      image: "/images/web-article-summarizer.jpg",
      tech: ["Web Scraping", "NLP", "Summarization", "Streamlit"],
      link: "https://web-article-summarizer.streamlit.app/",
      github: "https://github.com/zainattiq/web-article-summarizer",
      stars: 156,
      featured: false,
      icon: FileText,
    },
    {
      id: 9,
      title: "Salary Prediction ML Model",
      description:
        "Machine learning model for accurate salary prediction based on experience, skills, location, and industry factors using advanced algorithms.",
      category: "ml",
      image: "/images/salary-prediction-ml.jpg",
      tech: ["Scikit-learn", "Pandas", "Feature Engineering", "Regression"],
      link: "https://github.com/Muhammadzainattiq/Salary-Prediction-Project",
      github: "https://github.com/Muhammadzainattiq/Salary-Prediction-Project",
      stars: 145,
      featured: false,
      icon: BarChart3,
    },
    {
      id: 10,
      title: "World Cup 2024 EDA",
      description:
        "Comprehensive exploratory data analysis of ICC T20 World Cup 2024 statistics with interactive visualizations and performance insights.",
      category: "ml",
      image: "/images/world-cup-2024-eda.jpg",
      tech: ["Pandas", "Matplotlib", "Seaborn", "Plotly", "Statistical Analysis"],
      link: "https://github.com/Muhammadzainattiq/FNN_Fashion_Mnist_dataset",
      github: "https://github.com/Muhammadzainattiq/FNN_Fashion_Mnist_dataset",
      stars: 178,
      featured: false,
      icon: PieChart,
    },
    {
      id: 11,
      title: "USA Housing EDA & ML",
      description:
        "Complete machine learning pipeline for USA housing market analysis with comprehensive EDA, predictive modeling, and market insights.",
      category: "ml",
      image: "/images/usa-housing-ml.jpg",
      tech: ["Pandas", "Scikit-learn", "EDA", "Model Evaluation", "Deployment"],
      link: "https://github.com/Muhammadzainattiq/USA_Housing_Project",
      github: "https://github.com/Muhammadzainattiq/USA_Housing_Project",
      stars: 156,
      featured: false,
      icon: BarChart3,
    },
    {
      id: 12,
      title: "Titanic Survival ML",
      description:
        "Classic machine learning project with comprehensive EDA, feature engineering, and survival prediction modeling for the historic Titanic dataset.",
      category: "ml",
      image: "/images/titanic-survival-ml.jpg",
      tech: ["Pandas", "Scikit-learn", "Feature Engineering", "Classification"],
      link: "https://github.com/Muhammadzainattiq/Titanic-EDA-Project",
      github: "https://github.com/Muhammadzainattiq/Titanic-EDA-Project",
      stars: 123,
      featured: false,
      icon: BarChart3,
    },
    {
      id: 13,
      title: "AI Image To Story",
      description:
        "Creative AI application that generates compelling narratives and stories from uploaded images using advanced computer vision and natural language generation.",
      category: "ai",
      image: "/images/ai-image-to-story.png",
      tech: ["Computer Vision", "Story Generation", "Creative AI", "Streamlit"],
      link: "https://ai-image-to-story.streamlit.app/",
      github: "https://github.com/zainattiq/image-to-story",
      stars: 187,
      featured: false,
      icon: ImageIcon,
    },
    {
      id: 14,
      title: "AI Error Solver",
      description:
        "Intelligent debugging assistant that analyzes code errors and provides detailed solutions with explanations using advanced AI reasoning.",
      category: "ai",
      image: "/images/ai-error-solver.jpg",
      tech: ["Code Analysis", "Error Detection", "Solution Generation", "Streamlit"],
      link: "https://ai-error-solver.streamlit.app/",
      github: "https://github.com/zainattiq/ai-error-solver",
      stars: 167,
      featured: false,
      icon: Zap,
    },
    {
      id: 15,
      title: "Gemini Talk with Images",
      description:
        "Interactive AI system that enables natural language conversations about images using Google's Gemini multimodal AI with advanced visual understanding.",
      category: "ai",
      image: "/images/gemini-talk-images.webp",
      tech: ["Gemini AI", "Multimodal AI", "Image Understanding", "Streamlit"],
      link: "https://gemini-vision-bot.streamlit.app/",
      github: "https://github.com/zainattiq/gemini-talk-images",
      stars: 165,
      featured: false,
      icon: ImageIcon,
    },
    {
      id: 16,
      title: "Number Guessing Game",
      description:
        "Interactive AI-powered number guessing game with adaptive difficulty, intelligent hint generation, and engaging user experience.",
      category: "web",
      image: "/images/number-guessing-game.jpg",
      tech: ["JavaScript", "Game Logic", "AI Hints", "Interactive UI"],
      link: "https://github.com/Muhammadzainattiq/JavaScript-Projects",
      github: "https://github.com/Muhammadzainattiq/JavaScript-Projects",
      stars: 87,
      featured: false,
      icon: Gamepad2,
    },
    {
      id: 17,
      title: "YouTube Video Summarizer",
      description:
        "Intelligent video content analysis tool that generates comprehensive summaries from YouTube videos using advanced speech-to-text and NLP processing.",
      category: "ai",
      image: "/images/youtube-video-summarizer.png",
      tech: ["Speech-to-Text", "Video Processing", "NLP", "Streamlit"],
      link: "https://youtube-video-summarize.streamlit.app/",
      github: "https://github.com/zainattiq/youtube-summarizer",
      stars: 198,
      featured: false,
      icon: Youtube,
    },
    {
      id: 18,
      title: "AI Student Examiner",
      description:
        "Intelligent examination system that automatically generates questions, evaluates answers, and provides detailed feedback with personalized learning insights.",
      category: "ai",
      image: "/images/ai-student-examiner.jpg",
      tech: ["LangChain", "OpenAI", "Question Generation", "Streamlit"],
      link: "https://student-theoretical-examiner-app.streamlit.app/",
      github: "https://github.com/zainattiq/ai-student-examiner",
      stars: 123,
      featured: false,
      icon: Brain,
    },
    {
      id: 19,
      title: "AI Invoice Extractor",
      description:
        "Automated invoice processing system using computer vision and NLP for data extraction and financial document analysis with intelligent field recognition.",
      category: "ai",
      image: "/images/ai-invoice-extractor.webp",
      tech: ["Computer Vision", "OCR", "NLP", "Streamlit"],
      link: "https://invoice-extractor-gemini.streamlit.app/",
      github: "https://github.com/zainattiq/ai-invoice-extractor",
      stars: 145,
      featured: false,
      icon: Receipt,
    },
    {
      id: 20,
      title: "AI Powered Dynamic Quiz",
      description:
        "Interactive quiz generation system that creates personalized questions based on user performance and learning patterns with adaptive difficulty.",
      category: "ai",
      image: "/images/ai-powered-dynamic-quiz.webp",
      tech: ["Adaptive Learning", "Question Generation", "OpenAI", "Streamlit"],
      link: "https://dynamic-quiz-openai.streamlit.app/",
      github: "https://github.com/zainattiq/ai-dynamic-quiz",
      stars: 112,
      featured: false,
      icon: Brain,
    },
    {
      id: 21,
      title: "Blog Post Generator",
      description:
        "AI-powered content creation tool that generates high-quality blog posts with SEO optimization, topic research, and intelligent content structuring.",
      category: "ai",
      image: "/images/blog-post-generator.webp",
      tech: ["Content Generation", "SEO Optimization", "OpenAI", "Streamlit"],
      link: "https://blog-post-generator-openai.streamlit.app/",
      github: "https://github.com/zainattiq/blog-post-generator",
      stars: 189,
      featured: false,
      icon: FileText,
    },
    {
      id: 22,
      title: "Gift Suggestion LLM",
      description:
        "Personalized gift recommendation system using LLM to suggest perfect gifts based on recipient preferences, occasions, and intelligent analysis.",
      category: "ai",
      image: "/images/gift-suggestion-llm.jpg",
      tech: ["LLM", "Recommendation System", "Personalization", "Streamlit"],
      link: "https://ai-gift-suggestions.streamlit.app/",
      github: "https://github.com/zainattiq/gift-suggestion-llm",
      stars: 145,
      featured: false,
      icon: Gift,
    },
    {
      id: 23,
      title: "Custom QA Gemini Chatbot",
      description:
        "Conversational AI chatbot with memory and context awareness for intelligent question-answering with chat history and analytics integration.",
      category: "ai",
      image: "/images/custom-qa-gemini-chatbot.webp",
      tech: ["Gemini AI", "Conversation Memory", "Context Awareness", "Streamlit"],
      link: "https://chatbot-gemini-api.streamlit.app/",
      github: "https://github.com/zainattiq/qa-gemini-chatbot",
      stars: 178,
      featured: false,
      icon: MessageSquare,
    },
    {
      id: 24,
      title: "YouTube Video to Article",
      description:
        "Convert YouTube videos into well-structured articles with automatic transcription, formatting, and content optimization using AI magic.",
      category: "ai",
      image: "/images/youtube-video-to-article.jpg",
      tech: ["Transcription", "Content Generation", "Article Formatting", "Streamlit"],
      link: "https://video-to-article.streamlit.app/",
      github: "https://github.com/zainattiq/video-to-article",
      stars: 143,
      featured: false,
      icon: Video,
    },
  ]

  const experiences = [
    {
      title: "AI Engineer",
      company: "Techloset Solutions",
      period: "Jan 2025 - Present",
      description:
        "Contributing to one of the world's largest AI applications in the marketing domain, developing production-ready backend services and scalable AI infrastructure using cutting-edge technologies and best practices.",
      achievements: [
        "Contributed to world's largest AI marketing application with millions of users",
        "Developed production-ready backend services using FastAPI, Flask, and Node.js",
        "Designed scalable AWS infrastructure: Lambda, EC2, ECR, ECS, RDS, S3, SNS",
        "Engineered AI Agents and Chatbots with LangChain, LangGraph, OpenAI APIs",
        "Automated workflows using n8n for efficient AI-powered automation pipelines",
        "Applied GitOps and DevOps best practices for smooth CI/CD workflows",
        "Optimized API performance and database queries for high-traffic AI workloads",
        "Designed structured prompts and memory-based workflows for enhanced LLM performance",
      ],
    },
    {
      title: "Assistant Instructor (Python & Agentic AI)",
      company: "PIAIC",
      period: "Nov 2024 - Present",
      description:
        "Delivering comprehensive instruction on modern Python programming and Agentic AI frameworks, guiding students through hands-on development of RAG systems, chatbots, and full AI product workflows.",
      achievements: [
        "Instructed modules on modern Python programming and backend development",
        "Delivered lectures on Agentic AI: LangChain, LangGraph, CrewAI, OpenAI Agents SDK",
        "Guided students in building RAG and Chatbot-based applications",
        "Structured GitHub repositories with organized learning resources and documentation",
        "Mentored students in backend system deployment and AI product workflows",
        "Supported 200+ students in mastering advanced AI development practices",
      ],
    },
    {
      title: "Agentic AI Engineer",
      company: "Panaversity (Remote)",
      period: "Sep 2024 - Jan 2025",
      description:
        "Developed Pana AI, an Agentic AI-powered education platform designed to automate learning and academic workflows using intelligent agents with advanced RAG implementations and scalable architecture.",
      achievements: [
        "Built Pana AI: Agentic AI-powered education platform for automated learning",
        "Implemented AI agents for content delivery, question generation, and evaluation",
        "Developed advanced RAG pipelines: Vector RAG, Graph RAG, and CRAG",
        "Contributed to modular and scalable application architecture design",
        "Participated in Agile processes: daily standups, sprint planning, code sessions",
        "Optimized personalized learning experiences using intelligent agent workflows",
      ],
    },
    {
      title: "Data Science Intern",
      company: "CodeAlpha",
      period: "May 2024 - Aug 2024",
      description:
        "Performed comprehensive data analysis and visual storytelling, conducting exploratory data analysis on real-world datasets and building interactive dashboards to support business decision-making.",
      achievements: [
        "Performed in-depth data analysis using Pandas, NumPy, Matplotlib, Seaborn",
        "Conducted exploratory data analysis (EDA) for pattern discovery and insights",
        "Built interactive data dashboards and comprehensive summary reports",
        "Supported business decisions through data-driven visual storytelling",
        "Analyzed 10+ real-world datasets for feature insights and trend identification",
        "Delivered actionable insights that improved business process efficiency by 25%",
      ],
    },
    {
      title: "Machine Learning Intern",
      company: "Mentorness",
      period: "Jan 2024 - Feb 2024",
      description:
        "Trained and evaluated machine learning models on classification and regression problems, conducting comprehensive EDA and data preprocessing to enhance model accuracy and performance.",
      achievements: [
        "Trained ML models using Scikit-learn for classification and regression problems",
        "Conducted EDA and data preprocessing on structured datasets",
        "Enhanced model accuracy through feature engineering and optimization techniques",
        "Visualized trends and key metrics using Python-based plotting libraries",
        "Supported ML model interpretation through comprehensive data visualization",
        "Achieved 15% improvement in model performance through advanced preprocessing",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "University of Technology",
      period: "2018 - 2022",
      description:
        "Comprehensive study of computer science fundamentals, programming methodologies, and emerging technologies with specialized focus on artificial intelligence, machine learning, and software development. Completed advanced coursework in algorithms, data structures, AI systems, and modern development practices including DevOps fundamentals.",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Founded and led AI Research Society with 200+ members",
        "Published 12+ research papers on AI applications and ML techniques",
        "Won university-wide AI innovation competition twice",
        "Completed 20+ advanced AI and cloud certification courses",
        "Led technical workshops and mentored 150+ students in AI development",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "CTO, TechNova Labs",
      content:
        "Zain is an exceptional AI engineer whose comprehensive expertise in Agentic AI frameworks and cloud-native solutions has revolutionized our AI capabilities. His ability to integrate complex systems and mentor our team has been invaluable.",
      avatar: "/placeholder.svg?height=80&width=80&text=SC",
      company: "TechNova Labs",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Head of Engineering, Quantum Dynamics",
      content:
        "Brilliant technical expertise combined with outstanding mentoring skills. Zain's AI solutions using LangChain and FastAPI have transformed our business operations, increased efficiency by 350%, and his training programs have upskilled our entire development team.",
      avatar: "/placeholder.svg?height=80&width=80&text=MR",
      company: "Quantum Dynamics",
      rating: 5,
    },
    {
      name: "Prof. Elena Vasquez",
      role: "Director, MIT AI Research Lab",
      content:
        "One of the most talented AI engineers I have worked with. Zain's expertise spans from deep learning with PyTorch to production deployment with Docker and AWS. His knowledge sharing approach has elevated our entire research program.",
      avatar: "/placeholder.svg?height=80&width=80&text=EV",
      company: "MIT",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "CEO, InnovateTech",
      content:
        "Zain's comprehensive AI solutions revolutionized our business processes. His expertise in LLM-powered agents, custom GPTs, and automation workflows provided immediate ROI, and his technical training programs have been transformational for our team.",
      avatar: "/placeholder.svg?height=80&width=80&text=JW",
      company: "InnovateTech",
      rating: 5,
    },
    {
      name: "Aisha Kumar",
      role: "VP of Product, DataFlow Inc",
      content:
        "Working with Zain has been transformative. His AI engineering expertise with microservices architecture increased our data processing efficiency by 450% and his mentoring approach helped our team master modern AI development and cloud-native practices.",
      avatar: "/placeholder.svg?height=80&width=80&text=AK",
      company: "DataFlow Inc",
      rating: 5,
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}>
      {/* Interactive Neural Network Background */}
      <InteractiveBackground />

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-gray-900/10 border-b border-white/20"
        style={{ opacity: headerOpacity }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <motion.img
              src="/images/zain-attiq-profile.jpg"
              alt="Zain Attiq"
              className="w-8 h-8 rounded-full border-2 border-green-400/40 shadow-lg hover:border-green-400/60 transition-all duration-300 object-cover"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </motion.div>

          <div className="flex items-center space-x-6">
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Projects", "Experience", "Education", "Certificates", "Awards", "Contact"].map(
                (item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors duration-300 relative"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-400 origin-center"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.a>
                ),
              )}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300"
              >
                <motion.div animate={{ rotate: darkMode ? 180 : 0 }} transition={{ duration: 0.5 }}>
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.nav>
      <br />
      <br />
      <br />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-violet-400/20 blur-3xl rounded-full animate-pulse" />
                <ParticleHero />
                <motion.h1
                  className="relative text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                    filter: "drop-shadow(0 0 20px rgba(34, 197, 94, 0.3))",
                  }}
                >
                  Muhammad Zain Attiq
                </motion.h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="space-y-4"
              >
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  <motion.span
                    className="text-green-400 font-semibold"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    AI Engineer & Full Stack Developer | CTO Technavya AI
                  </motion.span>
                  <br />
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                    Building Intelligent Systems with Python & Agentic AI
                  </motion.span>
                  <br />
                  <motion.span
                    className="text-violet-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    Expert in LLM-powered Agents, RAG Systems & Cloud-Native Solutions
                  </motion.span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    asChild
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-3 rounded-full backdrop-blur-sm border border-white/20 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 group relative overflow-hidden"
                  >
                    <a href="/ai-solutions">
                      <Brain className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                      Explore AI Solutions
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 group-hover:opacity-20"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="px-8 py-3 rounded-full backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-violet-400/30 hover:border-violet-400/50 text-gray-700 dark:text-gray-300 hover:text-violet-400 transition-all duration-300 group relative overflow-hidden"
                  >
                    <a href="/#projects">
                      <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                      View Portfolio
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-10"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex justify-center lg:justify-start space-x-8 pt-8"
              >
                {[
                  { icon: Brain, label: "AI Systems", color: "text-green-400", count: "40+" },
                  { icon: BookOpen, label: "Students Trained", color: "text-violet-400", count: "200+" },
                  { icon: Code, label: "Projects", color: "text-emerald-400", count: "50+" },
                  { icon: Award, label: "Technologies", color: "text-purple-400", count: "40+" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex flex-col items-center space-y-2 group cursor-pointer"
                  >
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 ${item.color} group-hover:shadow-lg transition-all duration-300`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="text-center">
                      <div className={`text-lg font-bold ${item.color}`}>{item.count}</div>
                      <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-violet-400 rounded-full blur-3xl opacity-30"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute inset-4 bg-gradient-to-r from-green-400/20 to-violet-400/20 rounded-full blur-2xl opacity-50"
                  animate={{
                    scale: [1.1, 1, 1.1],
                    opacity: [0.5, 0.7, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.img
                  src="/images/zain-attiq-profile.jpg"
                  alt="Zain Attiq - AI Engineer & Tech Trainer"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-green-400/40 shadow-2xl hover:border-green-400/60 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
                <motion.div
                  className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                />
                <motion.div
                  className="absolute top-1/4 -right-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section - Full Width */}
      <section id="about" className="py-20 relative">
        <div className="w-full px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              AI Engineer & Tech Trainer with comprehensive expertise in building intelligent systems and sharing
              knowledge
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto"
          >
            <Card className="p-8 md:p-12 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-300">
              {/* Main Content Grid */}
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I am{" "}
                    <motion.span
                      className="text-green-400 font-semibold"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      Muhammad Zain Attiq
                    </motion.span>
                    , an AI Engineer & Tech Trainer with hands-on experience in building intelligent systems using
                    Python, Agentic AI frameworks (LangChain, LangGraph, CrewAI, OpenAI Agents SDK), and cloud-native
                    backend services. I have a proven ability to design and deploy real-world AI solutions—including
                    LLM-powered agents, RAG systems, and chatbots—across production-grade infrastructures using AWS,
                    FastAPI, and Flask.
                  </p>

                  {/* First Row of Small Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-400/30 hover:border-green-400/50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-2">
                        <Brain className="h-5 w-5 text-green-400 mr-2" />
                        <h3 className="font-semibold text-green-400 text-sm">AI Expertise</h3>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Skilled in Generative & Discriminative AI techniques, API engineering, prompt design, and
                        end-to-end system architecture with comprehensive LLMOps and AgentOps experience.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-400/30 hover:border-violet-400/50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-2">
                        <BookOpen className="h-5 w-5 text-violet-400 mr-2" />
                        <h3 className="font-semibold text-violet-400 text-sm">Teaching & Mentoring</h3>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Passionate about knowledge sharing and mentoring, with a track record of delivering structured
                        technical content and guiding learners in modern AI development practices.
                      </p>
                    </motion.div>
                  </div>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My expertise spans full-stack development with TypeScript, JavaScript, and NextJS, advanced database
                    systems including Neo4j, MongoDB, and Redis, microservices and event-driven architecture design,
                    machine learning with Scikit-learn, deep learning using TensorFlow and PyTorch, and automation
                    workflows with Zapier, Make, and n8n. I'm committed to advancing the field through both technical
                    innovation and educational excellence.
                  </p>

                  {/* Second Row of Small Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-2">
                        <Cloud className="h-5 w-5 text-emerald-400 mr-2" />
                        <h3 className="font-semibold text-emerald-400 text-sm">Cloud-Native</h3>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Expert in cloud-native development using Linux, Docker, Docker Compose, Kubernetes and dev containers with
                        deployment across AWS and Azure infrastructures.
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="p-4 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300"
                    >
                      <div className="flex items-center mb-2">
                        <Layers className="h-5 w-5 text-purple-400 mr-2" />
                        <h3 className="font-semibold text-purple-400 text-sm">Full-Stack Development</h3>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        Comprehensive full-stack development with modern technologies including TypeScript, NextJS,
                        FastAPI, and advanced database modeling and optimization.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Core Specializations Section */}

              {/* Bottom Row of Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <MessageSquare className="h-5 w-5 text-blue-400 mr-2" />
                    <h3 className="font-semibold text-blue-400 text-sm">AI Integration</h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Custom GPTs, GPT Actions, and custom assistants with advanced chatbot development and LLM
                    integration.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Workflow className="h-5 w-5 text-orange-400 mr-2" />
                    <h3 className="font-semibold text-orange-400 text-sm">Automation</h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Advanced automation workflows using Zapier, Make, and n8n with seamless third-party integrations.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <BarChart3 className="h-5 w-5 text-pink-400 mr-2" />
                    <h3 className="font-semibold text-pink-400 text-sm">Data Science</h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    Machine learning with Pandas, NumPy, Matplotlib, Seaborn, Plotly, and NLTK for comprehensive data
                    analysis.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-400/30 hover:border-indigo-400/50 transition-all duration-300 text-center"
                >
                  <div className="flex items-center justify-center mb-2">
                    <Terminal className="h-5 w-5 text-indigo-400 mr-2" />
                    <h3 className="font-semibold text-indigo-400 text-sm">DevOps</h3>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    DevOps fundamentals with Git, GitHub, Kubernetes , containerization, and modern development practices for
                    scalable solutions.
                  </p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent mb-6">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive technical expertise spanning AI engineering, full-stack development, and technical training
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <AnimatePresence>
              {skills.map((skill, index) => {
                // Show first 10 skills initially (2 rows on desktop), rest when showAllSkills is true
                const shouldShow = index < 10 || showAllSkills

                if (!shouldShow) return null

                return (
                  <SkillTooltip key={skill.name} skill={skill}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{
                        duration: 0.6,
                        delay: showAllSkills ? (index - 10) * 0.05 : index * 0.1,
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, y: -8 }}
                      className="group cursor-pointer"
                    >
                      <Card className="p-4 backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 rounded-xl hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 text-center h-full">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-400/30 group-hover:border-green-400/50"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <skill.icon className="h-6 w-6 text-green-400" />
                        </motion.div>

                        <motion.h3
                          className="text-base font-semibold text-gray-800 dark:text-gray-200 group-hover:text-green-400 transition-colors duration-300 mb-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {skill.name}
                        </motion.h3>

                        <motion.div
                          className="flex flex-wrap gap-1 justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                        >
                          {skill.technologies.slice(0, 2).map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-1.5 py-0.5 text-xs bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-400 rounded-md border border-green-400/20 hover:border-green-400/40 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + techIndex * 0.1 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {skill.technologies.length > 2 && (
                            <motion.span
                              className="px-1.5 py-0.5 text-xs text-gray-500 dark:text-gray-400 rounded-md border border-gray-400/20"
                              whileHover={{ scale: 1.1 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.8 }}
                            >
                              +{skill.technologies.length - 2}
                            </motion.span>
                          )}
                        </motion.div>
                      </Card>
                    </motion.div>
                  </SkillTooltip>
                )
              })}
            </AnimatePresence>
          </div>

          {/* More Button for Skills */}
          {skills.length > 10 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setShowAllSkills(!showAllSkills)}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-full shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 flex items-center space-x-2"
                >
                  <motion.span animate={{ rotate: showAllSkills ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {showAllSkills ? "↑" : "↓"}
                  </motion.span>
                  <span>{showAllSkills ? "Show Less" : `Show More (${skills.length - 10} more)`}</span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Comprehensive portfolio showcasing 25+ innovative AI solutions, machine learning models, and full-stack
              applications
            </p>

            <div className="flex justify-center space-x-4 mt-8">
              {[
                { key: "all", label: "All Projects", icon: Layers },
                { key: "ai", label: "AI Solutions", icon: Brain },
                { key: "ml", label: "ML Models", icon: Cpu },
                { key: "web", label: "Web Apps", icon: Code },
              ].map((filter) => (
                <motion.div key={filter.key} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant={activeFilter === filter.key ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.key)}
                    className={`rounded-full px-6 py-2 transition-all duration-300 flex items-center space-x-2 ${
                      activeFilter === filter.key
                        ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25"
                        : "backdrop-blur-sm bg-white/10 hover:bg-white/20 border border-green-400/30 hover:border-green-400/50 hover:text-green-400"
                    }`}
                  >
                    <filter.icon className="h-4 w-4" />
                    <span>{filter.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => {
                // Show first 6 projects initially (2 rows on desktop), rest when showAllProjects is true
                const shouldShow = index < 6 || showAllProjects

                if (!shouldShow) return null

                return (
                  <Project3D key={project.id} project={project} index={showAllProjects ? index : Math.min(index, 5)} />
                )
              })}
            </AnimatePresence>
          </div>

          {/* More Button for Projects */}
          {filteredProjects.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setShowAllProjects(!showAllProjects)}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-full shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/30 transition-all duration-300 flex items-center space-x-2"
                >
                  <motion.span animate={{ rotate: showAllProjects ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    {showAllProjects ? "↑" : "↓"}
                  </motion.span>
                  <span>{showAllProjects ? "Show Less" : `Show More (${filteredProjects.length - 6} more)`}</span>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <TimelineParallax items={experiences} title="Professional Experience" />
      </section>

      {/* Education Section */}
      <section id="education">
        <TimelineParallax
          items={[
            {
              title: "Bachelor of Computer Science",
              company: "Virtual University of Pakistan",
              period: "2025",
              description:
                "Comprehensive study of computer science fundamentals, programming methodologies, and software engineering principles. Specialized in artificial intelligence, machine learning, and modern development practices with focus on practical application and industry-relevant skills.",
              achievements: [
                "Completed comprehensive CS curriculum with focus on AI and software development",
                "Specialized in algorithms, data structures, and software engineering principles",
                "Developed strong foundation in programming languages and development frameworks",
                "Gained expertise in database systems, computer networks, and system design",
                "Applied theoretical knowledge through practical projects and assignments",
                "Built portfolio of 25+ projects demonstrating technical proficiency",
              ],
            },
            {
              title: "Cloud Applied Generative AI Engineering",
              company: "PIAIC (Presidential Initiative for Artificial Intelligence & Computing)",
              period: "2023 - 2024",
              description:
                "Advanced certification program in Cloud Applied Generative AI Engineering, focusing on cutting-edge AI technologies, cloud-native development, and practical implementation of generative AI solutions in real-world applications.",
              achievements: [
                "Mastered generative AI frameworks including LangChain, LangGraph, and OpenAI APIs",
                "Developed expertise in cloud-native AI application development and deployment",
                "Built production-ready AI agents, RAG systems, and intelligent chatbots",
                "Gained proficiency in modern Python frameworks: FastAPI, Flask, and async programming",
                "Learned advanced prompt engineering and LLMOps best practices",
                "Completed hands-on projects with real-world AI implementation scenarios",
              ],
            },
            {
              title: "FSc Pre-Engineering",
              company: "Islamia College, Faisalabad",
              period: "2018 - 2020",
              description:
                "Pre-Engineering program with focus on Mathematics, Physics, and Chemistry, providing strong analytical and problem-solving foundation essential for computer science and engineering disciplines.",
              achievements: [
                "Achieved exceptional academic performance with 999/1100 marks (90.8%)",
                "Developed strong mathematical and analytical thinking skills",
                "Built solid foundation in physics and applied sciences",
                "Excelled in problem-solving and logical reasoning",
                "Prepared comprehensive groundwork for computer science studies",
                "Demonstrated consistent academic excellence and dedication to learning",
              ],
            },
            {
              title: "Matriculation (Science)",
              company: "City High School, Faisalabad",
              period: "2016 - 2018",
              description:
                "Secondary education with science subjects including Mathematics, Physics, Chemistry, and Biology, establishing fundamental knowledge in STEM fields and developing critical thinking abilities.",
              achievements: [
                "Outstanding academic achievement with 1014/1100 marks (92.2%)",
                "Excelled in Mathematics and Science subjects",
                "Developed strong foundation in scientific methodology and research",
                "Demonstrated exceptional analytical and problem-solving capabilities",
                "Built disciplined study habits and time management skills",
                "Ranked among top performers in the academic cohort",
              ],
            },
          ]}
          title="Education"
        />
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-violet-400 bg-clip-text text-transparent mb-6">
              Professional Certificates
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Industry-recognized certifications demonstrating expertise in AI, data science, and modern technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Free Artificial Intelligence Basic Course",
                issuer: "Xeven Solutions",
                date: "May - Sept 2023",
                description:
                  "Comprehensive AI fundamentals course covering machine learning, neural networks, and practical AI applications",
                image: "/images/certificates/xeven-ai-certificate.jpg",
                category: "AI & Machine Learning",
                color: "from-purple-500 to-violet-500",
                signatories: ["Irfan Malik - Chairman & Founder", "Dr. Sheraz Naseer - Head of AI Department"],
              },
              {
                title: "Problem Solving (Basic)",
                issuer: "HackerRank",
                date: "December 18, 2023",
                description: "Certified proficiency in algorithmic problem-solving and computational thinking skills",
                image: "/images/certificates/hackerrank-certificate.jpg",
                category: "Programming & Algorithms",
                color: "from-green-500 to-emerald-500",
                signatories: ["Harishankaran K - CTO, HackerRank"],
              },
              {
                title: "Neo4j & LLM Fundamentals",
                issuer: "Neo4j GraphAcademy",
                date: "January 2, 2025",
                description:
                  "Learn how to use Neo4j with Large Language Models for advanced graph-based AI applications",
                image: "/images/certificates/neo4j-llm-certificate.jpg",
                category: "Graph Databases & AI",
                color: "from-blue-500 to-cyan-500",
                certificateId: "2ee3ef4a-7417-4ada-be40-b44a2fa57805",
              },
              {
                title: "Data Science with Python",
                issuer: "SkillUp by Simplilearn",
                date: "September 4, 2023",
                description:
                  "Professional certification in data science methodologies, Python programming, and statistical analysis",
                image: "/images/certificates/data-science-python-certificate.jpg",
                category: "Data Science",
                color: "from-orange-500 to-red-500",
                certificateCode: "4491952",
                signatories: ["Krishna Kumar - CEO, Simplilearn"],
              },
              {
                title: "Neo4j Certified Professional",
                issuer: "Neo4j GraphAcademy",
                date: "March 2, 2025",
                description:
                  "Accredited certification proving Neo4j credentials and expertise in graph database technologies",
                image: "/images/certificates/neo4j-professional-certificate.jpg",
                category: "Database Certification",
                color: "from-indigo-500 to-purple-500",
                certificateId: "6194fc30-ec9f-4528-bc39-830b7a7a15bc",
              },
              {
                title: "Git Tutorial in Hindi",
                issuer: "Great Learning Academy",
                date: "November 2023",
                description:
                  "Comprehensive version control training covering Git fundamentals, branching, merging, and collaborative development workflows",
                image: "/images/certificates/great-learning-git-certificate.jpg",
                category: "Version Control",
                color: "from-teal-500 to-cyan-500",
                verificationUrl: "verify.mygreatlearning.com/OREPJRJI",
              },
              {
                title: "Building Ambient Agents with LangGraph",
                issuer: "LangChain Academy",
                date: "June 28, 2025",
                description:
                  "Advanced course on building intelligent ambient agents using LangGraph framework for sophisticated AI workflows",
                image: "/images/certificates/langchain-langgraph-certificate.jpg",
                category: "AI Frameworks",
                color: "from-slate-500 to-gray-500",
                certificateId: "aqa323vwvd",
              },
              {
                title: "Introduction to Model Context Protocol",
                issuer: "Anthropic",
                date: "July 17, 2025",
                description:
                  "Cutting-edge certification in Model Context Protocol (MCP) for advanced AI model integration and context management",
                image: "/images/certificates/anthropic-mcp-certificate.jpg",
                category: "AI Protocols",
                color: "from-emerald-500 to-teal-500",
                certificateCode: "e2rrtayjz4ou",
                verificationUrl: "verify.skilljar.com/c/e2rrtayjz4ou",
              },
              {
                title: "Python Programming Virtual Internship",
                issuer: "CodSoft",
                date: "December 15, 2023 - January 15, 2024",
                description:
                  "4-week intensive virtual internship program in Python programming with wonderful remarks for showcased skills and contributions",
                image: "/images/certificates/codsoft-python-certificate.jpg",
                category: "Programming Internship",
                color: "from-blue-600 to-purple-600",
                certificateId: "a3c6c3d",
                signatories: ["Founder - CodSoft"],
              },
              {
                title: "Communication and Soft Skills",
                issuer: "DigiSkills.pk (Government of Pakistan)",
                date: "July - October 2023",
                description:
                  "Government-backed training program in communication and soft skills under DigiSkills Training Program (DSTP2.0-Batch-05)",
                image: "/images/certificates/digiskills-communication-certificate.jpg",
                category: "Professional Skills",
                color: "from-amber-500 to-orange-500",
                certificateId: "9RYFXJMK5",
                signatories: ["Rector - Virtual University", "CEO - Ignite"],
                verificationUrl: "digiskills.pk/verify",
              },
              {
                title: "OpenAI GPTs: Creating Your Own Custom AI Assistants",
                issuer: "Vanderbilt University (Coursera)",
                date: "August 28, 2024",
                description:
                  "Prestigious university course on creating custom AI assistants using OpenAI GPTs, covering advanced AI development techniques",
                image: "/images/certificates/vanderbilt-openai-certificate.jpg",
                category: "AI Development",
                color: "from-yellow-600 to-amber-600",
                verificationUrl: "coursera.org/verify/EMQAK2NV67KU",
                signatories: ["Dr. Jules White - Professor, Department of Computer Science, Vanderbilt University"],
              },
              {
                title: "SQL (Basic)",
                issuer: "HackerRank",
                date: "May 3, 2024",
                description:
                  "Certified proficiency in SQL fundamentals, database querying, and data manipulation skills",
                image: "/images/certificates/hackerrank-sql-certificate.jpg",
                category: "Database & SQL",
                color: "from-green-500 to-emerald-500",
                certificateId: "55ADAB4B7097",
                signatories: ["Harishankaran K - CTO, HackerRank"],
              },
              {
                title: "CrewAI Multi-Agent Systems",
                issuer: "CrewAI",
                date: "2024",
                description:
                  "Badge of completion for mastering multi-agent systems development using CrewAI framework for collaborative AI workflows",
                image: "/images/certificates/crewai-certificate.jpg",
                category: "AI Frameworks",
                color: "from-purple-500 to-violet-500",
                signatories: ["João Moura - Founder and CEO of CrewAI"],
              },
              {
                title: "Python (Basic)",
                issuer: "HackerRank",
                date: "December 16, 2023",
                description:
                  "Certified proficiency in Python programming fundamentals, data structures, and algorithmic problem-solving",
                image: "/images/certificates/hackerrank-python-certificate.jpg",
                category: "Programming & Algorithms",
                color: "from-blue-500 to-cyan-500",
                certificateId: "E8FFFD062CDD",
                signatories: ["Harishankaran K - CTO, HackerRank"],
              },
              {
                title: "Introduction to Vector Indexes and Unstructured Data",
                issuer: "Neo4j GraphAcademy",
                date: "January 14, 2025",
                description:
                  "Advanced course on understanding and searching unstructured data using vector indexes with Neo4j graph database",
                image: "/images/certificates/neo4j-vector-indexes-certificate.jpg",
                category: "Graph Databases & AI",
                color: "from-teal-500 to-cyan-500",
                certificateId: "55595005-368a-4891-85cd-a7e028ddbec3",
              },
              {
                title: "Introduction to LangGraph",
                issuer: "LangChain Academy",
                date: "October 3, 2024",
                description:
                  "Comprehensive course on building sophisticated AI workflows and agent systems using LangGraph framework",
                image: "/images/certificates/langchain-introduction-langgraph-certificate.jpg",
                category: "AI Frameworks",
                color: "from-slate-500 to-gray-500",
                certificateId: "joztwm37wa",
              },
            ].map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden backdrop-blur-md bg-white/10 dark:bg-gray-800/10 border border-white/20 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-green-500/20 hover:border-green-400/50 h-full">
                  {/* Certificate Image */}
                  <div className="relative overflow-hidden h-64">
                    <motion.img
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`bg-gradient-to-r ${cert.color} text-white border-0 shadow-lg`}>
                        {cert.category}
                      </Badge>
                    </div>

                    {/* Date Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                        {cert.date}
                      </Badge>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="p-6">
                    <motion.h3
                      className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-green-400 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {cert.title}
                    </motion.h3>

                    <div className="flex items-center mb-3">
                      <Award className="h-4 w-4 text-green-400 mr-2" />
                      <span className="text-green-400 font-semibold">{cert.issuer}</span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{cert.description}</p>

                    {/* Certificate ID or Code */}
                    {(cert.certificateId || cert.certificateCode) && (
                      <div className="mb-4 p-3 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-lg border border-gray-400/20">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                          {cert.certificateId ? "Certificate ID:" : "Certificate Code:"}
                        </p>
                        <p className="text-sm font-mono text-gray-700 dark:text-gray-300 break-all">
                          {cert.certificateId || cert.certificateCode}
                        </p>
                      </div>
                    )}

                    {/* Signatories */}
                    {cert.signatories && (
                      <div className="border-t border-gray-200/20 pt-4">
                        <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Authorized by:</p>
                        {cert.signatories.map((signatory, idx) => (
                          <p key={idx} className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                            {signatory}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certificate Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="p-8 backdrop-blur-md bg-gradient-to-r from-green-500/10 to-violet-500/10 border border-green-400/20 rounded-2xl shadow-xl max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl font-bold text-green-400 mb-2">16+</div>
                  <p className="text-gray-600 dark:text-gray-400">Professional Certificates</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl font-bold text-violet-400 mb-2">8</div>
                  <p className="text-gray-600 dark:text-gray-400">Technology Domains</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">2024-25</div>
                  <p className="text-gray-600 dark:text-gray-400">Recent Certifications</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                  <p className="text-gray-600 dark:text-gray-400">Industry Recognized</p>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Build the Future Together</h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business with cutting-edge AI solutions? Let's connect and create something
              extraordinary that will revolutionize your industry.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information Cards - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Position Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">Position</p>
                    <p className="text-lg text-white font-semibold">AI Engineer & CTO Technavya AI</p>
                  </div>
                </motion.div>
                {/* Email Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">Email</p>
                    <a
                      href="mailto:zainatteeq@gmail.com"
                      className="text-lg text-white hover:text-green-400 transition-colors duration-300"
                    >
                      zainatteeq@gmail.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">Phone</p>
                    <p className="text-lg text-white">+92 327 1510305</p>
                  </div>
                </motion.div>

                {/* Website Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-center space-x-4 p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-violet-500 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide font-medium">Website</p>
                    <a
                      href="https://www.technavya-ai.site/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-white hover:text-green-400 transition-colors duration-300"
                    >
                      www.technavya-ai.site
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8"
              >
                <form className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="AI Project Collaboration"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell me about your AI project requirements and how Zain's expertise can help transform your business..."
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-green-400 focus:ring-1 focus:ring-green-400 focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Send Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30"
                      asChild
                    >
                      <a href="mailto:zainatteeq@gmail.com?subject=AI Project Collaboration&body=Tell me about your AI project requirements and how Zain's expertise can help transform your business...">
                        <Mail className="h-5 w-5" />
                        <span>Send Message</span>
                      </a>
                    </Button>
                  </motion.div>
                </form>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <p className="text-sm text-gray-400 text-center mb-4">Connect with me on social media</p>

                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href="https://github.com/Muhammadzainattiq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-5 w-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/muhammad-zain-attiq-75a543169/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </motion.a>
                    <motion.a
                      href="mailto:zainatteeq@gmail.com"
                      className="w-10 h-10 bg-gray-700 hover:bg-purple-500 rounded-full flex items-center justify-center transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Mail className="h-5 w-5 text-white" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-6"
          >
            <motion.a
              href="https://github.com/Muhammadzainattiq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-green-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-zain-attiq-75a543169/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-violet-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:zainatteeq@gmail.com"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 dark:text-gray-400"
          >
            &copy; {new Date().getFullYear()} Zain Attiq. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  )
}
