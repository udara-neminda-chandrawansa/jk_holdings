import banner_1 from "./assets/banner-1.jpg";
import banner_2 from "./assets/banner-2.jpg";
import banner_3 from "./assets/banner-3.jpg";

import Card_1 from "./assets/ServiceCards/card_1.jpg";
import Card_2 from "./assets/ServiceCards/card_2.jpg";
import Card_3 from "./assets/ServiceCards/card_3.jpg";
//import Card_4 from "./assets/ServiceCards/card_4.png";

//import misson_banner from "./assets/mission_bg.jpg";
import client_banner from "./assets/clients_bg.png";

import client1 from "./assets/clients/brandix.png";
import client2 from "./assets/clients/mas.png";
//import client3 from "./assets/clients/kanrich.png";
//import client4 from "./assets/clients/dimo.png";
import client5 from "./assets/clients/cbl.png";
//import client6 from "./assets/clients/nestle.png";
import client7 from "./assets/clients/hela.png";
//import client8 from "./assets/clients/esquel.png";
//import abt_man from "./assets/about_man.png";

import teejay from "./assets/clients/teejay.png";
import linea_clothing from "./assets/clients/linea_clothing.png";
import linea_intimo from "./assets/clients/linea_intimo.png";
import cashual_line from "./assets/clients/cashual_line.png";
import cn_body from "./assets/clients/cn_body.png";
import fabric_park from "./assets/clients/fabric_park.png";
import heineken from "./assets/clients/heineken.png";
import mas_active from "./assets/clients/mas_active.png";
import mas_shadowline from "./assets/clients/mas_shadowline.png";
//import nestle_round from "./assets/clients/nestle_round.png";
import noyon from "./assets/clients/noyon.png";
import ruhunu from "./assets/clients/ruhunu.png";
import screenline from "./assets/clients/screenline.png";
import smart_shirts from "./assets/clients/smart_shirts.png";
import unichela from "./assets/clients/unichela.png";

import m_1 from "./assets/milestones/m-1.png";
import m_2 from "./assets/milestones/m-2.png";
import m_3 from "./assets/milestones/m-3.png";
import m_4 from "./assets/milestones/m-4.png";

import a_1 from "./assets/Awards/award-1.png";
import a_2 from "./assets/Awards/award-2.png";
import a_3 from "./assets/Awards/award-3.png";
import a_4 from "./assets/Awards/award-4.png";

//import img1 from "./assets/AboutGrid/img-1.png";
//import img2 from "./assets/AboutGrid/img-2.png";
//import img3 from "./assets/AboutGrid/img-3.png";
//import img4 from "./assets/AboutGrid/img-4.png";
//import img5 from "./assets/AboutGrid/img-5.png";
//import img6 from "./assets/AboutGrid/img-6.png";
//import img7 from "./assets/AboutGrid/img-7.png";

//import add_1 from "./assets/adds/add-1.png";

import { useState, useEffect } from "react";
//import LSCarousel from "./components/LandingServiceCar";
import ServiceCard from "./components/ServiceCard";

import { Link } from "wouter";

