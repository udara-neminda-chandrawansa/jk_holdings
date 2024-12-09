import misson_banner from "./assets/mission_bg.jpg";
import jcb_banner from "./assets/banner-1.jpg";
import client_banner from "./assets/clients_bg.png";
import about_banner from "./assets/about_bg.png";
import client1 from "./assets/clients/brandix.png";
import client2 from "./assets/clients/mas.png";
import client3 from "./assets/clients/kanrich.png";
import client4 from "./assets/clients/dimo.png";
import client5 from "./assets/clients/cbl.png";
import client6 from "./assets/clients/nestle.png";
import client7 from "./assets/clients/hela.png";
import client8 from "./assets/clients/esquel.png";
import img1 from "./assets/AboutGrid/img-1.png";
import img2 from "./assets/AboutGrid/img-2.png";
import img3 from "./assets/AboutGrid/img-3.png";
import img4 from "./assets/AboutGrid/img-4.png";
import img5 from "./assets/AboutGrid/img-5.png";
import img6 from "./assets/AboutGrid/img-6.png";
import img7 from "./assets/AboutGrid/img-7.png";
import m_1 from "./assets/milestones/m-1.png";
import m_2 from "./assets/milestones/m-2.png";
import m_3 from "./assets/milestones/m-3.png";
import m_4 from "./assets/milestones/m-4.png";
import { useState, useEffect } from "react";

