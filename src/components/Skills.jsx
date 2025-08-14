import React from 'react';

const Project = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-700">Portfolio Website</h3>
            <p className="text-gray-600 mt-2">A personal portfolio site made with React and Tailwind CSS to showcase my projects and skills.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-700">Weather App</h3>
            <p className="text-gray-600 mt-2">A weather app that fetches real-time data using a weather API. Built using React and styled with Tailwind.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;