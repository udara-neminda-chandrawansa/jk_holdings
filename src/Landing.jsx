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
//import client3 from "./assets/clients/kanrich.png";
import client4 from "./assets/clients/dimo.png";
import client5 from "./assets/clients/cbl.png";
import client6 from "./assets/clients/nestle.png";
import client7 from "./assets/clients/hela.png";
import client8 from "./assets/clients/esquel.png";
import abt_man from "./assets/about_man.png";

import linea_clothing from "./assets/clients/linea_clothing.png";
import linea_intimo from "./assets/clients/linea_intimo.png";
import cashual_line from "./assets/clients/cashual_line.png";
import cn_body from "./assets/clients/cn_body.png";
import fabric_park from "./assets/clients/fabric_park.png";
import heineken from "./assets/clients/heineken.png";
import mas_active from "./assets/clients/mas_active.png";
import mas_shadowline from "./assets/clients/mas_shadowline.png";
import nestle_round from "./assets/clients/nestle_round.png";
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

import bnc_1 from "./assets/csr/bnc-kundasale/1.jpg";
import bnc_3 from "./assets/csr/bnc-kundasale/3.jpg";
import bnc_5 from "./assets/csr/bnc-kundasale/5.jpg";
import bnc_16 from "./assets/csr/bnc-kundasale/16.jpg";
import bnc_8 from "./assets/csr/bnc-kundasale/8.jpg";
import bnc_9 from "./assets/csr/bnc-kundasale/9.jpg";
import bnc_12 from "./assets/csr/bnc-kundasale/12.jpg";

import coconut_1 from "./assets/csr/coconut-1.jpg";
import coconut_2 from "./assets/csr/coconut-2.jpg";
import coconut_3 from "./assets/csr/coconut-3.jpg";
import coconut_4 from "./assets/csr/coconut-4.jpg";
import coconut_5 from "./assets/csr/coconut-5.jpg";
import coconut_6 from "./assets/csr/coconut-6.jpg";
import coconut_7 from "./assets/csr/coconut-7.jpg";

//import add_1 from "./assets/adds/add-1.png";
import add_2 from "./assets/adds/add-2.png";

import { useState, useEffect } from "react";
import LSCarousel from "./components/LandingServiceCar";
import ServiceCard from "./components/ServiceCard";

