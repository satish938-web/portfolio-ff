import React, { useState } from 'react';
import { Code2, Terminal, GitBranch, ExternalLink, Star } from 'lucide-react';

const Code = () => {
  const [activeTab, setActiveTab] = useState('projects');

  const codeProjects = [
    {
      title: "Chat Application",
      description: "Real-time chat application with Socket.IO, JWT authentication, and MongoDB integration.",
      technologies: ["React", "Node.js", "Socket.IO", "MongoDB", "JWT"],
      githubUrl: "https://github.com/satish938-web/chatapp",
      liveUrl: "https://frontend-chat1.onrender.com",
      featured: true
    },
    {
      title: "Job Portal",
      description: "Full-stack job portal with MERN stack, role-based access, and admin panel.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      githubUrl: "https://github.com/satish938-web/job-portalitsself",
      liveUrl: "https://frontend-ten-ashy-68.vercel.app/",
      featured: true
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio with modern dark theme, responsive design, and animations.",
      technologies: ["React", "Tailwind CSS", "Vite", "Lucide React"],
      githubUrl: "https://github.com/satish938-web/portfolio-ff",
      liveUrl: "https://github.com/satish938-web/portfolio-ff",
      featured: false
    }
  ];

  const codeSnippets = [
    {
      title: "React Hook Example",
      language: "JavaScript",
      code: `const useTypewriter = (text, speed = 50) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
};`,
      demo: "Custom React hook for typewriter effect"
    },
    {
      title: "Node.js API Route",
      language: "JavaScript",
      code: `const express = require('express');
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };`,
      demo: "JWT authentication middleware for Express.js"
    },
    {
      title: "Socket.IO Chat Server",
      language: "JavaScript",
      code: `const io = require('socket.io')(httpServer);
const jwt = require('jsonwebtoken');

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  
  if (!token) {
    return next(new Error('Authentication error'));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return next(new Error('Invalid token'));
    }
    socket.userId = decoded.id;
    next();
  });
});

io.on('connection', (socket) => {
  console.log(\`User connected: \${socket.userId}\`);
  
  socket.on('join_room', (room) => {
    socket.join(room);
    socket.to(room).emit('user_joined', {
      userId: socket.userId,
      room: room
    });
  });

  socket.on('send_message', (data) => {
    io.to(data.room).emit('new_message', {
      userId: socket.userId,
      message: data.message,
      timestamp: new Date()
    });
  });
});`,
      demo: "Real-time chat server with authentication"
    }
  ];

  const openSourceContributions = [
    {
      project: "Open Source Library",
      description: "Contributed to React utility library with 50+ stars",
      contributions: ["Bug fixes", "New features", "Documentation"],
      url: "https://github.com/example/react-utils"
    },
    {
      project: "Community Project",
      description: "Active contributor to open source chat application",
      contributions: ["Code reviews", "Feature development", "Issue triage"],
      url: "https://github.com/example/chat-app"
    }
  ];

  return (
    <section id="code" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display slide-in-top">
            Code & <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-sans font-light fade-in-up stagger-1 leading-relaxed">
            A showcase of my coding projects, open source contributions, and technical implementations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 inline-flex border border-gray-800">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'projects' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Code2 className="w-5 h-5 mr-2" />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('snippets')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'snippets' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <Terminal className="w-5 h-5 mr-2" />
              Code Snippets
            </button>
            <button
              onClick={() => setActiveTab('contributions')}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'contributions' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              <GitBranch className="w-5 h-5 mr-2" />
              Contributions
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'projects' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in-up">
            {codeProjects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-semibold border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white px-4 py-2 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  >
                    <GitBranch className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-400 hover:text-white px-4 py-2 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'snippets' && (
          <div className="space-y-8 fade-in-up">
            {codeSnippets.map((snippet, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{snippet.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full">
                    {snippet.language}
                  </span>
                </div>
                <div className="bg-black/80 rounded-xl p-4 mb-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm font-mono leading-relaxed">
                    <code>{snippet.code}</code>
                  </pre>
                </div>
                <p className="text-gray-400 text-sm italic">{snippet.demo}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'contributions' && (
          <div className="grid md:grid-cols-2 gap-8 fade-in-up">
            {openSourceContributions.map((contribution, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                <h3 className="text-xl font-bold text-white mb-3">{contribution.project}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{contribution.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {contribution.contributions.map((contrib, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full text-xs font-semibold border border-purple-500/30"
                    >
                      {contrib}
                    </span>
                  ))}
                </div>
                <a
                  href={contribution.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-white px-4 py-2 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Code;
