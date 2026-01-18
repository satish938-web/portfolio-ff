import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Tech – Computer Science and Engineering (Passout: 2025)",
      institution: "Bihar Engineering University, Patna",
      location: "Patna, India",
      period: "2021 – 2025",
      description: "Completed Bachelor of Technology in Computer Science and Engineering. CGPA: 7.2/10",
      achievements: []
    },
    {
      degree: "12th (PCM)",
      institution: "M.K. College, Darbhanga",
      location: "Darbhanga, India",
      period: "2019 – 2021",
      description: "Percentage: 83%",
      achievements: []
    }
  ];

  // Remove certifications and courses arrays

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic background and professional certifications that support my technical expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">Education</h3>
            </div>

            {education.map((edu, index) => (
              <div key={index} className="card p-8 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-primary-600 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600 text-sm mb-2">
                      {edu.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="text-sm">{edu.period}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>

          {/* Certifications & Courses */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Education;