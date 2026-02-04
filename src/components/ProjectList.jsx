import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects, searchTerm, selectedCategory, onDelete }) => {
  const filteredProjects = projects.filter(project => {
    const matchesSearch = 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => 
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (filteredProjects.length === 0) {
    return (
      <div className="no-projects">
        <h3>No projects found</h3>
        <p>Try adjusting your search or filter criteria</p>
      </div>
    );
  }

  return (
    <div className="project-list">
      <div className="project-stats">
        <p>Showing {filteredProjects.length} of {projects.length} projects</p>
        {selectedCategory !== 'All' && (
          <span className="filter-indicator">Filtered by: {selectedCategory}</span>
        )}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
