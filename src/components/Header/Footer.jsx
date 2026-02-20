import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          <div className="text-center md:text-left">
            <h5 className="mb-2 text-lg font-bold text-[#6366f1]">MyPortfolio</h5>
            <p className="text-sm text-gray-500">
              © 2026 Pruthviraj Poul. <br /> Built with Passion & Code.
            </p>
          </div>

          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-indigo-600">Home</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">Projects</a>
            <a href="#" className="text-gray-500 hover:text-indigo-600">Resume</a>
          </div>

          <div className="flex space-x-4">
            {/* Social Icons (Simplified for brevity) */}
            <a href="https://github.com/" className="text-gray-400 hover:text-gray-900">GitHub</a>
            <a href="https://www.linkedin.com/feed/" className="text-gray-400 hover:text-[#6366f1]">LinkedIn</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;