import banner_1 from "./assets/banner-1.jpg";
import banner_2 from "./assets/banner-2.jpg";
import banner_3 from "./assets/banner-3.jpg";
import Card_1 from "./assets/ServiceCards/card_1.jpg";
import Card_2 from "./assets/ServiceCards/card_2.jpg";
import Card_3 from "./assets/ServiceCards/card_3.jpg";
import Card_4 from "./assets/ServiceCards/card_4.png";
import misson_banner from "./assets/mission_bg.jpg";
import client_banner from "./assets/clients_bg.png";
import client1 from "./assets/clients/brandix.png";
import client2 from "./assets/clients/mas.png";
import client3 from "./assets/clients/kanrich.png";
import client4 from "./assets/clients/dimo.png";
import client5 from "./assets/clients/cbl.png";
import client6 from "./assets/clients/nestle.png";
import client7 from "./assets/clients/hela.png";
import client8 from "./assets/clients/esquel.png";
import abt_man from "./assets/about_man.png";
import m_1 from "./assets/milestones/m-1.png";
import m_2 from "./assets/milestones/m-2.png";
import m_3 from "./assets/milestones/m-3.png";
import m_4 from "./assets/milestones/m-4.png";
import { useState, useEffect } from "react";
import LSCarousel from "./components/LandingServiceCar";
import ServiceCard from "./components/ServiceCard";

