import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Star, Calendar, Users, Eye, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectCard = ({ project, variant = 'default' }) => {
  const [showDetails, setShowDetails] = useState(false);
  
  // Default variant - Standard card
  if (variant === 'default') {
    return (
      <div className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-video overflow-hidden bg-slate-200">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold rounded-lg shadow-lg">
                <Star size={12} className="fill-white" />
                Featured
              </span>
            </div>
          )}
          
          {/* Quick Action Icons */}
          <div className="absolute bottom-4 right-4 flex gap-2 translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white hover:scale-110 transition-all duration-300 text-white hover:text-indigo-600"
              title="Live Demo"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/20 backdrop-blur-md rounded-lg hover:bg-white hover:scale-110 transition-all duration-300 text-white hover:text-slate-900"
              title="Source Code"
            >
              <Github size={18} />
            </a>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Category & Date */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Calendar size={12} />
              {project.date}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-lg hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 3 && (
              <span className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-lg">
                +{project.tags.length - 3}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Eye size={14} />
              <span>{project.views}k</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Star size={14} className="fill-yellow-400 text-yellow-400" />
              <span>{project.stars}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Users size={14} />
              <span>{project.collaborators}</span>
            </div>
          </div>

          {/* View Details Button */}
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className="w-full mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 transition-colors group/btn"
          >
            {showDetails ? 'Show Less' : 'View Project Details'}
            {showDetails ? <ChevronUp size={16} /> : <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />}
          </button>

          {/* Expandable Details */}
          {showDetails && (
            <div className="mt-4 p-4 bg-slate-50 rounded-lg animate-fadeIn">
              <h4 className="font-bold text-slate-900 mb-2 text-sm">Key Features:</h4>
              <ul className="space-y-2">
                {project.highlights?.map((highlight, index) => (
                  <li key={index} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="text-indigo-600 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              {project.longDescription && (
                <>
                  <h4 className="font-bold text-slate-900 mb-2 text-sm mt-3">Details:</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {project.longDescription}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Horizontal variant - Good for featured sections
  if (variant === 'horizontal') {
    return (
      <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row">
        {/* Image - 40% width on desktop */}
        <div className="md:w-2/5 relative aspect-video md:aspect-auto overflow-hidden bg-slate-200">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Content - 60% width on desktop */}
        <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full flex items-center gap-1">
                <Star size={12} className="fill-yellow-600" />
                Featured
              </span>
            )}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            {project.title}
          </h3>

          <p className="text-slate-600 mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-3 py-1.5 bg-slate-100 text-slate-600 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Highlights */}
          <div className="mb-4">
            <h4 className="text-sm font-bold text-slate-900 mb-2">Key Features:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {project.highlights?.slice(0, 4).map((highlight, index) => (
                <li key={index} className="text-xs text-slate-600 flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Stats Row */}
          <div className="flex items-center gap-6 mb-4">
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <Eye size={16} />
              <span>{project.views}k views</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <Star size={16} className="fill-yellow-400 text-yellow-400" />
              <span>{project.stars} stars</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <Users size={16} />
              <span>{project.collaborators} collaborators</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 border border-slate-200 text-slate-700 text-sm font-medium rounded-lg hover:bg-slate-50 transition-colors"
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProjectCard;