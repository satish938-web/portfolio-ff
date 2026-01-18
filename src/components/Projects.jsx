import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Full Stack Job Portal Application",
      date: "2025",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux Toolkit"],
      description: "Built a MERN-based job portal with user and admin role-based access. Implemented JWT authentication, authorization, and protected routes. Developed RESTful APIs for jobs, companies, users, and applications.",
      bullets: [
        "Implemented JWT authentication, authorization, and protected routes for secure access.",
        "Developed RESTful APIs for jobs, companies, users, and applications with full CRUD operations.",
        "Built job posting, browsing, filtering, and apply-job features with seamless user experience.",
        "Designed admin panel to manage jobs, applicants, and application status efficiently.",
        "Used Redux Toolkit for global state management across the application."
      ],
      image: "/image.png",
      liveUrl: "https://frontend-ten-ashy-68.vercel.app/",
      githubUrl: "https://github.com/satish938-web/job-portalitsself"
    },
        {
      title: "YouTube Clone",
      date: "2025",
      technologies: ["React.js", "JavaScript", "Tailwind CSS"],
      description: "A comprehensive web development and DSA learning platform with interactive coding tutorials, algorithm visualizations, and problem-solving challenges.",
      bullets: [
        "Built interactive coding tutorials and algorithm visualizations for web development concepts.",
        "Implemented real-time code execution and responsive design for optimal learning experience."
      ],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://gregarious-pithivier-82540f.netlify.app/",
      githubUrl: ""
    },
    {
      title: "MTL Logistics Company Website",
      date: "2025",
      technologies: ["React.js", "CSS", "Responsive Web Design"],
      description: "Built modern frontend with About, Services, Media Room, and Contact pages. Used Flexbox and CSS Grid for cross-device responsive design.",
      bullets: [
        "Built modern frontend with About, Services, Media Room, and Contact pages.",
        "Used Flexbox and CSS Grid for cross-device responsive design."
      ],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://6840afd18da3982852f09a7f--preeminent-marzipan-5cd083.netlify.app/",
      githubUrl: ""
    },
    {
      title: "E-Commerce Platform",
      date: "2024",
      technologies: ["React 18", "JavaScript (ES6+)", "CSS (Flex)", "Redux"],
      description: "Created product catalog with sorting, filtering, wishlist, and persistent cart. Added promo code system and ensured mobile-first fast-loading experience.",
      bullets: [
        "Created product catalog with sorting, filtering, wishlist, and persistent cart.",
        "Added promo code system and ensured mobile-first fast-loading experience."
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      liveUrl: "https://shimmering-tulumba-1b0048.netlify.app/",
      githubUrl: ""
    },
    {
      title: "ChatApp",
      date: "2025",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "Redux Toolkit"],
      description: "Built a MERN-based real-time chat application with individual and group messaging. Implemented JWT authentication with protected routes and integrated Socket.IO for real-time messaging.",
      bullets: [
        "Built a MERN-based real-time chat application with individual and group messaging.",
        "Implemented JWT authentication with protected routes for secure access.",
        "Integrated Socket.IO for real-time messaging and typing indicators.",
        "Developed RESTful APIs with MongoDB for chats and messages.",
        "Managed global state using Redux Toolkit and designed a responsive UI with Tailwind CSS."
      ],
      image: "/chat.png",
      liveUrl: "https://frontend-chat1.onrender.com",
      githubUrl: ""
    },
      ];

  const ProjectCard = ({ project, index }) => (
    <div className={`group relative bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-800 hover:border-blue-500/30 transform hover:-translate-y-2 fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
          {project.date}
        </div>
        <div className="absolute bottom-4 left-4 transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex gap-2">
            {project.liveUrl && (
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full shadow-lg">
                <ExternalLink className="w-5 h-5 text-blue-400" />
              </div>
            )}
            {project.githubUrl && (
              <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full shadow-lg">
                <Github className="w-5 h-5 text-gray-300" />
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-8">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed text-lg">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-sm font-semibold border border-blue-500/30 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-105"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center bg-gray-800 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Github className="w-5 h-5 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display slide-in-top">
            Featured <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-sans font-light fade-in-up stagger-1 leading-relaxed">
            A curated showcase of my recent work, demonstrating technical expertise and creative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-16 fade-in-up">
          <a
            href="#"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;