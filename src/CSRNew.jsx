import { useState } from "react";
import coconut_1 from "./assets/csr/coconut-1.jpg";
import coconut_2 from "./assets/csr/coconut-2.jpg";
import coconut_3 from "./assets/csr/coconut-3.jpg";
import coconut_4 from "./assets/csr/coconut-4.jpg";
import coconut_5 from "./assets/csr/coconut-5.jpg";
import coconut_6 from "./assets/csr/coconut-6.jpg";
import coconut_7 from "./assets/csr/coconut-7.jpg";
import coconut_8 from "./assets/csr/coconut-8.jpg";
import coconut_9 from "./assets/csr/coconut-9.jpg";
import coconut_10 from "./assets/csr/coconut-10.jpg";
import coconut_11 from "./assets/csr/coconut-11.jpg";
import coconut_12 from "./assets/csr/coconut-12.jpg";
import coconut_13 from "./assets/csr/coconut-13.jpg";
import coconut_14 from "./assets/csr/coconut-14.jpg";
import coconut_15 from "./assets/csr/coconut-15.jpg";
import coconut_16 from "./assets/csr/coconut-16.jpg";
import coconut_17 from "./assets/csr/coconut-17.jpg";
import coconut_18 from "./assets/csr/coconut-18.jpg";
import coconut_19 from "./assets/csr/coconut-19.jpg";
import coconut_20 from "./assets/csr/coconut-20.jpg";
import coconut_21 from "./assets/csr/coconut-21.jpg";

import bnc_1 from "./assets/csr/bnc-kundasale/1.jpg";
import bnc_3 from "./assets/csr/bnc-kundasale/3.jpg";
//import bnc_5 from "./assets/csr/bnc-kundasale/5.jpg";
import bnc_6 from "./assets/csr/bnc-kundasale/6.jpg";
//import bnc_8 from "./assets/csr/bnc-kundasale/8.jpg";
//import bnc_9 from "./assets/csr/bnc-kundasale/9.jpg";
import bnc_12 from "./assets/csr/bnc-kundasale/12.jpg";
import bnc_15 from "./assets/csr/bnc-kundasale/15.jpg";
import bnc_19 from "./assets/csr/bnc-kundasale/19.jpg";
import bnc_20 from "./assets/csr/bnc-kundasale/20.jpg";
import bnc_25 from "./assets/csr/bnc-kundasale/25.jpg";
import bnc_26 from "./assets/csr/bnc-kundasale/26.jpg";
import bnc_29 from "./assets/csr/bnc-kundasale/29.jpg";
import bnc_34 from "./assets/csr/bnc-kundasale/34.jpg";
import bnc_35 from "./assets/csr/bnc-kundasale/35.jpg";

