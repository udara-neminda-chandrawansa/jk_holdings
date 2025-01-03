import misson_banner from "./assets/mission_bg.jpg";
import jcb_banner from "./assets/banner-1.jpg";
import client_banner from "./assets/clients_bg.png";
import abt_man from "./assets/about_man.png";

import client1 from "./assets/clients/brandix.png";
import client2 from "./assets/clients/mas.png";
import client5 from "./assets/clients/cbl.png";
import client7 from "./assets/clients/hela.png";

import teejay from "./assets/clients/teejay.png";
import linea_clothing from "./assets/clients/linea_clothing.png";
import linea_intimo from "./assets/clients/linea_intimo.png";
import cashual_line from "./assets/clients/cashual_line.png";
import cn_body from "./assets/clients/cn_body.png";
import fabric_park from "./assets/clients/fabric_park.png";
import heineken from "./assets/clients/heineken.png";
import mas_active from "./assets/clients/mas_active.png";
import mas_shadowline from "./assets/clients/mas_shadowline.png";
import noyon from "./assets/clients/noyon.png";
import ruhunu from "./assets/clients/ruhunu.png";
import screenline from "./assets/clients/screenline.png";
import smart_shirts from "./assets/clients/smart_shirts.png";
import unichela from "./assets/clients/unichela.png";

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

import { useState, useEffect } from "react";

function About() {
  const img_banners = [
    // for storing banner images
    {
      img: misson_banner,
      content: (
        <div className="z-10 flex flex-col justify-center w-3/4 h-full gap-6 pl-12 text-white max-sm:p-6 max-sm:w-full line-height-abt max-md:pl-6">
          <div className="flex flex-col gap-6 text-justify">
            <h1 className="text-[30px] lg:text-[35px] xl:text-[60px] title">
              Our Mission
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              Build everlasting relationships through architectonic
              constructions & innovative, economic & exceptional customer
              service, and evolve continuously along with advanced technology
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[35px] xl:text-[60px] title">
              Our Vision
            </h1>
            <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
              To be the epitome of Service Providing industry
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-[30px] lg:text-[35px] xl:text-[60px] title">
              Our Core Values
            </h1>
            <ul className="grid w-full grid-cols-3 gap-3">
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Customer satisfaction
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Credibility
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Assuarance
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Neatness
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Uniqueness
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Integrity
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Professionalism
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Innovation
              </li>
              <li className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-xs">
                Partnership
              </li>
            </ul>
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
              className={`2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-sm text-justify ${
                window.innerWidth <= 640 ? "lh-base" : "lh-lg"
              }`}
            >
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
          <p className="text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
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

        {/*Message from managing director*/}
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
      {/*Milestones - 2*/}
      <div className="h-fit">
        <div className="flex flex-col gap-6 p-12 h-fit max-md:p-6">
          <span>
            <h1 className="text-[30px] text-[#C10000] title">Our Milestones</h1>
            <h1 className="text-[20px] sm:w-1/2 font-medium title text-center">
              For a brighter future
            </h1>
          </span>
          <p className="text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
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
    </div>
  );
}

export default About;
