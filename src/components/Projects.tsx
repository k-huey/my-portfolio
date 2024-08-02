import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                <div className="project-item">
                    <h3>Placeholder 1</h3>
                    <p>Description of project 1.</p>
                </div>
                <div className="project-item">
                    <h3>Placeholder 2</h3>
                    <p>Description of project 2.</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
