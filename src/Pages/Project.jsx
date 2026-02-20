import React from 'react';
import ProjectCard from '../Components/ProjectCard';
import { Star } from 'lucide-react';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Hotel Booking Web App",
      category: "Full Stack",
      description: "A comprehensive hotel booking platform with real-time room availability, search functionality, and dynamic booking features.",
      longDescription: "Built a modular UI with reusable React components and managed routing with React Router. Utilized Bootstrap Grid System for a professional, responsive layout. Simulated a production environment using JSON Server to handle asynchronous API calls for realtime data fetching. Implemented search, filtering, and dynamic booking functionality with proper state management and seamless user experience.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Bootstrap", "JSON Server", "Axios", "React Router"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      stars: 56,
      views: 2.1,
      date: "2024",
      collaborators: 2,
      highlights: [
        "Modular React components with React Router",
        "Bootstrap Grid System for responsive layout",
        "JSON Server for simulated production environment",
        "Search, filtering, and dynamic booking features"
      ]
    },
    {
      id: 2,
      title: "Learning Management System (LMS)",
      category: "Full Stack",
      description: "A MERN-stack learning platform with Role-Based Access Control for instructors and students.",
      longDescription: "Developed a MERN-stack platform featuring Role-Based Access Control for instructors and students. Implemented secure JWT/bcrypt authentication and RESTful API integration using Axios. Integrated Cloudinary for cloud-based media storage and optimized content delivery. Designed responsive UI using Tailwind CSS and implemented course management features such as lecture uploads, enrollment handling, and protected routes for secure access control.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind", "JWT", "Cloudinary"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      stars: 78,
      views: 2.5,
      date: "2024",
      collaborators: 3,
      highlights: [
        "Role-Based Access Control for instructors/students",
        "JWT/bcrypt authentication & RESTful APIs",
        "Cloudinary integration for media storage",
        "Course management with protected routes"
      ]
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Redux", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      stars: 42,
      views: 1.8,
      date: "2023",
      collaborators: 2,
      highlights: [
        "Product catalog with filtering",
        "Shopping cart & checkout flow",
        "Stripe payment integration",
        "Order management system"
      ]
    },
    {
      id: 4,
      title: "Portfolio Template",
      category: "Design",
      description: "A modern, customizable portfolio template for developers and designers with smooth animations and dark mode.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Framer Motion", "Tailwind", "Vite"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      stars: 23,
      views: 0.5,
      date: "2023",
      collaborators: 1,
      highlights: [
        "Smooth animations with Framer Motion",
        "Dark mode support",
        "Fully responsive design",
        "Optimized performance with Vite"
      ]
    },
  ];
  

  

  // Featured projects
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is crafted with attention to detail and focus on user experience.
          </p>
        </div>

        {/* Featured Projects Section - Horizontal Cards */}
        {featuredProjects.length > 0 && (
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <Star className="fill-yellow-400 text-yellow-400" size={24} />
              Featured Projects
            </h3>
            <div className="space-y-6">
              {featuredProjects.slice(0, 2).map(project => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  variant="horizontal" 
                />
              ))}
            </div>
          </div>
        )}

        {/* All Projects Grid - Default Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            All Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                variant="default" 
              />
            ))}
          </div>
        </div>

        {/* Minimal Cards Section - Side projects */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8">
            Side Projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.slice(0, 4).map(project => (
              <ProjectCard 
                key={project.id} 
                project={{...project, description: project.description.substring(0, 80) + '...'}} 
                variant="minimal" 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;