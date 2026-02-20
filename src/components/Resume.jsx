import React from 'react'
   import { Eye, Download } from 'lucide-react';

const Resume = () => {
  return (
 

// Inside your Component
<div className="flex gap-4 justify-self-center ">
  <a 
    href="/resume" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 font-bold text-white shadow-lg hover:bg-indigo-700 transition-all"
  >
    <Eye size={18} />
    View Resume
  </a>
  
  <a 
    href="/Resume_Pruthviraj_Poul.pdf" 
    download
    className="flex items-center gap-2 rounded-full border-2 border-slate-200 px-6 py-3 font-bold text-slate-700 hover:border-slate-900 transition-all"
  >
    <Download size={18} />
  </a>
</div>
  )
}

export default Resume