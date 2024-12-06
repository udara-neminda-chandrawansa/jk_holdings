import React, { useState, useEffect } from "react";

const CLCarousel = ({ item1, item2, item3 }) => {
  const slides = [item1, item2, item3]; // Store the slides in a simple array
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="relative w-full h-[500px] grid place-content-center overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-shrink-0 w-full h-full"
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute flex justify-center w-full gap-2 bottom-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-[100px] h-2 rounded-full ${
              currentIndex === index ? "bg-red-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CLCarousel;
