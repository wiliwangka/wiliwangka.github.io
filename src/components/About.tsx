import React from 'react';

const About = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">About Me</h2>
        <div className="mt-6 text-gray-500">
          <p className="mt-2">
            Hello! I'm a passionate web developer with expertise in modern frontend technologies. 
            I love creating beautiful, responsive, and user-friendly websites.
          </p>
          <p className="mt-4">
            My skills include:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
          <p className="mt-4">
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or enjoying a good book on software development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;