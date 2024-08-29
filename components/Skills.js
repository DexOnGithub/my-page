"use client";

import { useState } from 'react';

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);

  const handleButtonClick = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 text-white font-semibold p-4 rounded-full shadow-2xl transform transition-transform duration-300 hover:scale-110"
      >
        <i className="fas fa-code"></i>
      </button>
      {showSkills && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-2xl dark:bg-gray-800 dark:text-white">
          <h2 className="text-xl font-bold mb-2">My Skills</h2>
          <ul className="list-disc list-inside">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Skills;