function Landing() {
  const banners = [
    // for storing images and banner text
    {
      header: "JKI Construction",
      img: banner_1,
      text: "Welcome to J K I Construction, where innovation meets excellence in construction. With a proven track record of delivering high-quality projects, we specialize in creating spaces that inspire and endure. From residential homes to commercial buildings, our expert team is dedicated to turning your vision into reality. At J K I Construction, we prioritize precision, sustainability, and client satisfaction.",
    },
    {
      header: "JKI Facility Management",
      img: banner_2,
      text: "JKI Holdings offers comprehensive facility management services to ensure your spaces remain clean, safe, and sustainable. Our expertise includes professional janitorial services, effective pest control, eco-friendly chemical supplies, high-quality equipment provision, and meticulous garden maintenance. We prioritize efficiency and environmental responsibility in every service we provide.",
    },
    {
      header: "JKI Getaways",
      img: banner_3,
      text: "At JKI Construction, we take pride in creating not just buildings, but entrances that leave a lasting impression. Our gateways are designed to combine functionality, security, and aesthetic appeal, making them the perfect addition to any property. Our travel service provides personalized trips to this beautiful island nation, tailored to your specific interests and preferences.",
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
        <div className="z-10 w-3/4 pl-6 text-white max-sm:px-6 max-sm:w-full h-1/3 2xl:h-1/4 max-md:h-fit">
          <h1 className="text-[64px] title max-sm:mb-3 sm:mb-1 lg:mb-3 xl:mb-6 max-md:text-[45px] max-sm:text-[30px]">
            {banners[currentBanner].header}
          </h1>
          <p
            className={`2xl:text-2xl line-height-abt xl:text-xl max-md:text-lg max-sm:text-base transition-all duration-300 text-justify ${
              isTransitioning
                ? "opacity-0 translate-y-5"
                : "opacity-100 translate-y-0"
            }`}
          >
            {banners[currentBanner].text}
          </p>
        </div>
        {/*empty div (to maintain spacing by justify-between)*/}
        <div></div>
      </div>
      {/*Services*/}
      <div className="h-fit">
        {/*text*/}
        <div className="flex flex-col gap-6 p-12 max-md:p-6">
          <h1 className="text-[30px] text-[#C10000] title">Our Services</h1>
          <p className="text-justify line-height-abt 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            At JKI Construction, we are dedicated to transforming your visions
            into reality with unparalleled expertise and craftsmanship. Our
            comprehensive range of services ensures every aspect of your
            construction project is handled with precision, innovation, and
            care.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-6 p-12 w-fit max-sm:w-full place-items-center max-md:p-6 max-md:grid-cols-2 max-sm:grid-cols-1">
            <ServiceCard
              img={Card_1}
              text={"Construction"}
              url={"construction"}
            ></ServiceCard>
            <ServiceCard
              img={Card_2}
              text={"Facility Management"}
              url={"facility-management"}
            ></ServiceCard>
            <ServiceCard
              img={Card_3}
              text={"Getaways"}
              url={"getaways"}
            ></ServiceCard>
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
          <p className="text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt">
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
              <div className="flex flex-col gap-6">
                <div className="grid w-full h-full grid-cols-3 gap-6 place-content-center place-items-center">
                  <img src={client2} className="w-[100px]" alt="client-card" />
                  <img src={client1} className="w-[100px]" alt="client-card" />
                  <img src={client5} className="w-[100px]" alt="client-card" />
                </div>
                <div className="grid w-full h-full grid-cols-3 gap-6 place-content-center place-items-center">
                  <img
                    src={noyon}
                    className="w-[100px] h-[100px] object-contain"
                    alt="client-card"
                  />
                  <img src={client7} className="w-[100px]" alt="client-card" />
                  <img src={teejay} className="w-[100px]" alt="client-card" />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="flex flex-col gap-6">
                <div className="grid w-full grid-cols-3 gap-3 h-[100px] place-content-center place-items-center">
                  <img
                    src={heineken}
                    className="w-[100px] h-[100px] object-contain"
                    alt="client-card"
                  />
                  <img src={ruhunu} className="w-[100px]" alt="client-card" />
                  <img
                    src={screenline}
                    className="w-[100px]"
                    alt="client-card"
                  />
                </div>
                <div className="grid w-full grid-cols-3 gap-6 h-1/2 place-content-center place-items-center">
                  <img
                    src={smart_shirts}
                    className="w-[100px]"
                    alt="client-card"
                  />
                  <img src={cn_body} className="w-[100px]" alt="client-card" />
                  <img
                    src={mas_shadowline}
                    className="w-[100px]"
                    alt="client-card"
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="flex flex-col gap-6">
                <div className="grid w-full h-full grid-cols-3 gap-6 place-content-center place-items-center">
                  <img
                    src={mas_active}
                    className="w-[100px]"
                    alt="client-card"
                  />

                  <img
                    src={linea_clothing}
                    className="w-[100px]"
                    alt="client-card"
                  />
                  <img
                    src={linea_intimo}
                    className="w-[100px]"
                    alt="client-card"
                  />
                </div>
                <div className="grid w-full h-full grid-cols-3 gap-6 place-content-center place-items-center">
                  <img
                    src={cashual_line}
                    className="w-[100px]"
                    alt="client-card"
                  />
                  <img src={unichela} className="w-[100px]" alt="client-card" />
                  <img
                    src={fabric_park}
                    className="w-[100px]"
                    alt="client-card"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Awards*/}
      <div>
        {/*text*/}
        <div className="flex flex-col gap-6 p-12 max-md:p-6">
          <h1 className="text-[30px] text-[#C10000] title">Our Awards</h1>
          <p className="text-justify line-height-abt 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            Awards & Recognition - JKI Holdings At JKI Holdings, our commitment
            to excellence, innovation, and quality has earned us prestigious
            accolades over the years. Each award is a testament to our
            dedication to delivering exceptional construction solutions and
            upholding the highest industry standards .From sustainable building
            practices to pioneering designs and outstanding customer service,
            our achievements highlight the trust and satisfaction of our clients
            and stakeholders. These recognitions inspire us to continually raise
            the bar in the construction industry and solidify our position as a
            leader in the field. Explore our award-winning journey, where
            passion meets precision, and excellence is a tradition.
          </p>
        </div>
        {/*awards grid*/}
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-4 px-12 max-md:px-6">
            <div className="relative flex flex-col items-center">
              <img
                src={a_4}
                alt=""
                className="z-10 object-contain w-full h-5/6"
              />
              <p className="w-full text-center h-1/6 bg-[#C10000] text-white flex items-center justify-center absolute bottom-10 max-md:bottom-8">
                Star Awards 2016
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <img
                src={a_2}
                alt=""
                className="z-10 object-contain w-full h-5/6"
              />
              <p className="w-full text-center h-1/6 bg-[#C10000] text-white flex items-center justify-center absolute bottom-10 max-md:bottom-8">
                Star Awards 2017
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <img
                src={a_1}
                alt=""
                className="z-10 object-contain w-full h-5/6"
              />
              <p className="w-full text-center h-1/6 bg-[#C10000] text-white flex items-center justify-center absolute bottom-10 max-md:bottom-8">
                Star Awards 2019
              </p>
            </div>
            <div className="relative flex flex-col items-center">
              <img
                src={a_3}
                alt=""
                className="z-10 object-contain w-full h-5/6"
              />
              <p className="w-full text-center h-1/6 bg-[#C10000] text-white flex items-center justify-center absolute bottom-10 max-md:bottom-8">
                Asian Heroes 2023
              </p>
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
            <Link href={"/aboutus"}>View All</Link>
          </span>
        </div>
        {/*Milestones - 2*/}
        <div className="h-fit">
          <div className="flex-col hidden gap-6 p-12 h-fit max-md:p-6">
            <span>
              <h1 className="text-[30px] text-[#C10000] title">
                Our Milestones
              </h1>
              <h1 className="text-[20px] sm:w-1/2 font-medium title text-center">
                For a brighter future
              </h1>
            </span>
            <p className="text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              At JKI Holdings, we believe in taking responsibility for our
              actions, both as a company and as members of society. We
              acknowledge the impact we have on the environment, the people we
              work with, and the communities we operate in. Therefore, we have
              initiated a range of projects and programs that aim to create a
              positive impact on the world around us. Through our corporate
              social responsibility (CSR) projects, we strive to promote
              sustainability, equality, diversity, and inclusion. We are
              committed to making a difference and creating a better future for
              all.
            </p>
          </div>
          {/*phrase*/}
          <div className="flex justify-center pb-6 text-2xl poltawski">
            <span className="inline text-[60px] max-md:text-2xl sansita max-lg:text-3xl max-xl:text-5xl text-[#C10000]">
              “
            </span>
            <h1 className="w-1/2 text-center max-sm:w-fit max-sm:py-3">
              Human Resources isn't a thing we do. It's the thing that runs our
              business.
            </h1>
            <span className="inline text-[60px] max-md:text-2xl sansita max-lg:text-3xl max-xl:text-5xl text-[#C10000]">
              ”
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
