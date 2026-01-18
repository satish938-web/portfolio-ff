import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, Mail, Github, Linkedin } from 'lucide-react';

// Typewriter component
const Typewriter = ({ text, className = '', speed = 60 }) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    setDisplayed('');
    setDone(false);
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed((prev) => prev + text.charAt(i));
        i++;
        if (i === text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <span className={className} style={{ whiteSpace: 'pre' }}>
      {displayed}
      <span style={{
        borderRight: '2px solid #3b82f6',
        marginLeft: '2px',
        animation: done ? 'blink 0.75s step-end infinite' : 'none',
        visibility: done ? 'visible' : 'visible',
      }}>
        {done ? ' ' : '|'}
      </span>
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden pt-32">
      {/* Animated Floating Gradient Shape */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 continuous-float z-0"></div>
      
      {/* Additional Floating Shapes */}
      <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-15 gentle-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl opacity-15 wave-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full blur-xl opacity-10 continuous-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Particle Effects */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-10 scale-in stagger-1">
            <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-2 shadow-2xl overflow-hidden profile-image-container continuous-float hover:scale-110 transition-transform duration-500">
              <img
                src="photo.jpg"
                alt="Satish Kumar"
                className="w-full h-full object-cover rounded-full border-4 border-black profile-image"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 slide-in-top stagger-2 font-display break-words animate-fade-in-up hover:scale-105 transition-transform duration-300 gentle-bounce">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              <Typewriter text={"Satish Kumar"} speed={60} />
            </span>
          </h1>

          {/* Tagline */}
          <div className="text-xl md:text-3xl text-blue-400 font-bold mb-6 animate-fade-in-up hover:text-blue-300 transition-colors duration-300 wave-animation">
            Full Stack Developer | MERN | Problem Solver
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto fade-in-up stagger-3 font-sans font-light animate-fade-in-up leading-relaxed">
            Building robust, scalable, and user-focused web applications.
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-400 mb-12 max-w-4xl mx-auto fade-in-up stagger-4 font-sans leading-relaxed animate-fade-in-up">
            Passionate about delivering high-quality digital solutions using the MERN stack (MongoDB, Express.js, React.js, Node.js). I thrive on solving real-world problems, writing clean code, and creating seamless user experiences. Always eager to learn, collaborate, and innovate in the ever-evolving world of web development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 fade-in-up stagger-5">
            <a 
              href="https://drive.google.com/file/d/1GUY5DIyDN9g5-FxxOXgZH-e193GzfOn8/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl btn-animated hover-lift pulse-glow"
            >
              <Download className="inline-block w-6 h-6 mr-3 slow-rotate" />
              Download Resume
            </a>
            <a href="#contact" className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl btn-animated hover-lift pulse-glow">
              <Mail className="inline-block w-6 h-6 mr-3 slow-rotate" />
              Get In Touch
            </a>
          </div>

          {/* Social Links with bounce-in stagger */}
          <div className="flex justify-center space-x-8 mb-16 fade-in-up">
            <a href="https://github.com/satish938-web" className="text-gray-400 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover-rotate gentle-bounce" style={{ animationDelay: '0.1s' }} target="_blank" rel="noopener noreferrer">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/satish-kumar-4a3ab622b/" className="text-gray-400 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover-rotate gentle-bounce" style={{ animationDelay: '0.2s' }} target="_blank" rel="noopener noreferrer">
              <Linkedin size={28} />
            </a>
            <a href="mailto:satish202627@gmail.com" className="text-gray-400 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover-rotate gentle-bounce" style={{ animationDelay: '0.3s' }}>
              <Mail size={28} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="wave-animation">
            <a href="#about" className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-xl text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 wave" onClick={(e) => {
              e.preventDefault();
              const element = document.querySelector('#about');
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}>
              <ChevronDown size={24} className="slow-rotate" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;