import { Link } from "wouter";

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
        <div className="z-10 w-3/4 pl-6 text-white max-sm:px-6 max-sm:w-full h-1/3 2xl:h-1/4">
          <h1 className="text-[64px] title max-sm:mb-3 sm:mb-1 lg:mb-3 xl:mb-6 max-md:text-[45px] max-sm:text-[30px]">
            To be the epitome of Service Providing industry.
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
        {/*banner bottom*/}
        <div className="z-10">
          {/*service carousel*/}
          <div className="w-full h-[15dvh] bg-[#C10000] max-sm:hidden">
            <LSCarousel></LSCarousel>
          </div>
          {/*spacing*/}
          <div className="w-full h-[5dvh]"></div>
        </div>
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
          <div className="grid grid-cols-4 gap-6 p-12 w-fit max-sm:w-full place-items-center max-md:p-6 max-md:grid-cols-2 max-sm:grid-cols-1">
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
            <ServiceCard
              img={Card_4}
              text={"Architectural Designing"}
              url={"architectural-designing"}
            ></ServiceCard>
          </div>
        </div>
      </div>
      {/*Mission*/}
      <div
        className="relative flex flex-col justify-center py-12 tracking-wider bg-fixed bg-center bg-no-repeat bg-cover h-fit optima"
        style={{ backgroundImage: `url(${misson_banner})` }}
      >
        {/*Top layer (backdrop)*/}
        <div className="absolute bottom-0 h-full inset-0 bg-gradient-to-br from-[#4B4B4BB5] to-[#000000B5]"></div>
        {/*text*/}
        <div className="z-10 flex flex-col w-3/4 gap-6 pl-12 text-justify text-white max-sm:p-6 max-sm:w-full line-height-abt max-md:pl-6">
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
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] title">
              Our Core Values
            </h1>
            <ul className="flex flex-col gap-3">
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Customer satisfaction
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Credibility
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Assuarance
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Neatness
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Uniqueness
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Integrity
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Professionalism
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Innovation
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Partnership
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*About*/}
      <div className="flex flex-col p-12 h-fit max-md:p-6">
        <div>
          <p className="text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt">
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
            continuous improvement.
          </p>
        </div>
        {/*spacing div*/}
        <div className="lg:h-[20dvh] flex flex-col lg:items-end lg:justify-end lg:pr-14 gap-2 max-lg:pt-6">
          <p className="lg:w-1/2 2xl:text-5xl xl:text-4xl max-xl:text-3xl max-lg:text-3xl max-sm:text-2xl max-lg:pt-3 title">
            Message from the Managing Director
          </p>
          <p className="pb-3 lg:w-1/2 2xl:text-3xl xl:text-2xl max-xl:text-xl max-lg:text-lg max-sm:text-base title">
            Deshabandhu Vidyananda Jagath Karunarathna
          </p>
        </div>
        <div className="relative flex h-[55dvh] min-h-fit max-lg:h-fit max-lg:flex-col">
          {/*about-man*/}
          <img
            src={abt_man}
            className="absolute lg:w-1/2 max-lg:relative max-lg:h-[300px] bottom-0 z-10 max-2xl:h-[70dvh] h-[60dvh] object-contain object-bottom"
            alt="about-img"
          />
          {/*trapezoid*/}
          <div className="absolute text-white pr-12 max-sm:pr-3 right-0 bottom-0 w-full h-0 border-b-[55dvh] border-b-[#C10000] border-l-[400px] border-r-0 border-l-transparent max-lg:hidden"></div>
          {/*trapezoid text*/}
          <div className="absolute flex items-end justify-end w-full h-full pr-12 overflow-y-scroll lg:items-center max-lg:relative max-lg:items-start max-lg:justify-center max-lg:text-center max-lg:py-6 max-lg:pb-0 max-lg:pr-0 min-h-fit black-custom-scroll">
            <h1 className="z-20 w-1/2 h-full py-3 text-justify lg:text-white max-lg:w-full max-lg:text-start line-height-abt">
              <span className="hidden lg:inline text-[60px] max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
                “
              </span>
              <span className="z-10 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
                Taniya Group, a pioneer in building construction industry, came
                to be known as JKI Holdings in the year 2001. Since then, we
                have expanded our services from building construction to
                Interior Designing, Landscaping, Aluminum Fabrication, Pest
                Control and Facility Management, to fulfill all our clients'
                requirements in commercial and residential establishments.
                <br />
                <br />
                We have already commenced our operations in Tourism Industry,
                and we are determined to commence our operations in the
                Information Technology Industry as well.
                <br />
                <br />
                As the Founder, I started this organization, so that we as a
                “Nation” can grow together and sustain our footprint in the
                world as a Proud Nation and bring international revenues into
                the country, from which our people can grow and thrive to reach
                the Global Market.
                <br />
                <br />
                We are continuously expanding, exploring new opportunities, and
                facilitating exceptional levels of customer satisfaction and
                looking for dynamic, enthusiastic and committed individuals to
                grow with us.
                <br />
                <br />
                The sole reason we were recognized and awarded was the
                'exceptional service' that we extend through our well-trained,
                professional, and committed workforce.
              </span>
              <span className="hidden lg:inline absolute text-[60px] max-md:text-2xl max-lg:text-3xl max-xl:text-5xl">
                ”
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/*HR Message*/}
      <div className="flex flex-col gap-3 p-12 h-fit max-md:p-6 max-lg:pt-0">
        <p className="2xl:text-5xl xl:text-4xl max-xl:text-3xl max-lg:text-3xl max-sm:text-2xl title">
          Message from our HR Team
        </p>
        <p className="text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt">
          For JKI Holdings, 'people' are the single most important 'asset', as
          they are the only aspect that can ensure delivery of high quality
          services that in return ensure the progress of the organization and
          its overal performance. Therefore, we treat our employees as 'family'
          and ensure their wellbeing with highest regard. We uphold our HR and
          pay role policies in alignment with the best practices in the trade
          and provide a safe and healthy work environment. Further, we take
          satisfaction in generating novel employment opportunities in order to
          contribute our maximum support to minimize the degrading local job
          market, thereby assuring that people are financially stable and
          succeed in their careers and achieve personal goals. We believe people
          can reach great heights through learning and development. Moreover, we
          reassure that al our employees are adept at executing their duties and
          fairly evaluated and advanced throughout their careers.
        </p>
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
                <div className="grid w-full h-full grid-cols-4 gap-6 place-content-center place-items-center">
                  <img src={client2} className="w-[100px]" alt="client-card" />
                  <img src={client1} className="w-[100px]" alt="client-card" />
                  <img src={client4} className="w-[100px]" alt="client-card" />
                  <img src={client5} className="w-[100px]" alt="client-card" />
                </div>
                <div className="grid w-full h-full grid-cols-3 gap-6 place-content-center place-items-center">
                  <img src={client6} className="w-[100px]" alt="client-card" />
                  <img src={client7} className="w-[100px]" alt="client-card" />
                  <img src={client8} className="w-[100px]" alt="client-card" />
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="flex flex-col gap-6">
                <div className="grid w-full grid-cols-4 gap-3 h-[100px] place-content-center place-items-center">
                  <img
                    src={noyon}
                    className="w-[100px] h-1/2 object-contain"
                    alt="client-card"
                  />
                  <img
                    src={heineken}
                    className="w-[100px] h-1/2 object-contain"
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
      {/*MAS*/}
      <div className="flex flex-col items-center gap-6 py-6">
        <img src={client2} alt="mas-logo" className="w-fit h-fit" />
        <div className="bg-[#C10000] h-fit w-full text-white py-6 max-md:py-3 px-12 max-md:px-6 text-justify line-height-abt">
          <p>
            JKI Holdings has demonstrated exceptional professionalism and
            expertise in the construction industry. Their ability to deliver
            high-quality projects on time and within budget is truly
            commendable. The team’s attention to detail and commitment to
            excellence ensure that every project meets and often exceeds
            expectations. The blend of innovation and adherence to industry
            standards sets JKI Holdings apart as a trustworthy partner for
            construction needs. Their focus on sustainable practices and client
            satisfaction further enhances their reputation as a reliable and
            forward-thinking company.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-6 px-12 max-md:px-6 max-sm:grid-cols-1 max-sm:text-end">
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={linea_clothing}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p>Linea Clothing (Pvt) Ltd., BOI,</p>
              <p className="text-sm text-[#C10000]">Pallekele</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={linea_intimo}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> Linea Intimo (Pvt) Ltd., EPZ,</p>
              <p className="text-sm text-[#C10000]"> Biyagama</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={mas_active}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p>MAS Active Contourline, BOI,</p>
              <p className="text-sm text-[#C10000]">Pallekele</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={mas_shadowline}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p>MAS Active Shadeline (Pvt) Ltd., EPZ,</p>
              <p className="text-sm text-[#C10000]">Katunayake</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={noyon}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> Noyon Lanka (Pvt) Ltd., EPZ,</p>
              <p className="text-sm text-[#C10000]">Biyagama</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={unichela}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> Unichela (Pvt) Ltd.,</p>
              <p className="text-sm text-[#C10000]"> Panadura</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={cashual_line}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p>Casual line (Pvt) Ltd., Mawathagama.</p>
              <p className="text-sm text-[#C10000]">Biyagama</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={fabric_park}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p>MAS Fabric Park, Kurunegala Road, Thulhiriya.</p>
              <p className="text-sm text-[#C10000]">Pallekele</p>
            </span>
          </div>
        </div>
      </div>
      {/*hr*/}
      <span className="flex justify-center">
        <hr className="w-11/12" />
      </span>
      {/*ESQUEL*/}
      <div className="flex flex-col items-center gap-6 py-6">
        <img src={client8} alt="mas-logo" className="w-fit h-fit" />
        <div className="bg-[#C10000] h-fit w-full text-white py-6 max-md:py-3 px-12 max-md:px-6 text-justify line-height-abt">
          <p>
            JKI Holdings has demonstrated exceptional professionalism and
            expertise in the construction industry. Their ability to deliver
            high-quality projects on time and within budget is truly
            commendable. The team’s attention to detail and commitment to
            excellence ensure that every project meets and often exceeds
            expectations. The blend of innovation and adherence to industry
            standards sets JKI Holdings apart as a trustworthy partner for
            construction needs. Their focus on sustainable practices and client
            satisfaction further enhances their reputation as a reliable and
            forward-thinking company.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 gap-6 px-12 max-md:px-6 max-sm:grid-cols-1 max-sm:text-end">
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={heineken}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p>Heineken Lanka (Pvt) Ltd.,</p>
              <p className="text-sm text-[#C10000]">Mawathagama</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={nestle_round}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> Nestle Lanka (pvt)Ltd.,</p>
              <p className="text-sm text-[#C10000]">Pannala</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={client8}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> Esquel Group</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={ruhunu}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> Ruhunu Foods (pvt) Ltd.,</p>
              <p className="text-sm text-[#C10000]">Pallekele</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={screenline}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> Screenline Group of Companies</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={smart_shirts}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> Smart Shirts (Pvt) Ltd.,</p>
              <p className="text-sm text-[#C10000]"> Pallekele</p>
            </span>
          </div>
          <div className="flex items-center gap-3 h-[80px]">
            <img
              src={cn_body}
              alt=""
              className="w-[100px] h-[60px] object-contain"
            />
            <span className="flex flex-col gap-1 max-sm:w-full">
              <p> CN BodyMatrix (Pvt) Ltd.</p>
            </span>
          </div>
        </div>
      </div>
      {/*hr*/}
      <span className="flex justify-center">
        <hr className="w-11/12" />
      </span>
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
                src={a_3}
                alt=""
                className="z-10 object-contain w-full h-5/6"
              />
              <p className="w-full text-center h-1/6 bg-[#C10000] text-white flex items-center justify-center absolute bottom-10 max-md:bottom-8">
                Asian Heroes 2023
              </p>
            </div>
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
          <div className="flex flex-col gap-6 p-12 h-fit max-md:p-6">
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
            {/*for md*/}
            <div className="flex flex-col max-md:hidden md:h-[700px] gap-3 overflow-y-scroll red-custom-scroll">
              {/*first row*/}
              <div className="hidden h-[300px] gap-3 text-white md:flex">
                <div className="flex flex-col flex-grow w-2/4 h-full">
                  <div className="flex flex-col cursor-pointer">
                    <img
                      src={bnc_8}
                      alt="milestone-grid-card"
                      className="h-[300px] object-cover object-bottom"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-1/4 h-full cursor-pointer">
                  <img
                    src={bnc_3}
                    alt="milestone-grid-card"
                    className="object-cover h-[300px]"
                  />
                </div>
                <div className="flex flex-col w-1/4 h-full cursor-pointer">
                  <img
                    src={bnc_5}
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
                      src={bnc_16}
                      alt=""
                      className="object-cover object-bottom h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-1/5 h-full gap-3 cursor-pointer">
                  <img
                    src={bnc_8}
                    alt="milestone-grid-card"
                    className="object-cover h-1/2"
                  />
                  <img
                    src={bnc_9}
                    alt="milestone-grid-card"
                    className="object-cover h-1/2"
                  />
                </div>
                <div className="flex flex-col w-1/5 h-full cursor-pointer">
                  <img
                    src={bnc_12}
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
                      src={coconut_1}
                      alt="milestone-grid-card"
                      className="h-[300px] object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-1/4 h-full cursor-pointer">
                  <img
                    src={coconut_2}
                    alt="milestone-grid-card"
                    className="object-cover h-[300px]"
                  />
                </div>
                <div className="flex flex-col w-1/4 h-full cursor-pointer">
                  <img
                    src={coconut_3}
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
                      src={coconut_4}
                      alt=""
                      className="object-cover object-top h-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col w-1/5 h-full gap-3 cursor-pointer">
                  <img
                    src={coconut_5}
                    alt="milestone-grid-card"
                    className="object-cover h-1/2"
                  />
                  <img
                    src={coconut_6}
                    alt="milestone-grid-card"
                    className="object-cover h-1/2"
                  />
                </div>
                <div className="flex flex-col w-1/5 h-full cursor-pointer">
                  <img
                    src={coconut_7}
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
                  src={bnc_1}
                  alt="milestone-grid-card"
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-[#000000BD]">
                <img
                  src={bnc_3}
                  alt="milestone-grid-card"
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-[#000000BD]">
                <img
                  src={bnc_5}
                  alt="milestone-grid-card"
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-[#000000BD]">
                <img
                  src={bnc_16}
                  alt="milestone-grid-card"
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-[#000000BD]">
                <img
                  src={bnc_8}
                  alt="milestone-grid-card"
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-[#000000BD]">
                <img
                  src={bnc_9}
                  alt="milestone-grid-card"
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
              <div className="bg-[#000000BD]">
                <img
                  src={bnc_12}
                  alt="milestone-grid-card"
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
            </div>
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
        {/*Advertisements*/}
        <div className="p-12 max-md:p-6">
          <div className="border ">
            <div className="flex items-center w-full h-full max-md:flex-col max-md:justify-center">
              <img
                src={add_2}
                alt=""
                className="object-cover w-1/2 h-full max-md:w-full max-md:h-1/2 max-md:object-contain"
              />
              <p className="px-12 text-xl font-medium tracking-widest text-center max-md:px-6 h-fit max-md:py-6 title">
                Shining a spotlight on exceptional dedication & performance at
                Brandix Fast Fashion, Awissawella
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
