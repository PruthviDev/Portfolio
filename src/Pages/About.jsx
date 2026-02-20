import React from 'react';
import { User, Code, Rocket, ExternalLink, Download } from 'lucide-react';
import image from '../assets/Pruthvi_2.png';

const About = () => {
  const handleDownloadCV = () => {
    // Replace this URL with the actual path to your resume file
    const resumeUrl = '/resume/resume_pruthviRaj-1.pdf'; // Update this path
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Pruthviraj_Poul_Resume.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewGitHub = () => {
    // Replace with your actual GitHub profile URL
    window.open('https://github.com/', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="about" className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Decorative Element */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          
          {/* Left Column: Image with Decorative Elements */}
          <div className="relative w-full lg:w-5/12">
            <div className="relative mx-auto w-fit">
              {/* Background Accent Square */}
              {/* <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-100 rounded-2xl -z-10 animate-pulse"></div> */}
              
              {/* Main Image Wrapper */}
              <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-600 p-[3px] shadow-2xl">
                <div className="bg-white rounded-[calc(1.5rem-3px)] overflow-hidden">
                  <img 
                    src={image}
                    alt="Pruthviraj Poul" 
                    className="w-full max-w-[380px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Experience Badge */}
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="bg-indigo-100 p-2 rounded-full">
                  <Code className="w-4 h-4 text-indigo-600" />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-slate-500">Experience</span>
                  <span className="text-sm font-bold text-slate-800">2+ Years</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-7/12">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 mb-6">
                <User size={16} className="font-bold" />
                <span className="text-sm font-bold uppercase tracking-wider">About Me</span>
              </div>
              
              <h2 className="mb-6 text-4xl md:text-6xl font-black leading-tight text-slate-900">
                Turning Complexity into <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  Elegant Solutions.
                </span>
              </h2>

              <p className="mb-8 text-lg leading-relaxed text-slate-600 lg:text-xl max-w-2xl">
                I'm a <span className="text-slate-900 font-bold">MERN Stack Developer</span> who loves solving real-world problems. Whether it's a 
                high-traffic <span className="underline decoration-indigo-300 decoration-2 underline-offset-4">Hotel Booking engine</span> or a 
                scalable <span className="underline decoration-purple-300 decoration-2 underline-offset-4">LMS platform</span>, 
                I focus on writing clean code and delivering fast, accessible user experiences.
              </p>

              {/* Feature/Stats Grid */}
              <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm group-hover:bg-indigo-600 transition-colors">
                    <Code className="text-indigo-600 group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">15+ Projects</h4>
                    <p className="text-sm text-slate-500">Built from scratch to deployment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all">
                  <div className="bg-white p-2.5 rounded-lg shadow-sm group-hover:bg-purple-600 transition-colors">
                    <Rocket className="text-purple-600 group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">99% Success</h4>
                    <p className="text-sm text-slate-500">Focus on client satisfaction.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <button 
                  onClick={handleDownloadCV}
                  className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white shadow-xl shadow-slate-200 transition-all hover:bg-slate-800 hover:-translate-y-1 active:scale-95"
                >
                  Download CV
                  <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </button>
                <button 
                  onClick={handleViewGitHub}
                  className="group flex items-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 font-bold text-slate-700 transition-all hover:border-indigo-600 hover:text-indigo-600 hover:-translate-y-1 active:scale-95"
                >
                  View GitHub
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;