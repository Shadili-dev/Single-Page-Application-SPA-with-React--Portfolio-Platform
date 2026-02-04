import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Web Development',
    technologies: '',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
    link: '',
    featured: false
  });
  
  const [errors, setErrors] = useState({});
  
  const categories = ['Web Development', 'Mobile Development', 'Data Science', 'Artificial Intelligence', 'Backend Development'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.technologies.trim()) {
      newErrors.technologies = 'At least one technology is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const technologiesArray = formData.technologies
      .split(',')
      .map(tech => tech.trim())
      .filter(tech => tech);
    
    const newProject = {
      ...formData,
      technologies: technologiesArray,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    
    onAddProject(newProject);
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      category: 'Web Development',
      technologies: '',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop',
      link: '',
      featured: false
    });
    
    setErrors({});
    
    alert('Project added successfully!');
  };

  return (
    <div className="project-form-container" id="add-project">
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} className="project-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="title">Project Title *</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter project title"
              className={errors.title ? 'error' : ''}
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>
          
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your project..."
            rows="4"
            className={errors.description ? 'error' : ''}
          />
          {errors.description && <span className="error-message">{errors.description}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="technologies">Technologies (comma separated) *</label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            placeholder="React, Node.js, MongoDB, etc."
            className={errors.technologies ? 'error' : ''}
          />
          {errors.technologies && <span className="error-message">{errors.technologies}</span>}
        </div>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Enter image URL"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="link">Project Link</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://github.com/your-project"
            />
          </div>
        </div>
        
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            Mark as Featured Project
          </label>
        </div>
        
        <button type="submit" className="submit-btn">
          Add Project
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
