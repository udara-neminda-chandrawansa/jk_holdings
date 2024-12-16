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

const smallImagesGrid = [
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

function Slideshow({ images, currentIndex, onClose }) {
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
  const [largeGrid, setLargeGrid] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleViewAll = () => {
    setParaVisibility(!paraVisibility);
    setLargeGrid(!largeGrid);
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
      {/* Second Header */}
      <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
        <h1>Coconut plant’s contribution</h1>
      </div>
      {/* Photo Grid */}
      <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
        {smallImagesGrid.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`csr-coconut-${index + 1}`}
              className="cursor-pointer max-sm:w-full"
              onClick={() => handleImageClick(index)}
            />
          </div>
        ))}
        {largeGrid &&
          smallImagesGrid.map((image, index) => (
            <div key={index + smallImagesGrid.length}>
              <img
                src={image}
                alt={`csr-coconut-${index + 1}`}
                className="cursor-pointer max-sm:w-full"
                onClick={() => handleImageClick(index)}
              />
            </div>
          ))}
      </div>
      {/* View All / Go Back Button */}
      <div className="flex justify-center px-12 py-6 underline max-md:px-6">
        <button onClick={handleViewAll}>
          {paraVisibility ? "View All" : "Go Back"}
        </button>
      </div>
      {/* Slideshow */}
      {showSlideshow && (
        <Slideshow
          images={smallImagesGrid}
          currentIndex={currentImageIndex}
          onClose={() => setShowSlideshow(false)}
        />
      )}
    </div>
  );
}

export default CSRNew;
