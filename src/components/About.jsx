import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code following best practices."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "Strong team player with excellent communication and leadership skills."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results-Driven",
      description: "Focused on delivering high-quality solutions that meet business objectives."
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display slide-in-top">
            About <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-sans font-light fade-in-up stagger-1 leading-relaxed">
            A dedicated Full Stack Developer Trainee specializing in MERN Stack technologies, 
            committed to delivering innovative web solutions and exceptional user experiences.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 fade-in-left">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with expertise in the MERN stack. 
                I love creating robust, scalable web applications that solve real-world problems 
                and provide exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey in web development is driven by curiosity and a commitment to 
                continuous learning. I thrive on challenges and enjoy turning complex problems 
                into elegant, user-friendly solutions.
              </p>
            </div>
            
            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                Let's Work Together
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-right">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-800 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl text-blue-400 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );};

export default About;