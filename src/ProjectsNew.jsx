import { useState } from "react";

import gamaduwa_1 from "./assets/Projects/new/gamaduwa-1.png";
import gamaduwa_2 from "./assets/Projects/new/gamaduwa-2.png";

import athena_1 from "./assets/Projects/new/athena-1.png";
import athena_2 from "./assets/Projects/new/athena-2.png";
import athena_3 from "./assets/Projects/new/athena-3.png";
//import athena_4 from "./assets/Projects/new/athena-4.png";
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

import pallekele_1 from "./assets/Projects/new/pallekele-1.png";
import pallekele_2 from "./assets/Projects/new/pallekele-2.png";
import pallekele_3 from "./assets/Projects/new/pallekele-3.png";
import pallekele_4 from "./assets/Projects/new/pallekele-4.png";
import pallekele_5 from "./assets/Projects/new/pallekele-5.png";
import pallekele_6 from "./assets/Projects/new/pallekele-6.png";
import pallekele_7 from "./assets/Projects/new/pallekele-7.png";
import pallekele_8 from "./assets/Projects/new/pallekele-8.png";
import pallekele_9 from "./assets/Projects/new/pallekele-9.png";

import nirmana_1 from "./assets/Projects/new/nirmana-1.png";
import nirmana_2 from "./assets/Projects/new/nirmana-2.png";
import nirmana_3 from "./assets/Projects/new/nirmana-3.png";
import nirmana_4 from "./assets/Projects/new/nirmana-4.png";
import nirmana_5 from "./assets/Projects/new/nirmana-5.png";
import nirmana_6 from "./assets/Projects/new/nirmana-6.png";
import nirmana_7 from "./assets/Projects/new/nirmana-7.png";
import nirmana_8 from "./assets/Projects/new/nirmana-8.png";
import nirmana_9 from "./assets/Projects/new/nirmana-9.png";

import nobles_1 from "./assets/Projects/new/nobles-1.png";
import nobles_2 from "./assets/Projects/new/nobles-2.png";
import nobles_3 from "./assets/Projects/new/nobles-3.png";
import nobles_4 from "./assets/Projects/new/nobles-4.png";
import nobles_5 from "./assets/Projects/new/nobles-5.png";
import nobles_6 from "./assets/Projects/new/nobles-6.png";
import nobles_7 from "./assets/Projects/new/nobles-7.png";

import tj_1 from "./assets/Projects/new/tj-1.png";
import tj_2 from "./assets/Projects/new/tj-2.png";
import tj_3 from "./assets/Projects/new/tj-3.png";

const gamaduwaGrid = [gamaduwa_1, gamaduwa_2];

const athenaGrid = [athena_1, athena_2, athena_3, athena_5, athena_6];

