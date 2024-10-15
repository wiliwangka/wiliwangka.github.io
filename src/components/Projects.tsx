import React from 'react';

const projects = [
  { id: 1, title: 'E-commerce Platform', description: 'A full-stack e-commerce solution built with React and Node.js' },
  { id: 2, title: 'Weather App', description: 'A responsive weather application using OpenWeatherMap API' },
  { id: 3, title: 'Task Manager', description: 'A productivity app built with React and Firebase' },
  { id: 4, title: 'Portfolio Website', description: 'A personal portfolio website showcasing my projects and skills' },
];

const Projects = () => {
  return (
    <div id="projects" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Projects</h2>
        <div className="mt-10 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-500">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;