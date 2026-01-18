import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-900 text-white py-12 relative">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Satish Kumar
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer Trainee (MERN Stack) | Darbhanga, Bihar, India<br/>
              <a href="tel:+916379467223" className="underline">+91-6379467223</a> | <a href="mailto:satish202627@gmail.com" className="underline">satish202627@gmail.com</a>
            </p>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Full Stack Web Development – InternCourse (2025)</li>
              <li>Salesforce Developer – Salesforce (2024)</li>
            </ul>
          </div>

          {/* Extra-Curricular Activities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Extra-Curricular Activities</h4>
            <ul className="space-y-2 text-gray-400">
              <li><b>Public Speaking:</b> Presented JavaScript, React.js, and APIs at college seminars.</li>
              <li><b>YouTube Educator:</b> Teaches Mathematics for IIT-JEE on YouTube.</li>
              <li><b>Problem Solving:</b> Solved 200+ DSA problems on HackerRank.</li>
            </ul>
          </div>

          {/* Project Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Project Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://gregarious-pithivier-82540f.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline">YouTube Clone</a></li>
              <li><a href="https://6840afd18da3982852f09a7f--preeminent-marzipan-5cd083.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline">MTL Logistics Company Website</a></li>
              <li><a href="https://shimmering-tulumba-1b0048.netlify.app/" target="_blank" rel="noopener noreferrer" className="underline">E-Commerce Platform</a></li>
              <li><a href="https://drive.google.com/file/d/11NeCmk0p1ZeiAPiuVWwRZPpU91tDq5rs/view" target="_blank" rel="noopener noreferrer" className="underline">Certificate 1</a></li>
              <li><a href="https://drive.google.com/file/d/13Z2m4mv2HHXp5fSvFeTV_yqpYWJyoJtt/view" target="_blank" rel="noopener noreferrer" className="underline">Certificate 2</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center">
            © 2024 Satish Kumar. Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> and dedication.
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-primary-600 hover:bg-primary-700 text-white p-3 rounded-full transition-all duration-200 hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;