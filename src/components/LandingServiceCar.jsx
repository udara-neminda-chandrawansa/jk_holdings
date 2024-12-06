import React, { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    <div className="w-3/4 h-full bg-white">
      <ul className="flex items-center h-full px-6 text-center text-black justify-evenly">
        <li>
          <p className="uppercase">Residential</p>
          <p>Construction</p>
        </li>
        <li className="h-1/2 bg-black w-[1px]"></li>
        <li>
          <p className="uppercase">Commercial</p>
          <p>Construction</p>
        </li>
        <li className="h-1/2 bg-black w-[1px]"></li>
        <li>
          <p className="uppercase">Architectural</p>
          <p>Designing</p>
        </li>
        <li className="h-1/2 bg-black w-[1px]"></li>
        <li>
          <p className="uppercase">Interior</p>
          <p>Designing</p>
        </li>
      </ul>
    </div>,
    <div className="w-3/4 h-full bg-white">
      <ul className="flex items-center h-full px-6 text-center text-black justify-evenly">
        <li>
          <p className="uppercase">Aluminium</p>
          <p>Fabrication</p>
        </li>
        <li className="h-1/2 bg-black w-[1px]"></li>
        <li>
          <p className="uppercase">Electrical</p>
          <p>Services</p>
        </li>
        <li className="h-1/2 bg-black w-[1px]"></li>
        <li>
          <p className="uppercase">Property</p>
          <p>Management</p>
        </li>
        <li className="h-1/2 bg-black w-[1px]"></li>
        <li>
          <p className="uppercase">Janitorial</p>
          <p>Services</p>
        </li>
      </ul>
    </div>,
    <div className="w-3/4 h-full bg-white">
      <ul className="flex items-center h-full px-6 text-center text-black justify-evenly">
        <li>
          <p className="uppercase">Landscape</p>
          <p>Designing</p>
        </li>
        <li className="h-1/2 bg-black w-[1px]"></li>
        <li>
          <p className="uppercase">Garden</p>
          <p>Maintenance</p>
        </li>
        <li className="h-1/2 bg-black w-[1px]"></li>
        <li>
          <p className="uppercase">Getaways</p>
        </li>
      </ul>
    </div>,
  ];

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[10dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute z-10 flex items-center justify-between w-full px-12 transform -translate-y-1/2 max-lg:px-6 top-1/2">
        <button
          onClick={goToPrevious}
          className="px-4 py-2 text-white rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="scale-125 bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="px-4 py-2 text-white rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="scale-125 bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center w-full h-full transition-transform duration-500 ease-in-out">
        {slides[currentIndex]}
      </div>
    </div>
  );
};

export default Carousel;
