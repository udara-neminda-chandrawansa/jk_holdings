import banner_1 from "./assets/banner-1.jpg";
import banner_2 from "./assets/banner-2.jpg";
import banner_3 from "./assets/banner-3.jpg";
import Card_1 from "./assets/ServiceCards/card_1.jpg";
import Card_2 from "./assets/ServiceCards/card_2.jpg";
import Card_3 from "./assets/ServiceCards/card_3.jpg";
import Card_4 from "./assets/ServiceCards/card_4.png";
import misson_banner from "./assets/mission_bg.jpg";
import abt_man from "./assets/about_man.png";
import { useState, useEffect } from "react";
import Carousel from "./components/LandingServiceCar";
import ServiceCard from "./components/ServiceCard";

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
            className={`2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base transition-all duration-300 ${
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
          <div className="w-full h-[10dvh] bg-[#C10000] max-sm:hidden">
            <Carousel></Carousel>
          </div>
          {/*spacing*/}
          <div className="w-full h-[5dvh]"></div>
        </div>
      </div>
      {/*Services*/}
      <div className="h-fit">
        {/*text*/}
        <div className="flex flex-col gap-6 p-6 max-md:p-3">
          <h1 className="text-[30px] text-[#C10000]">Our Services</h1>
          <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            At A J I Construction, we are dedicated to transforming your visions
            into reality with unparalleled expertise and craftsmanship. Our
            comprehensive range of services ensures every aspect of your
            construction project is handled with precision, innovation, and
            care.
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 p-6 max-md:flex-col">
          <ServiceCard img={Card_1} text={"Construction"}></ServiceCard>
          <ServiceCard img={Card_2} text={"Facility Management"}></ServiceCard>
          <ServiceCard img={Card_3} text={"Getaways"}></ServiceCard>
          <ServiceCard
            img={Card_4}
            text={"Architectural Designing"}
          ></ServiceCard>
        </div>
      </div>
      {/*Mission*/}
      <div
        className="flex flex-col justify-center relative h-[60dvh] bg-no-repeat bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${misson_banner})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute bottom-0 h-[60dvh] inset-0 bg-gradient-to-br from-[#4B4B4BB5] to-[#000000B5]"></div>
        {/*text*/}
        <div className="z-10 flex flex-col gap-6 pl-12 text-white max-md:pl-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px]">
              Our Mission
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              Build everlasting relationships through architectonic
              constructions & innovative, economic & exceptional customer
              service, and evolve continuously along with advanced technology
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px]">
              Our Services
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              To be the epitome of Service Providing industry
            </p>
          </div>
        </div>
      </div>
      {/*About*/}
      <div className="flex flex-col gap-6 p-12 h-fit max-md:p-6">
        <div>
          <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            JKI Holdings is a Pioneer in Construction, Facility Management, and
            Landscaping services in Sri Lanka since 2001. The company commenced
            its journey with 2 employees. By 2014, the company established its
            trademark with 300+ employees and it was recognized and awarded for
            its 'Excellence' at the Star Awards Ceremony organized by the
            Department of Industrial Development & Enterprise Promotion along
            with National Enterprise Development Authority (NEDA) of Sri Lanka
            in 2015 to 2020. The company provides teams of dynamic and
            professional achievers, who excel through enthusiasm, determination
            and commitment, delivering an outstanding service, surpassing client
            expectations at every opportunity. We, at JKI Holdings, value
            Transparency, Integrity and Ethics more than anything, and we are
            dedicated to cater to our clients' needs through innovation and
            continuous improvement
          </p>
        </div>
        <div className="relative flex h-[45dvh] max-md:h-fit max-md:flex-col">
          <img
            src={abt_man}
            className="absolute max-md:relative max-md:h-[300px] max-md:object-contain bottom-0 z-10 max-2xl:h-[55dvh] h-[50dvh] object-cover"
            alt="about-img"
          />
          <div className="absolute text-white pr-12 max-md:pr-6 max-sm:pr-3 right-0 bottom-0 w-full h-0 border-b-[45dvh] border-b-[#C10000] border-l-[400px] border-r-0 border-l-transparent max-lg:hidden"></div>
          <div className="absolute flex items-center justify-end w-full h-full pr-12 max-md:relative max-md:items-start max-md:justify-center max-md:text-center max-md:py-6 max-lg:pr-0 max-lg:text-end">
          <h1 className="w-1/2 text-white max-md:w-full max-md:text-center lg:line-height-abt max-lg:text-black">
              <span className="hidden lg:inline text-[60px] max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
                “
              </span>
              <span className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              Taniya Group, a pioneer in building construction  industry, came to be known as JKI Holdings in the year 2001. Since then, we have expanded our services from building construction to Interior Designing, Landscaping, Aluminum Fabrication, Pest Control and Facility Management, to fulfil al our clients' requirements in commercial and residential establishments.  We have already commenced our operations in Tourism Industry, and we are determined to commence our operations in the Information Technology Industry as wel. As the Founder, I started this organization, so that we as a “Nation” can grow together and sustain our footprint in the world as a Proud Nation and bring international revenues into the 
              </span>
              <span className="hidden lg:inline absolute text-[60px] max-md:text-[30px] max-lg:text-[40px] max-xl:text-5xl">
                ”
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