const CoconutSmallGrid = [
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

const CoconutLargeGrid = [
  coconut_10,
  coconut_11,
  coconut_12,
  coconut_13,
  coconut_14,
  coconut_15,
  coconut_16,
  coconut_17,
  coconut_18,
  coconut_19,
  coconut_20,
  coconut_21,
];

const BNCSmallGrid = [bnc_1, bnc_3, bnc_6, bnc_12, bnc_15, bnc_19];

const BNCLargeGrid = [bnc_20, bnc_25, bnc_26, bnc_29, bnc_34, bnc_35];

const FullGrid = [
  coconut_1,
  coconut_2,
  coconut_3,
  coconut_4,
  coconut_5,
  coconut_6,
  coconut_7,
  coconut_8,
  coconut_9,
  coconut_10,
  coconut_11,
  coconut_12,
  coconut_13,
  coconut_14,
  coconut_15,
  coconut_16,
  coconut_17,
  coconut_18,
  coconut_19,
  coconut_20,
  coconut_21,
  bnc_1,
  bnc_3,
  bnc_6,
  bnc_12,
  bnc_15,
  bnc_19,
  bnc_20,
  bnc_25,
  bnc_26,
  bnc_29,
  bnc_34,
  bnc_35,
];

function CSRSlideshow({ images, currentIndex, onClose }) {
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

function CSRNew() {
  const [paraVisibility, setParaVisibility] = useState(true);

  const [coconutGridVisible, setCoconutGridVisible] = useState(true);
  const [bncGridVisible, setBNCGridVisible] = useState(true);

  const [coconutLargeGridVisible, setCoconutLargeGridVisible] = useState(false);
  const [bncLargeGridVisible, setBNCLargeGridVisible] = useState(false);

  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleAllGrids = () => {
    setCoconutGridVisible(!coconutGridVisible);
    setBNCGridVisible(!bncGridVisible);
  };

  const handleViewAll = (gridName) => {
    setParaVisibility(!paraVisibility);
    toggleAllGrids();
    switch (gridName) {
      case "coconut":
        setCoconutGridVisible(true);
        setCoconutLargeGridVisible(!coconutLargeGridVisible);
        break;
      case "bnc":
        setBNCGridVisible(true);
        setBNCLargeGridVisible(!bncLargeGridVisible);
        break;
      default:
        break;
    }
    setCoconutLargeGridVisible(!coconutLargeGridVisible);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setShowSlideshow(true);
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#C10000] py-6 text-white px-12 max-md:px-6 text-[40px] title">
        <h1>Our CSR Projects</h1>
      </div>
      {/* Paragraph */}
      {paraVisibility && (
        <div className="px-12 py-6 max-md:px-6">
          <p className="text-justify line-height-abt 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            At JKI Holdings, we believe that building communities goes beyond
            constructing buildings; it’s about uplifting lives and fostering
            sustainable development. Through our Social Care Project, we are
            committed to making a positive impact on society by addressing
            critical social and environmental challenges.
          </p>
        </div>
      )}
      {coconutGridVisible ? (
        <>
          {/* Coconut Header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>Coconut plant’s contribution</h1>
          </div>
          {/* Coconut Photo Grid */}
          <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
            {CoconutSmallGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`csr-coconut-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
            {coconutLargeGridVisible &&
              CoconutLargeGrid.map((image, index) => (
                <div key={index + CoconutSmallGrid.length}>
                  <img
                    src={image}
                    alt={`csr-coconut-${index + 1}`}
                    className="cursor-pointer max-sm:w-full"
                    onClick={() =>
                      handleImageClick(index + CoconutSmallGrid.length)
                    }
                  />
                </div>
              ))}
          </div>
          {/* View All / Go Back Button (Coconut) */}
          <div className="flex justify-center px-12 py-6 underline max-md:px-6">
            <button onClick={() => handleViewAll("coconut")}>
              {paraVisibility ? "View All" : "Go Back"}
            </button>
          </div>
        </>
      ) : (
        ""
      )}

      {bncGridVisible ? (
        <>
          {/* BNC Header */}
          <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
            <h1>
              Tree Planting Programme at SWRD Bandaranayaka National College,
              Kundasale
            </h1>
          </div>
          {/* BNC Photo Grid */}
          <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
            {BNCSmallGrid.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`csr-bnc-${index + 1}`}
                  className="cursor-pointer max-sm:w-full"
                  onClick={() => handleImageClick(index)}
                />
              </div>
            ))}
            {bncLargeGridVisible &&
              BNCLargeGrid.map((image, index) => (
                <div key={index + BNCSmallGrid.length}>
                  <img
                    src={image}
                    alt={`csr-bnc-${index + 1}`}
                    className="cursor-pointer max-sm:w-full"
                    onClick={() =>
                      handleImageClick(index + BNCSmallGrid.length)
                    }
                  />
                </div>
              ))}
          </div>
          {/* View All / Go Back Button (BNC) */}
          <div className="flex justify-center px-12 py-6 underline max-md:px-6">
            <button onClick={() => handleViewAll("bnc")}>
              {paraVisibility ? "View All" : "Go Back"}
            </button>
          </div>
        </>
      ) : (
        ""
      )}

      {/* Slideshow */}
      {showSlideshow && (
        <CSRSlideshow
          images={FullGrid}
          currentIndex={currentImageIndex}
          onClose={() => setShowSlideshow(false)}
        />
      )}
    </div>
  );
}

export default CSRNew;
