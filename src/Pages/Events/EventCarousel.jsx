import React, { useState } from 'react';
import EventCard from './EventCard';

const EventCarousel = ({ jobs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? jobs.length - 3 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === jobs.length - 3 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className=" min-w-96 flex overflow-hidden">
        {jobs.slice(currentIndex, currentIndex + 3).map((job, index) => (
          <div key={index} className="w-1/3 p-2">
            <EventCard job={job} />
          </div>
        ))}
      </div>
      
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 -ml-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full shadow-lg"
      >
        &#8249;
      </button>
      
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 -mr-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded-full shadow-lg"
      >
        &#8250;
      </button>
    </div>
  );
};

export default EventCarousel;
