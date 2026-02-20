import React from 'react';
import assets from '../assets/Pruthvi_2.png';
import { Github, Linkedin, Twitter, ArrowRight, Download, LinkedinIcon } from 'lucide-react';

const Home = () => {
  const handleDownloadResume = () => {
    // Replace this URL with the actual path to your resume file
    const resumeUrl = '/resume/resume_pruthviRaj-1.pdf'; // Update this path
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Pruthviraj_Poul_Resume.pdf'; // The name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewProjects = () => {
    // Scroll to projects section or navigate to projects page
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If projects section doesn't exist, you can navigate to projects page
      // window.location.href = '/projects';
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50/50 pt-20">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 py-12 lg:py-24 relative z-10">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          
          {/* Left Side: Image with 3D Effect */}
          <div className="w-full lg:w-5/12 flex justify-center order-2 lg:order-1">
            <div className="relative group">
              {/* Spinning Gradient Border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative inline-block rounded-2xl bg-white p-2 shadow-2xl">
                <img 
                  src={assets}
                  alt="Pruthviraj Poul" 
                  className="w-full max-w-[320px] md:max-w-[380px] rounded-xl object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">
                <div className="bg-green-100 p-2 rounded-full">
                   <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-bold text-slate-800">Available for Hire</span>
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full text-center lg:w-7/12 lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
               <span className="relative flex h-2 w-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
               </span>
               <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Full Stack Developer</span>
            </div>

            <h1 className="mb-6 text-5xl md:text-7xl font-black text-slate-900 leading-tight">
              Crafting Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Experiences.
              </span>
            </h1>

            <p className="mb-10 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Hi, I'm <span className="font-bold text-slate-900">Pruthviraj</span>. 
              I transform complex ideas into elegant, high-performance web applications. 
              Based in India, building globally.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start mb-12">
              <button 
                onClick={handleViewProjects}
                className="group flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl active:scale-95"
              >
                View Projects 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleDownloadResume}
                className="group flex items-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 font-bold text-slate-700 transition-all hover:border-indigo-600 hover:text-indigo-600 active:scale-95"
              >
                Resume 
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>

            {/* Socials & Tech Stack */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 border-t border-slate-200">
              <div className="flex gap-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-sm border border-slate-100 text-slate-400 hover:text-indigo-600 transition-colors hover:scale-110 transform duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/feed/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-sm border border-slate-100 text-slate-400 hover:text-indigo-600 transition-colors hover:scale-110 transform duration-200"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                {/* <a 
                  href="https://twitter.com/yourusername" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white shadow-sm border border-slate-100 text-slate-400 hover:text-indigo-600 transition-colors hover:scale-110 transform duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a> */}
              </div>
              <div className="h-px w-12 bg-slate-200 hidden sm:block"></div>
              <div className="flex items-center gap-4 text-slate-400 font-medium grayscale opacity-60">
                <span className="text-sm uppercase tracking-widest font-bold">Tech Stack |</span>
                <img src="https://skillicons.dev/icons?i=react,nextjs,tailwind,nodejs,mongodb" alt="stack" className="h-6" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Home;