function About() {
  const img_banners = [
    // for storing banner images
    {
      img: misson_banner,
      content: (
        <div className="z-10 flex flex-col justify-center w-3/4 h-full gap-6 pl-12 text-white line-height-abt max-md:pl-6">
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
      ),
    },
    {
      img: jcb_banner,
      content: (
        <div className="z-10 flex flex-col justify-center h-full gap-6 p-12 text-white max-md:p-6">
          <div className="flex flex-col gap-6">
            <p
              className={`2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-sm ${window.innerWidth <= 640 ? "lh-base" : "lh-lg"}`}>
              For JKI Holdings, 'people' are the single most important 'asset',
              as they are the only aspect that can ensure delivery of high
              quality services that in return ensure the progress of the
              organization and its overal performance. Therefore, we treat our
              employees as 'family' and ensure their wellbeing with highest
              regard. We uphold our HR and pay role policies in alignment with
              the best practices in the trade and provide a safe and healthy
              work environment. Further, we take satisfaction in generating
              novel employment opportunities in order to contribute our maximum
              support to minimize the degrading local job market, thereby
              assuring that people are financially stable and succeed in their
              careers and achieve personal goals. We believe people can reach
              great heights through learning and development. Moreover, we
              reassure that al our employees are adept at executing their duties
              and fairly evaluated and advanced throughout their careers.
            </p>
          </div>
        </div>
      ),
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0); // initialize current banner
  const [isTransitioning, setIsTransitioning] = useState(false); // initialize text transitioning

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBanner((prev) => (prev + 1) % img_banners.length);
        setIsTransitioning(false);
      }, 300); // Match transition delay in bg
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  });
  return (
    <div>
      {/*Mission*/}
      <div
        className="relative flex flex-col justify-between bg-fixed bg-center bg-no-repeat bg-cover h-[90dvh]"
        style={{ backgroundImage: `url(${img_banners[currentBanner].img})` }}
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
        </div>
        {/*banner content*/}
        <div
          className={`h-full transition-all duration-300 ${
            isTransitioning
              ? "opacity-0 translate-y-5"
              : "opacity-100 translate-y-0"
          }`}
        >
          {img_banners[currentBanner].content}
        </div>
      </div>
      {/*About*/}
      <div className="flex flex-col gap-6 p-12 h-fit max-md:p-6 line-height-abt">
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
            continuous improvement. JKI Holdings ensures healthy environmental
            practices throughout al our operations by using eco-friendly
            disinfectants and waste management systems to secure a minimal
            ecological footprint.
          </p>
        </div>
        {/*abt banner + txt*/}
        <div
          className="relative flex bg-center bg-no-repeat bg-contain md:py-6 h-fit min-h-fit max-md:h-fit max-md:flex-col"
          style={{ backgroundImage: `url(${about_banner})` }}
        >
          {/*banner text*/}
          <div className="flex items-end justify-end w-full h-full pr-12 overflow-y-scroll lg:items-center max-md:relative max-md:items-start max-md:justify-center max-md:text-center max-lg:pr-0 max-lg:text-end min-h-fit no-scrollbar">
            <h1 className="z-20 w-1/2 text-black max-md:w-full max-md:text-start">
              <span className="hidden lg:inline text-[60px] max-md:text-2xl sansita max-lg:text-3xl max-xl:text-5xl text-[#C10000]">
                “
              </span>
              <span className="z-10 italic font-semibold 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt">
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
              <span className="absolute hidden lg:inline text-[60px] max-md:text-2xl sansita max-lg:text-3xl max-xl:text-5xl text-[#C10000]">
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
        {/*client carousel*/}
        <div
          id="animation-carousel"
          className="relative w-full p-6 md:p-12 h-fit carousel slide"
          data-coreui-ride="true"
        >
          <div className="carousel-indicators max-sm:hidden">
            <button
              type="button"
              data-coreui-target="#animation-carousel"
              data-coreui-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-coreui-target="#animation-carousel"
              data-coreui-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-coreui-target="#animation-carousel"
              data-coreui-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="h-60 max-sm:h-fit carousel-inner">
            <div className="carousel-item active">
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

            <div className="carousel-item">
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

            <div className="carousel-item">
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
                <img
                  src={m_1}
                  alt="milestone-grid-card"
                  className="h-[500px] object-cover"
                />
                <p className="bg-[#000000BD] p-3">
                  Best Coming Entrepreneur of 2015 in Central Province
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between flex-grow w-1/6 gap-3">
              <div className="flex flex-col cursor-pointer h-1/2">
                <img
                  src={m_2}
                  alt="milestone-grid-card"
                  className="object-cover h-full"
                />
                <p className="bg-[#000000BD] p-3">
                  Best Performing Entrepreneur of 2016 in Central Province
                </p>
              </div>
              <div className="flex flex-col cursor-pointer h-1/2">
                <img
                  src={m_3}
                  alt="milestone-grid-card"
                  className="object-cover h-full"
                />
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
                <img
                  src={m_2}
                  alt="milestone-grid-card"
                  className="object-contain h-full"
                />
                <p className="bg-[#000000BD] p-3">
                  Best Performing Entrepreneur of 2016 in Central Province
                </p>
              </div>
              <div className="flex flex-col h-1/2">
                <img
                  src={m_3}
                  alt="milestone-grid-card"
                  className="object-contain h-full"
                />
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
      {/*Milestones - 2*/}
      <div className="h-fit">
        <div className="flex flex-col gap-6 p-12 h-fit max-md:p-6">
          <span>
            <h1 className="text-[30px] text-[#C10000] title">Our Milestones</h1>
            <h1 className="text-[20px] sm:w-1/2 font-medium title text-center">
              For a brighter future
            </h1>
          </span>
          <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            At JKI Holdings, we believe in taking responsibility for our
            actions, both as a company and as members of society. We acknowledge
            the impact we have on the environment, the people we work with, and
            the communities we operate in. Therefore, we have initiated a range
            of projects and programs that aim to create a positive impact on the
            world around us. Through our corporate social responsibility (CSR)
            projects, we strive to promote sustainability, equality, diversity,
            and inclusion. We are committed to making a difference and creating
            a better future for all.
          </p>
          {/*for md*/}
          <div className="flex flex-col max-md:hidden md:h-[700px] gap-3 overflow-y-scroll red-custom-scroll">
            {/*first row*/}
            <div className="hidden h-[300px] gap-3 text-white md:flex">
              <div className="flex flex-col flex-grow w-2/4 h-full">
                <div className="flex flex-col cursor-pointer">
                  <img
                    src={img1}
                    alt="milestone-grid-card"
                    className="h-[300px] object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/4 h-full cursor-pointer">
                <img
                  src={img2}
                  alt="milestone-grid-card"
                  className="object-cover h-[300px]"
                />
              </div>
              <div className="flex flex-col w-1/4 h-full cursor-pointer">
                <img
                  src={img3}
                  alt="milestone-grid-card"
                  className="object-cover h-[300px]"
                />
              </div>
            </div>
            {/*second row*/}
            <div className="hidden h-[400px] gap-3 text-white md:flex">
              <div className="flex flex-col flex-grow w-3/5 h-full">
                <div className="flex flex-col h-full cursor-pointer">
                  <img
                    src={img4}
                    alt=""
                    className="object-cover object-top h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/5 h-full gap-3 cursor-pointer">
                <img
                  src={img5}
                  alt="milestone-grid-card"
                  className="object-cover h-1/2"
                />
                <img
                  src={img6}
                  alt="milestone-grid-card"
                  className="object-cover h-1/2"
                />
              </div>
              <div className="flex flex-col w-1/5 h-full cursor-pointer">
                <img
                  src={img7}
                  alt="milestone-grid-card"
                  className="object-cover h-[400px]"
                />
              </div>
            </div>
            {/*third row*/}
            <div className="hidden h-[300px] gap-3 text-white md:flex">
              <div className="flex flex-col flex-grow w-2/4 h-full">
                <div className="flex flex-col cursor-pointer">
                  <img
                    src={img1}
                    alt="milestone-grid-card"
                    className="h-[300px] object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/4 h-full cursor-pointer">
                <img
                  src={img2}
                  alt="milestone-grid-card"
                  className="object-cover h-[300px]"
                />
              </div>
              <div className="flex flex-col w-1/4 h-full cursor-pointer">
                <img
                  src={img3}
                  alt="milestone-grid-card"
                  className="object-cover h-[300px]"
                />
              </div>
            </div>
            {/*fourth row*/}
            <div className="hidden h-[400px] gap-3 text-white md:flex">
              <div className="flex flex-col flex-grow w-3/5 h-full">
                <div className="flex flex-col h-full cursor-pointer">
                  <img
                    src={img4}
                    alt=""
                    className="object-cover object-top h-full"
                  />
                </div>
              </div>
              <div className="flex flex-col w-1/5 h-full gap-3 cursor-pointer">
                <img
                  src={img5}
                  alt="milestone-grid-card"
                  className="object-cover h-1/2"
                />
                <img
                  src={img6}
                  alt="milestone-grid-card"
                  className="object-cover h-1/2"
                />
              </div>
              <div className="flex flex-col w-1/5 h-full cursor-pointer">
                <img
                  src={img7}
                  alt="milestone-grid-card"
                  className="object-cover h-[400px]"
                />
              </div>
            </div>
          </div>
          {/*for max-md*/}
          <div className="flex flex-col gap-3 text-white md:hidden">
            <div className="bg-[#000000BD]">
              <img
                src={img1}
                alt="milestone-grid-card"
                className="w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="bg-[#000000BD]">
              <img
                src={img2}
                alt="milestone-grid-card"
                className="w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="bg-[#000000BD]">
              <img
                src={img3}
                alt="milestone-grid-card"
                className="w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="bg-[#000000BD]">
              <img
                src={img4}
                alt="milestone-grid-card"
                className="w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="bg-[#000000BD]">
              <img
                src={img5}
                alt="milestone-grid-card"
                className="w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="bg-[#000000BD]">
              <img
                src={img6}
                alt="milestone-grid-card"
                className="w-full max-h-[400px] object-contain"
              />
            </div>
            <div className="bg-[#000000BD]">
              <img
                src={img7}
                alt="milestone-grid-card"
                className="w-full max-h-[400px] object-contain"
              />
            </div>
          </div>
        </div>
        {/*phrase*/}
        <div className="flex justify-center pb-6 text-2xl poltawski">
          <span className="hidden lg:inline text-[60px] max-md:text-2xl sansita max-lg:text-3xl max-xl:text-5xl text-[#C10000]">
            “
          </span>
          <h1 className="w-1/2 text-center max-sm:w-full max-sm:p-3">
            Human Resources isn't a thing we do. It's the thing that runs our
            business.
          </h1>
          <span className="hidden lg:inline text-[60px] max-md:text-2xl sansita max-lg:text-3xl max-xl:text-5xl text-[#C10000]">
            ”
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
