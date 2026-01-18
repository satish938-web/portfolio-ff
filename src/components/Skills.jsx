import React from 'react';
import { Code2, Database, Globe, Smartphone, Cloud, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "C", "C++", "JavaScript", "SQL"]
    },
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "React", "Redux", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Netlify", "Railway", "Postman"]
    },
    {
      title: "Other",
      skills: ["Next js", "DSA"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-display slide-in-top">
            Technical <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-sans font-light fade-in-up stagger-1 leading-relaxed">
            A comprehensive overview of my technical skills and proficiency across various technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:scale-105 group scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-gradient-to-r from-primary-100 to-purple-100 rounded-xl">
                  {category.title === "Languages" && <Code2 className="w-8 h-8 text-primary-600" />}
                  {category.title === "Frontend" && <Globe className="w-8 h-8 text-primary-600" />}
                  {category.title === "Backend" && <Database className="w-8 h-8 text-primary-600" />}
                  {category.title === "Database" && <Database className="w-8 h-8 text-primary-600" />}
                  {category.title === "Tools" && <GitBranch className="w-8 h-8 text-primary-600" />}
                  {category.title === "Other" && <Cloud className="w-8 h-8 text-primary-600" />}
                </div>
                <h3 className="text-xl font-bold text-gray-900 ml-4">{category.title}</h3>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-3">
                {category.skills.map((skill, sidx) => (
                  <span
                    key={sidx}
                    className="px-4 py-2 bg-gradient-to-r from-primary-50 to-purple-50 text-primary-700 rounded-full text-sm font-semibold border border-primary-200 hover:from-primary-100 hover:to-purple-100 transition-all duration-300 transform hover:scale-105"
                    style={{ animationDelay: `${sidx * 0.05}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;