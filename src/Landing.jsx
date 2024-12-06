import banner_1 from "./assets/banner-1.jpg";
import banner_2 from "./assets/banner-2.jpg";
import banner_3 from "./assets/banner-3.jpg";
import { useState, useEffect } from "react";

function Landing() {
  const banners = [
    // for storing images and banner text
    {
      img: banner_1,
      text: "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",
    },
    {
      img: banner_2,
      text: "Build everlasting relationships through architectonic constructions & innovative, economic & exceptional customer service, and evolve continuously along with advanced technology.",
    },
    {
      img: banner_3,
      text: "To be the epitome of Service Providing industry.",
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0); // initialize current banner
  const [isTransitioning, setIsTransitioning] = useState(false); // initialize text transitioning

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % banners.length);
        setIsTransitioning(false);
      }, 300); // Match transition delay in bg
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  });

  return (
    <>
      {/*Banner*/}
      <div
        className="relative flex flex-col justify-between h-[90dvh] bg-no-repeat bg-cover transition-all delay-300"
        style={{ backgroundImage: `url(${banners[currentBanner].img})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute bottom-0 h-[90dvh] inset-0 bg-gradient-to-br from-[#4B4B4BB5] to-[#000000B5]"></div>
        {/*carousel lines*/}
        <div className="z-10 h-[10dvh] flex justify-end max-sm:justify-center max-sm:pr-0 items-center pr-12 gap-6">
          <span
            className={`w-[50px] h-[2px] transition-all ${
              currentBanner === 0 ? "bg-red-600" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-[50px] h-[2px] transition-all ${
              currentBanner === 1 ? "bg-red-600" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-[50px] h-[2px] transition-all ${
              currentBanner === 2 ? "bg-red-600" : "bg-white"
            }`}
          ></span>
        </div>
        {/*text*/}
        <div className="z-10 w-3/4 ml-6 text-white h-1/3 2xl:h-1/4">
          <h1 className="text-[64px] max-sm:mb-3 sm:mb-1 lg:mb-3 xl:mb-6 max-md:text-[45px] max-sm:text-[30px]">
            To be the epitome of Service Providing industry.
          </h1>
          <p
            className={`2xl:text-xl xl:text-lg max-md:text-base max-sm:text-sm transition-all duration-300 ${
              isTransitioning
                ? "opacity-0 translate-y-5"
                : "opacity-100 translate-y-0"
            }`}
          >
            {banners[currentBanner].text}
          </p>
        </div>
        {/*banner bottom*/}
        <div className="z-10">
          {/*service carousel*/}
          <div className="w-full h-[10dvh] bg-red-600 max-sm:hidden">
          </div>
          {/*spacing*/}
          <div className="w-full h-[5dvh]"></div>
        </div>
      </div>
      {/*Services*/}
      <div className="h-[30dvh]"></div>
    </>
  );
}

export default Landing;
