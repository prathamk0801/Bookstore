import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-slate-900 dark:text-white py-12 px-6">

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 dark:text-gray-300">
          We are passionate about helping students learn modern technology and
          build real-world skills in programming and web development.
        </p>
      </div>

      {/* Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Image */}
        <div>
  <img
  src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
  alt="reading"
  className="w-full max-w-sm mx-auto"
/>
        </div>

        {/* Content */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg flex flex-col items-start  justify-center">
          <h2 className="text-2xl font-semibold mb-4">
            Our Mission 🚀
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Our mission is to provide high-quality courses that help beginners
            become confident developers. We focus on practical learning and
            real-world projects.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Whether you are starting your coding journey or improving your
            skills, our platform provides the right resources and guidance to
            help you succeed.
          </p>

          <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition cursor-pointer">
            Learn More
          </button>
        </div>

      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-pink-500 cursor-pointer">10K+</h2>
          <p className="text-gray-600 dark:text-gray-300">Students</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-pink-500 cursor-pointer">50+</h2>
          <p className="text-gray-600 dark:text-gray-300">Courses</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-pink-500 cursor-pointer">20+</h2>
          <p className="text-gray-600 dark:text-gray-300">Instructors</p>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-pink-500 cursor-pointer">95%</h2>
          <p className="text-gray-600 dark:text-gray-300">Success Rate</p>
        </div>

      </div>

    </div>
  );
}

export default About;