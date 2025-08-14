import React from 'react';

const Contact = () => {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-6">Feel free to reach out via the form below!</p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="email"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;