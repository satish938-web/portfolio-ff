import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Trainee (MERN Stack)",
      company: "QSpiders Training Institute, Noida",
      location: "Noida, India",
      period: "Apr 2025 – Present",
      description: [
        "Practical training in MERN stack: MongoDB, Express.js, React.js, Node.js.",
        "Built full-stack apps with RESTful API integration and Git/GitHub version control.",
        "Strengthened JavaScript, React architecture, and state management.",
        "Participated in mock interviews, coding sessions, and group discussions."
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "Git", "GitHub"]
    }
  ];

  return (
    <section id="experience" className="py-20 experience-bg">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display slide-in-top">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans font-light fade-in-up stagger-1">
            My professional journey and contributions to innovative projects and organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0 fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-full bg-primary-200 hidden md:block"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 rounded-full hidden md:block pulse"></div>
              
              <div className="card p-8 md:ml-16 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-primary-600 font-semibold mb-2">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:text-right text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="md:order-1">{exp.period}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 md:order-2 md:ml-2 md:mr-0" />
                      <span className="md:order-1">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-primary-600 mr-3 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;