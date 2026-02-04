import React, { useState } from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { initialProjects, categories } from './data/projects';
import './App.css';

function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleAddProject = (newProject) => {
    setProjects([newProject, ...projects]);
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(project => project.id !== projectId));
    }
  };

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <div className="container">
          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <section className="featured-section">
              <h2 className="section-title">🌟 Featured Projects</h2>
              <p className="section-subtitle">Check out our highlighted work</p>
              <div className="featured-grid">
                {featuredProjects.slice(0, 3).map(project => (
                  <div key={project.id} className="featured-card">
                    <img src={project.image} alt={project.title} />
                    <div className="featured-content">
                      <h3>{project.title}</h3>
                      <p>{project.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
          
          {/* All Projects Section */}
          <section className="projects-section" id="projects">
            <div className="section-header">
              <h2 className="section-title">All Projects</h2>
              <p className="section-subtitle">
                Browse our complete portfolio ({projects.length} projects)
              </p>
            </div>
            
            <SearchBar 
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              categories={categories}
            />
            
            <ProjectList 
              projects={projects}
              searchTerm={searchTerm}
              selectedCategory={selectedCategory}
              onDelete={handleDeleteProject}
            />
          </section>
          
          {/* Add Project Form */}
          <section className="form-section" id="add-project">
            <ProjectForm 
              onAddProject={handleAddProject}
            />
          </section>
          
          {/* About Section */}
          <section className="about-section" id="about">
            <h2 className="section-title">About This Platform</h2>
            <div className="about-content">
              <div className="about-text">
                <h3>Dynamic Portfolio Showcase</h3>
                <p>
                  This platform demonstrates a modern Single Page Application (SPA) built with React. 
                  It features dynamic project management, real-time search and filtering, and a responsive design.
                </p>
                <p>
                  Add your own projects, filter by category, and search through technologies—all without page reloads.
                </p>
                <div className="platform-stats">
                  <div className="stat">
                    <h4>{projects.length}</h4>
                    <p>Projects</p>
                  </div>
                  <div className="stat">
                    <h4>{categories.length - 1}</h4>
                    <p>Categories</p>
                  </div>
                  <div className="stat">
                    <h4>
                      {new Set(projects.flatMap(p => p.technologies)).size}
                    </h4>
                    <p>Technologies</p>
                  </div>
                </div>
              </div>
              <div className="about-features">
                <h3>Platform Features</h3>
                <ul>
                  <li>✅ Dynamic project listing with search</li>
                  <li>✅ Category-based filtering</li>
                  <li>✅ Add/delete projects in real-time</li>
                  <li>✅ Responsive design for all devices</li>
                  <li>✅ Featured projects highlighting</li>
                  <li>✅ Form validation and error handling</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
