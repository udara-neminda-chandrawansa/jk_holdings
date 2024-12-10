import { Link } from "wouter";
import React, { useState } from "react";

function ServiceCard({ img, text, url, extraClasses }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative optima aspect-square bg-[#C10000] max-md:w-full cursor-pointer ${extraClasses}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt="card-img" className="object-cover w-full h-3/4" />
      <p className="flex items-center justify-center text-center text-white h-1/4">
        {text}
      </p>
      {/* Overlay */}
      {isHovered && (
        <Link href={`/services/${url}`}>
          <div className="absolute top-0 left-0 flex items-center justify-center w-full bg-black bg-opacity-50 h-3/4">
            <span className="text-sm text-white">View More Info</span>
          </div>
        </Link>
      )}
    </div>
  );
}

export default ServiceCard;
