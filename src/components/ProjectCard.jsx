import React from 'react';

const ProjectCard = ({ project, onDelete }) => {
  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        {project.featured && (
          <div className="featured-badge">
            <span>⭐ Featured</span>
          </div>
        )}
      </div>
      
      <div className="project-content">
        <div className="project-header">
          <h3>{project.title}</h3>
          <span className="project-category">{project.category}</span>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-footer">
          <a 
            href={project.link} 
            className="project-link"
            target="_blank" 
            rel="noopener noreferrer"
          >
            View Details →
          </a>
          <span className="project-date">{project.date}</span>
        </div>
        
        {onDelete && (
          <button 
            className="delete-btn"
            onClick={() => onDelete(project.id)}
            aria-label={`Delete ${project.title}`}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
