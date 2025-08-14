import React from 'react';

const Education = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Education</h2>
        <ul className="space-y-4">
          <li className="bg-gray-50 p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-700">BTech in Computer Science and engineering</h3>
            <p className="text-gray-500">College of engineering vadakara | 2022 - 2025</p>
          </li>
          <li className="bg-gray-50 p-4 rounded shadow">
            <h3 className="text-xl font-semibold text-gray-700">Diploma in computer science and engineering</h3>
            <p className="text-gray-500">SGMGHSSKolathur School | 2017 - 2019</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;