function About() {
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
    <div>
      {/*Mission*/}
      <div
        className="flex flex-col justify-center relative h-[60dvh] bg-no-repeat bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${misson_banner})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute bottom-0 h-[60dvh] inset-0 bg-gradient-to-br from-[#4B4B4BB5] to-[#000000B5]"></div>
        {/*text*/}
        <div className="z-10 flex flex-col w-3/4 gap-6 pl-12 text-white line-height-abt max-md:pl-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] title">
              Our Mission
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              Build everlasting relationships through architectonic
              constructions & innovative, economic & exceptional customer
              service, and evolve continuously along with advanced technology
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] title">
              Our Vision
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              To be the epitome of Service Providing industry
            </p>
          </div>
        </div>
      </div>
      {/*About*/}
      <div className="flex flex-col p-12 h-fit max-md:p-6 line-height-abt">
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
        {/*spacing div*/}
        <div className="md:h-[20dvh]"></div>
        <div className="relative flex h-[55dvh] min-h-fit max-md:h-fit max-md:flex-col">
          {/*about-man*/}
          <img
            src={abt_man}
            className="absolute md:w-1/2 max-md:relative max-md:h-[300px] bottom-0 z-10 max-2xl:h-[70dvh] h-[60dvh] object-contain object-bottom"
            alt="about-img"
          />
          {/*trapezoid*/}
          <div className="absolute text-white pr-12 max-md:pr-6 max-sm:pr-3 right-0 bottom-0 w-full h-0 border-b-[55dvh] border-b-[#C10000] border-l-[400px] border-r-0 border-l-transparent max-lg:hidden"></div>
          {/*trapezoid text*/}
          <div className="absolute flex items-end justify-end w-full h-full pr-12 overflow-y-scroll lg:items-center max-md:relative max-md:items-start max-md:justify-center max-md:text-center max-md:py-6 max-lg:pr-0 max-lg:text-end min-h-fit no-scrollbar">
            <h1 className="z-20 w-1/2 text-white max-md:w-full max-md:text-start max-lg:text-black">
              <span className="hidden lg:inline text-[60px] max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
                “
              </span>
              <span className="z-10 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt">
                Taniya Group, a pioneer in building construction industry, came
                to be known as JKI Holdings in the year 2001. Since then, we
                have expanded our services from building construction to
                Interior Designing, Landscaping, Aluminum Fabrication, Pest
                Control and Facility Management, to fulfil al our clients'
                requirements in commercial and residential establishments. We
                have already commenced our operations in Tourism Industry, and
                we are determined to commence our operations in the Information
                Technology Industry as wel. As the Founder, I started this
                organization, so that we as a “Nation” can grow together and
                sustain our footprint in the world as a Proud Nation and bring
                international revenues into the
              </span>
              <span className="hidden lg:inline absolute text-[60px] max-md:text-[30px] max-lg:text-[40px] max-xl:text-5xl">
                ”
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/*Clients*/}
      <div
        className="relative flex flex-col justify-center py-6 bg-fixed bg-opacity-0 bg-center bg-no-repeat bg-cover h-fit"
        style={{ backgroundImage: `url(${client_banner})` }}
      >
        <div className="flex flex-col gap-6 p-12 max-md:p-6">
          <h1 className="text-[30px] text-[#C10000] title">Our Main Clients</h1>
          <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt">
            At JKI Construction, our clients are at the heart of everything we
            do. We are proud to have partnered with individuals, businesses, and
            organizations across diverse industries to bring their construction
            visions to life.
          </p>
        </div>
        {/*client carousel for md*/}
        <div
          id="animation-carousel"
          className="relative w-full py-6 h-fit max-md:hidden"
          data-carousel="static"
        >
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <div className="grid w-full h-full grid-cols-4 gap-6 place-content-center place-items-center">
                <img src={client1} className="w-[100px]" alt="client-card" />
                <img src={client2} className="w-[100px]" alt="client-card" />
                <img src={client3} className="w-[100px]" alt="client-card" />
                <img src={client4} className="w-[100px]" alt="client-card" />
                <img src={client5} className="w-[100px]" alt="client-card" />
                <img src={client6} className="w-[100px]" alt="client-card" />
                <img src={client7} className="w-[100px]" alt="client-card" />
                <img src={client8} className="w-[100px]" alt="client-card" />
              </div>
            </div>

            <div className="hidden duration-200 ease-linear" data-carousel-item>
              <div className="grid w-full h-full grid-cols-4 gap-6 place-content-center place-items-center">
                <img src={client1} className="w-[100px]" alt="client-card" />
                <img src={client2} className="w-[100px]" alt="client-card" />
                <img src={client3} className="w-[100px]" alt="client-card" />
                <img src={client4} className="w-[100px]" alt="client-card" />
                <img src={client5} className="w-[100px]" alt="client-card" />
                <img src={client6} className="w-[100px]" alt="client-card" />
                <img src={client7} className="w-[100px]" alt="client-card" />
                <img src={client8} className="w-[100px]" alt="client-card" />
              </div>
            </div>

            <div
              className="hidden duration-200 ease-linear"
              data-carousel-item="active"
            >
              <div className="grid w-full h-full grid-cols-4 gap-6 place-content-center place-items-center">
                <img src={client1} className="w-[100px]" alt="client-card" />
                <img src={client2} className="w-[100px]" alt="client-card" />
                <img src={client3} className="w-[100px]" alt="client-card" />
                <img src={client4} className="w-[100px]" alt="client-card" />
                <img src={client5} className="w-[100px]" alt="client-card" />
                <img src={client6} className="w-[100px]" alt="client-card" />
                <img src={client7} className="w-[100px]" alt="client-card" />
                <img src={client8} className="w-[100px]" alt="client-card" />
              </div>
            </div>
          </div>
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 rtl:space-x-reverse bottom-5 left-1/2">
            <button
              type="button"
              className="w-[50px] h-1 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-[50px] h-1 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-[50px] h-1 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
          </div>
        </div>
        {/*client grid for max-md*/}
        <div className="p-3 md:hidden max-md:flex">
          <div className="grid w-full h-full grid-cols-4 gap-6 place-content-center place-items-center">
            <img src={client1} className="w-[100px]" alt="client-card" />
            <img src={client2} className="w-[100px]" alt="client-card" />
            <img src={client3} className="w-[100px]" alt="client-card" />
            <img src={client4} className="w-[100px]" alt="client-card" />
            <img src={client5} className="w-[100px]" alt="client-card" />
            <img src={client6} className="w-[100px]" alt="client-card" />
            <img src={client7} className="w-[100px]" alt="client-card" />
            <img src={client8} className="w-[100px]" alt="client-card" />
          </div>
        </div>
      </div>
      {/*Milestones*/}
      <div className="h-fit">
        <div className="flex flex-col gap-6 p-12 h-fit max-md:p-6">
          <h1 className="text-[30px] text-[#C10000] title">Our Milestones</h1>
          {/*for md*/}
          <div className="hidden h-full gap-3 text-white md:flex">
            <div className="flex flex-col flex-grow w-2/6 h-full gap-3">
              <div className="flex flex-col cursor-pointer">
                <img src={m_1} alt="" className="h-[500px] object-cover" />
                <p className="bg-[#000000BD] p-3">
                  Best Coming Entrepreneur of 2015 in Central Province
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow w-1/6 gap-3">
              <div className="flex flex-col cursor-pointer h-1/2">
                <img src={m_2} alt="" className="object-cover h-full" />
                <p className="bg-[#000000BD] p-3">
                  Best Performing Entrepreneur of 2016 in Central Province
                </p>
              </div>
              <div className="flex flex-col cursor-pointer h-1/2">
                <img src={m_3} alt="" className="object-cover h-full" />
                <p className="bg-[#000000BD] p-3">Star Awards in 2017</p>
              </div>
            </div>
            <div className="flex flex-col flex-grow w-2/6 gap-3">
              <div className="flex flex-col cursor-pointer">
                <img
                  src={m_4}
                  alt=""
                  className="h-[500px] object-cover object-center"
                />
                <p className="bg-[#000000BD] p-3">
                  Best Performing Entrepreneur of 2016 in Central Province
                </p>
              </div>
            </div>
          </div>
          {/*for max-md*/}
          <div className="flex flex-col h-full gap-3 text-white md:hidden">
            <div className="flex flex-col flex-grow w-full h-full gap-3">
              <div className="flex flex-col">
                <img
                  src={m_1}
                  alt=""
                  className="h-fit max-h-[400px] object-contain bg-[#000000BD]"
                />
                <p className="bg-[#000000BD] p-3">
                  Best Coming Entrepreneur of 2015 in Central Province
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow w-full gap-3">
              <div className="flex flex-col h-1/2">
                <img src={m_2} alt="" className="object-contain h-full" />
                <p className="bg-[#000000BD] p-3">
                  Best Performing Entrepreneur of 2016 in Central Province
                </p>
              </div>
              <div className="flex flex-col h-1/2">
                <img src={m_3} alt="" className="object-contain h-full" />
                <p className="bg-[#000000BD] p-3">Star Awards in 2017</p>
              </div>
            </div>
            <div className="flex flex-col flex-grow w-full gap-3">
              <div className="flex flex-col">
                <img
                  src={m_4}
                  alt=""
                  className="h-fit max-h-[400px] object-contain object-center bg-[#000000BD]"
                />
                <p className="bg-[#000000BD] p-3">
                  Best Performing Entrepreneur of 2016 in Central Province
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="flex justify-end w-full px-12 py-3 underline max-md:px-6">
          <a href="https://www.google.com">View All</a>
        </span>
      </div>
    </div>
  );
}

export default About;