const athenaLargeGrid = [
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

const pallekeleGrid = [
  pallekele_1,
  pallekele_2,
  pallekele_3,
  pallekele_4,
  pallekele_5,
  pallekele_6,
];

const pallekeleLargeGrid = [pallekele_7, pallekele_8, pallekele_9];

const nirmanaGrid = [
  nirmana_1,
  nirmana_2,
  nirmana_3,
];
const nirmanaLargeGrid = [nirmana_7, nirmana_8, nirmana_9];

const noblesGrid = [
    nobles_1,
    nobles_2,
    nobles_3,
    nobles_4,
    nobles_5,
    nobles_6,
    nobles_7,
  ];

  const tjGrid = [
    tj_1,
    tj_2,
    tj_3,
  ];
    
const allImages = [
  gamaduwa_1,
  gamaduwa_2,
  athena_1,
  athena_2,
  athena_3,
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
  pallekele_1,
  pallekele_2,
  pallekele_3,
  pallekele_4,
  pallekele_5,
  pallekele_6,
  pallekele_7,
  pallekele_8,
  pallekele_9,
  nirmana_1,
  nirmana_2,
  nirmana_3,
  nirmana_4,
  nirmana_5,
  nirmana_6,
  nirmana_7,
  nirmana_8,
  nirmana_9,
  nobles_1,
  nobles_2,
  nobles_3,
  nobles_4,
  nobles_5,
  nobles_6,
  nobles_7,
  tj_1,
  tj_2,
  tj_3,
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
  const [showSlideshow, setShowSlideshow] = useState(false);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [gamaduwaGridVisible, setGamaduwaGridVisible] = useState(true);
  const [athenaGridVisible, setAthenaGridVisible] = useState(true);
  const [lineaProjGridVisible, setLineaProjGridVisible] = useState(true);
  const [pallekeleGridVisible, setPallekeleGridVisible] = useState(true);
  const [nirmanaGridVisible, setNirmanaGridVisible] = useState(true);
  const [noblesGridVisible, setNoblesGridVisible] = useState(true);
  const [tjGridVisible, setTjGridVisible] = useState(true);

  const [athenaLargeGridVisible, setAthenaLargeGridVisible] = useState(false);
  const [pallekeleLargeGridVisible, setPallekeleLargeGridVisible] =
    useState(false);
  const [nirmanaLargeGridVisible, setNirmanaLargeGridVisible] = useState(false);

  const toggleAllGrids = () => {
    setGamaduwaGridVisible(!gamaduwaGridVisible);
    setAthenaGridVisible(!athenaGridVisible);
    setLineaProjGridVisible(!lineaProjGridVisible);
    setPallekeleGridVisible(!pallekeleGridVisible);
    setNirmanaGridVisible(!nirmanaGridVisible);
    setNoblesGridVisible(!noblesGridVisible);
    setTjGridVisible(!tjGridVisible);
  };

  const handleViewAll = (gridName) => {
    setParaVisibility(!paraVisibility);
    toggleAllGrids();
    switch (gridName) {
      case "Athena":
        //code
        setAthenaGridVisible(true);
        setAthenaLargeGridVisible(!athenaLargeGridVisible);
        break;
      case "Pallekele":
        //code
        setPallekeleGridVisible(true);
        setPallekeleLargeGridVisible(!pallekeleLargeGridVisible);
        break;
      case "Nirmana":
        //code
        setNirmanaGridVisible(true);
        setNirmanaLargeGridVisible(!nirmanaLargeGridVisible);
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
            <h1>Construction works & Landscape MAS Athena - Thulhiriya</h1>
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
            {athenaLargeGridVisible ? (
              <>
                {athenaLargeGrid.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`athena-${index + 1}`}
                      className="cursor-pointer max-sm:w-full"
                      onClick={() => handleImageClick(index + 8)}
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

      {athenaGridVisible ? (
        <>
          {/* View All / Go Back Button for athena */}
          <div className="flex justify-center px-12 py-6 underline max-md:px-6">
            <button onClick={() => handleViewAll("Athena")}>
              {paraVisibility ? "View All" : "Go Back"}
            </button>
          </div>
        </>
      ) : (
        ""
      )}

      {lineaProjGridVisible ? (
        <>
          {/* Linea Project header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>MAS Linea Project Construction</h1>
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

      {pallekeleGridVisible ? (
        <>
          {/* pallekele header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>MAS Linea Clothing - Pallekele</h1>
          </div>
          {/* pallekele Photo Grid */}
          <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
            {pallekeleGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`pallekele-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index + 19)}
                />
              </div>
            ))}
            {pallekeleLargeGridVisible ? (
              <>
                {pallekeleLargeGrid.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`pallekele-${index + 1}`}
                      className="cursor-pointer max-sm:w-full"
                      onClick={() => handleImageClick(index + 25)}
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

      {pallekeleGridVisible ? (
        <>
          {/* View All / Go Back Button for pallekele */}
          <div className="flex justify-center px-12 py-6 underline max-md:px-6">
            <button onClick={() => handleViewAll("Pallekele")}>
              {paraVisibility ? "View All" : "Go Back"}
            </button>
          </div>
        </>
      ) : (
        ""
      )}

      {nirmanaGridVisible ? (
        <>
          {/* nirmana header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>MAS Nirmana Landscaping - Katunayake</h1>
          </div>
          {/* nirmana Photo Grid */}
          <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
            {nirmanaGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`nirmana-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index + 28)}
                />
              </div>
            ))}
            {nirmanaLargeGridVisible ? (
              <>
                {nirmanaLargeGrid.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`nirmana-${index + 1}`}
                      className="cursor-pointer max-sm:w-full"
                      onClick={() => handleImageClick(index + 34)}
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

      {nirmanaGridVisible ? (
        <>
          {/* View All / Go Back Button for nirmana */}
          <div className="flex justify-center px-12 py-6 underline max-md:px-6">
            <button onClick={() => handleViewAll("Nirmana")}>
              {paraVisibility ? "View All" : "Go Back"}
            </button>
          </div>
        </>
      ) : (
        ""
      )}

      {noblesGridVisible ? (
        <>
          {/* Nobles header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>Nobles Manufacturing (Pvt)Ltd</h1>
          </div>
          {/* Nobles Photo Grid */}
          <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
            {noblesGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`nobles-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index + 37)}
                />
              </div>
            ))}
          </div>
        </>
      ) : (
        ""
      )}

      {tjGridVisible ? (
        <>
          {/* TJ header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>TJ Awissawella</h1>
          </div>
          {/* TJ Photo Grid */}
          <div className="grid grid-cols-3 gap-4 px-12 pb-6 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
            {tjGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`tj-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index + 44)}
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
