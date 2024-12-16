import { useState } from "react";
import coconut_1 from "./assets/csr/csr-coconut-1.png";
import coconut_2 from "./assets/csr/csr-coconut-2.png";
import coconut_3 from "./assets/csr/csr-coconut-3.png";
import coconut_4 from "./assets/csr/csr-coconut-4.png";
import coconut_5 from "./assets/csr/csr-coconut-5.png";
import coconut_6 from "./assets/csr/csr-coconut-6.png";
import coconut_7 from "./assets/csr/csr-coconut-7.png";
import coconut_8 from "./assets/csr/csr-coconut-8.png";
import coconut_9 from "./assets/csr/csr-coconut-9.png";

import gamaduwa_1 from "./assets/Projects/new/gamaduwa-1.png";
import gamaduwa_2 from "./assets/Projects/new/gamaduwa-2.png";

import athena_1 from "./assets/Projects/new/athena-1.png";
import athena_2 from "./assets/Projects/new/athena-2.png";
import athena_3 from "./assets/Projects/new/athena-3.png";
import athena_4 from "./assets/Projects/new/athena-4.png";
import athena_5 from "./assets/Projects/new/athena-5.png";
import athena_6 from "./assets/Projects/new/athena-6.png";
import athena_7 from "./assets/Projects/new/athena-7.png";
import athena_8 from "./assets/Projects/new/athena-8.png";
import athena_9 from "./assets/Projects/new/athena-9.png";
import athena_10 from "./assets/Projects/new/athena-10.png";
import athena_11 from "./assets/Projects/new/athena-11.png";
import athena_12 from "./assets/Projects/new/athena-12.png";

import linea_proj_1 from "./assets/Projects/new/linea-proj-1.png";
import linea_proj_2 from "./assets/Projects/new/linea-proj-2.png";
import linea_proj_3 from "./assets/Projects/new/linea-proj-3.png";
import linea_proj_4 from "./assets/Projects/new/linea-proj-4.png";
import linea_proj_5 from "./assets/Projects/new/linea-proj-5.png";

const coconuts = [
  coconut_1,
  coconut_2,
  coconut_3,
  coconut_4,
  coconut_5,
  coconut_6,
  coconut_7,
  coconut_8,
  coconut_9,
];

const gamaduwaGrid = [gamaduwa_1, gamaduwa_2];

const athenaGrid = [
  athena_1,
  athena_2,
  athena_3,
  athena_4,
  athena_5,
  athena_6,
  athena_7,
  athena_8,
  athena_9,
  athena_10,
  athena_11,
  athena_12,
];

const lineaProjGrid = [
  linea_proj_1,
  linea_proj_2,
  linea_proj_3,
  linea_proj_4,
  linea_proj_5,
];

const allImages = [
  gamaduwa_1,
  gamaduwa_2,
  athena_1,
  athena_2,
  athena_3,
  athena_4,
  athena_5,
  athena_6,
  athena_7,
  athena_8,
  athena_9,
  athena_10,
  athena_11,
  athena_12,
  linea_proj_1,
  linea_proj_2,
  linea_proj_3,
  linea_proj_4,
  linea_proj_5,
];

function ProjectsSlideshow({ images, currentIndex, onClose }) {
  const [current, setCurrent] = useState(currentIndex);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative">
        <button
          className="absolute text-xl max-sm:text-white sm:text-[#C10000] top-2 right-2 sm:px-2"
          onClick={onClose}
        >
          ✕
        </button>
        <button
          className="absolute left-0 px-4 text-4xl max-sm:text-white sm:text-[#C10000] transform -translate-y-1/2 top-1/2"
          onClick={handlePrev}
        >
          ‹
        </button>
        <img
          src={images[current]}
          alt="Slideshow"
          className="w-[90vw] max-h-[90vh] object-contain sm:px-12 bg-white"
        />
        <button
          className="absolute right-0 px-4 text-4xl max-sm:text-white sm:text-[#C10000] transform -translate-y-1/2 top-1/2"
          onClick={handleNext}
        >
          ›
        </button>
      </div>
    </div>
  );
}

function ProjectsNew() {
  const [paraVisibility, setParaVisibility] = useState(true);
  const [athenaLargeGrid, setAthenaLargeGrid] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [gamaduwaGridVisible, setGamaduwaGridVisible] = useState(true);
  const [athenaGridVisible, setAthenaGridVisible] = useState(true);
  const [lineaProjGridVisible, setlineaProjGridVisible] = useState(true);

  const toggleAllGrids = () => {
    setGamaduwaGridVisible(!gamaduwaGridVisible);
    setAthenaGridVisible(!athenaGridVisible);
    setlineaProjGridVisible(!lineaProjGridVisible);
  };

  const handleViewAll = (gridName) => {
    setParaVisibility(!paraVisibility);
    toggleAllGrids();
    switch (gridName) {
      case "Athena":
        //code
        setAthenaGridVisible(true);
        setAthenaLargeGrid(!athenaLargeGrid);
        break;
      default:
        break;
    }
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowSlideshow(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#C10000] py-6 text-white px-12 max-md:px-6 text-[40px] title">
        <h1>Our Projects</h1>
      </div>
      {/* Paragraph */}
      {paraVisibility && (
        <div className="px-12 py-6 max-md:px-6">
          <p className="text-justify line-height-abt 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            Welcome to the Projects page of JKI Holdings, where innovation meets
            excellence in construction. Our portfolio showcases a diverse range
            of projects that reflect our commitment to quality, precision, and
            sustainability. From residential developments to commercial
            ventures, infrastructure solutions to custom-built designs, we take
            pride in delivering outstanding results that exceed
            expectations.Each project is a testament to our dedication to
            craftsmanship, cutting-edge technology, and client satisfaction.
            Explore our completed and ongoing projects to witness the impact of
            JKI Holdings in transforming visions into enduring realities. Your
            dream project could be next—let’s build it together.
          </p>
        </div>
      )}

      {gamaduwaGridVisible ? (
        <>
          {/* gamaduwa header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>House Renovation - Gamudawa</h1>
          </div>
          {/* gamaduwa Photo Grid */}
          <div className="grid grid-cols-2 gap-4 px-12 max-sm:grid-cols-1 max-md:px-6">
            {gamaduwaGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`gamaduwa-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {athenaGridVisible ? (
        <>
          {/* Athena header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>Mas Athena Project Construction</h1>
          </div>
          {/* Athena Photo Grid */}
          <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
            {athenaGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`athena-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index + 2)}
                />
              </div>
            ))}
            {athenaLargeGrid ? (
              <>
                {athenaGrid.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`athena-${index + 1}`}
                      className="cursor-pointer max-sm:w-full"
                      onClick={() => handleImageClick(index + 2)}
                    />
                  </div>
                ))}
              </>
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        ""
      )}
      {/* View All / Go Back Button for athena */}
      <div className="flex justify-center px-12 py-6 underline max-md:px-6">
        <button onClick={() => handleViewAll("Athena")}>
          {paraVisibility ? "View All" : "Go Back"}
        </button>
      </div>

      {lineaProjGridVisible ? (
        <>
          {/* Linea Project header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>Mas Linea Project Construction</h1>
          </div>
          {/* Linea proj Photo Grid */}
          <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
            {lineaProjGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`linea-proj-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index + 14)}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {/* Slideshow */}
      {showSlideshow && (
        <ProjectsSlideshow
          images={allImages}
          currentIndex={currentImageIndex}
          onClose={() => setShowSlideshow(false)}
        />
      )}
    </div>
  );
}

export default ProjectsNew;
