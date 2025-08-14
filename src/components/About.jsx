import React from 'react';
import a1Image from '../components/a1.jpg'

const About = () => {
  return (
    <section className="py-12 px-4 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600">
          Hi! I'm a passionate web developer who loves building clean and responsive websites. With a focus on frontend technologies like React and Tailwind CSS, I aim to create engaging and accessible digital experiences.
        </p>
        <img src={a1Image} alt="About"/>
      </div>
    </section>
  );
};

export default About;