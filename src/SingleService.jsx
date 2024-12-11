import construction_banner from "./assets/Services/construction_banner.png";
import facility_banner from "./assets/Services/facility_banner.png";
import gateway_banner from "./assets/Services/gateway_banner.png";
import architecture_banner from "./assets/Services/architecture_banner.png";
import interior_banner from "./assets/Services/interior_banner.png";
import masonry_banner from "./assets/Services/masonry_banner.png";
import plumbing_banner from "./assets/Services/plumbing_banner.png";
import wood_banner from "./assets/Services/wood_banner.png";
import aluminum_banner from "./assets/Services/aluminum_banner.png";
import electrical_banner from "./assets/Services/electrical_banner.png";
import property_banner from "./assets/Services/property_banner.png";
import manpower_banner from "./assets/Services/manpower_banner.png";
import janitorial_banner from "./assets/Services/janitorial_banner.png";
import landscape_banner from "./assets/Services/landscape_banner.png";
import garden_banner from "./assets/Services/garden_banner.png";
import residential_banner from "./assets/Services/residential_banner.png";
import commercial_banner from "./assets/Services/commercial_banner.png";

import construction_img from "./assets/ServiceCards/card_1.jpg";
import facility_img from "./assets/Services/facility_img.png";
import gateway_img from "./assets/ServiceCards/card_3.jpg";
import architecture_img from "./assets/ServiceCards/card_4.png";
import interior_img from "./assets/Services/interior_img.png";
import masonry_img from "./assets/Services/masonry_img.png";
import plumbing_img from "./assets/Services/plumbing_img.png";
import wood_img from "./assets/Services/wood_img.png";
import aluminum_img from "./assets/Services/aluminum_img.png";
import electrical_img from "./assets/Services/electrical_img.png";
import property_img from "./assets/Services/property_img.png";
import manpower_img from "./assets/Services/manpower_img.png";
import janitorial_img from "./assets/Services/janitorial_img.png";
import landscape_img from "./assets/Services/landscape_img.png";
import garden_img from "./assets/Services/garden_img.png";
import residential_img from "./assets/Services/residential_img.png";
import commercial_img from "./assets/Services/commercial_img.png";

import email_icon from "./assets/Services/email_icon.png";
import add_icon from "./assets/Services/add_icon.png";
import phone_icon from "./assets/Services/phone_icon.png";

function SingleService({ serviceType }) {
  // Mapping serviceType to an integer index
  const serviceTypeMap = {
    construction: 0,
    "facility-management": 1,
    getaways: 2,
    "architectural-designing": 3,
    "interior-designing": 4,
    "masonry-tile-interlock-services": 5,
    "plumbing-services": 6,
    "wood-based-services": 7,
    "aluminum-fabrication": 8,
    "electrical-services": 9,
    "property-management": 10,
    "manpower-supply": 11,
    "janitorial-services": 12,
    "landscape-designing": 13,
    "garden-maintenance": 14,
    "residential-construction": 15,
    "commercial-construction": 16,
  };

  // Get the integer index from the map or default to 16
  const serviceTypeInt = serviceTypeMap[serviceType] ?? 0;

  const serviceData = [
    [
      "J K I Constructions",
      "Welcome to J K I Construction, where innovation meets excellence in construction. With a proven track record of delivering high-quality projects, we specialize in creating spaces that inspire and endure. From residential homes to commercial buildings, our expert team is dedicated to turning your vision into reality. At J K I Construction, we prioritize precision, sustainability, and client satisfaction. Every project is crafted with attention to detail, ensuring superior craftsmanship and timely completion. Whether you're building your dream home or embarking on a large-scale development, we are here to guide you every step of the way. Discover the difference of working with a trusted partner who values quality, integrity, and innovation. Choose J K I Construction—where your dreams take shape.",

      construction_banner,
      construction_img,
      <ul className="flex flex-col w-full gap-6 list-none">
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
          Commercial and Residential Construction and Consultation
        </li>
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
          Architectural Designs upholding local Vastu practices
        </li>
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
          Masonry Services
        </li>
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
          Aluminum & Steel Fabrication
        </li>
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
          Commercial and Residential Electrical Installations
        </li>
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
          Professional Painting Services
        </li>
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
          Interior and Exterior Solutions
        </li>
        <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
          Landscaping - Designing & Maintenance
        </li>
      </ul>,
    ],
    [
      "Facility Management",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      facility_banner,
      facility_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          JKI Holdings offers comprehensive facility management services to
          ensure your spaces remain clean, safe, and sustainable. Our expertise
          includes professional janitorial services, effective pest control,
          eco-friendly chemical supplies, high-quality equipment provision, and
          meticulous garden maintenance. We prioritize efficiency and
          environmental responsibility in every service we provide.
        </p>
      </div>,
    ],
    [
      "JKI Getaways",
      "At J K I Construction, we take pride in creating not just buildings, but entrances that leave a lasting impression. Our gateways are designed to combine functionality, security, and aesthetic appeal, making them the perfect addition to any property.",

      gateway_banner,
      gateway_img,
      <div className="flex flex-col gap-3">
        <ul className="flex flex-col gap-6 list-none">
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
            Total Holiday Getaways
          </li>
          <li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-4 before:h-4 before:rounded-full before:bg-[#C10000]">
            Holiday Residential Solutions
          </li>
        </ul>
        <p className="lh-lg">
          Sri Lanka is a tropical paradise located in the Indian Ocean, known
          for its stunning beaches, lush green forests, and vibrant culture. Our
          travel service provides personalized trips to this beautiful island
          nation, tailored to your specific interests and preferences.
        </p>
        <p className="lh-lg">
          Whether you want to explore ancient temples, hike through breathtaking
          landscapes, or simply relax on a picturesque beach, we can create the
          perfect itinerary for you. Let us help you discover the wonders of Sri
          Lanka and create memories that will last a lifetime
        </p>
      </div>,
    ],
    [
      "Architectural  Designing",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      architecture_banner,
      architecture_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          We offer a full range of architectural services including
          architectural designs, plan certification, plan approvals, and plan
          estimation suitable for all budgets. We design everything from small
          starter homes to one-of-a kind luxury homes.
        </p>
      </div>,
    ],
    [
      "Interior Designing",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      interior_banner,
      interior_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          The intent of being preferred turnkey interior design solution
          provider in the industry with the objective of achieving complete
          customer satisfaction
        </p>
      </div>,
    ],
    [
      "Masonry, Tile & Interlock Services",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      masonry_banner,
      masonry_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          Should you require the services of a mason, make sure you don’t settle
          for the second best. Our companies have skilled contractors to deliver
          optimum results in brick installation, interlocking, paving stones and
          much more all at competitive rates.
        </p>
      </div>,
    ],
    [
      "Plumbing Services",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      plumbing_banner,
      plumbing_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          Plumbing problems can be a common issue, especially in older
          properties. It could be a simple task starting from leaky faucet or
          clogged drains to more complicated, like installing a slop sink or
          adding a laundry room. What is more, we will do it efficiently, at an
          affordable rate, and clear up after ourselves!
        </p>
      </div>,
    ],
    [
      "Wood-Based Services",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      wood_banner,
      wood_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          J K I Holdings provides wood-based innovations and solutions for
          everyday housing and commercial needs. It's product range covers all
          areas of urban construction, from supporting structure to interior
          design.
        </p>
      </div>,
    ],
    [
      "Aluminum Fabrication",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      aluminum_banner,
      aluminum_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          We offer a full range of Aluminum Fabrication services which includes
          Fabric Partitions, windows and much more. The designs delivered to the
          customer will be customized and prepared according to the customer's
          budget and desire.
        </p>
      </div>,
    ],
    [
      "Electrical Services",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      electrical_banner,
      electrical_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          Electrical services are a vital component in any building; thus, it is
          the responsibility of our construction professionals to provide you
          the relevant services, adhering to the basic principles of service
          design
        </p>
      </div>,
    ],
    [
      "Property Management",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      property_banner,
      property_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          Your house, apartment or building may be your most valuable financial
          asset, which is one very good reason why it is important to keep your
          property in good condition. In order to do that, you need access to
          professional services that meet all your requirements. J K I Holdings
          (Pvt) Ltd. is an experienced organization in refurbishing or
          renovating buildings and old factories. Through our in- house team of
          experts and network of trusted and experienced professionals, we
          source the right people for the job you need done.
        </p>
      </div>,
    ],
    [
      "Manpower Supply",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      manpower_banner,
      manpower_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          J K I Holdings (Pvt) Ltd. provides a total manpower supply solutions
          for our clients and ensure a successful recruitment. We highly
          concentrate the value of trust and faith bestowed to us by both our
          clients and candidates. The company managers in charge do visit our
          clients to ensure the candidate’s performance and skills fit our
          clients working culture and surroundings
        </p>
      </div>,
    ],
    [
      "Janitorial Services",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      janitorial_banner,
      janitorial_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          The work-culture at J K I Holdings – Pvt Ltd continuously incorporates
          honesty, proven cleaning systems and eyes for detail. We place huge
          emphasis on floor cleaning, top to bottom dusting and glass cleaning,
          to name a few. We believe, when we focus on excellent cleaning
          standards, not only can we be proud of our work, but our customers
          will also realize JKI Holdings is a company that they can rely on.
        </p>
      </div>,
    ],
    [
      "Landscape Designing",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      landscape_banner,
      landscape_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          J K I Holdings find ourselves to be immensely proud of being on top
          based on the uniqueness reflected in our entire landscape designing,
          planning & maintaining island-wide. We believe your garden must be
          tailored to suit your specific need to ultimately bring you a sense of
          tranquility. Our staff on site is landscapers trained, qualified and
          experienced. They take great care in the artistic creation of your
          garden and will settle for nothing less than the absolute elegance.
          The plants used for the landscaping will be sourced, supplied and
          delivered by selected growers across the country.
        </p>
      </div>,
    ],
    [
      "Garden Maintenance",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      garden_banner,
      garden_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          We believe that maintain a garden merely does not mean watering,
          pruning and cleaning: It carries a lot of sacrifices and
          responsibilities. We bring an aesthetic and perfect view to the
          appearance of the premises which enables and awakens one’s mind to
          support the increase of productivity as employee.
        </p>
      </div>,
    ],
    [
      "Residential Construction",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      residential_banner,
      residential_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          At JKI Holdings (Pvt) Ltd. we pride ourselves in doing more than just
          building houses across Sri Lanka. While quality is our hallmark,
          dedication is our stamp. We assist you in building the lifestyle you
          have always desired. Our aim is to connect with you to construct a
          home that reflects your individual tastes, so you feel right at home
          from the moment you step inside. Throughout the building process, JKI
          Holdings (Pvt) Ltd. will work with you to ensure you are completely
          satisfied with every detail of your new home.
        </p>
      </div>,
    ],
    [
      "Commercial Construction",
      "J K I Holdings is a leading construction company dedicated to delivering innovative, high-quality solutions for residential, commercial, and industrial projects. With a focus on excellence, sustainability, and client satisfaction, we bring visionary designs to life, creating spaces that inspire.",

      commercial_banner,
      commercial_img,
      <div className="flex flex-col gap-3">
        <p className="lh-lg">
          JKI Holdings (Pvt) Ltd. provides design and construction services with
          experienced professionals in place to deliver. JKI Holdings team
          consists of qualified Architects who act as design coordinators and
          manage the consultants through the design process to ensure the most
          buildable outcome is delivered.
        </p>
      </div>,
    ],
  ];

  // Adjust for incomplete serviceData here if required
  const serviceInfo = serviceData[serviceTypeInt] || [
    "Unknown Service",
    "Details not available",
  ];

  return (
    <div>
      {/*header*/}
      <div className="bg-[#C10000] py-6 text-white px-12 max-md:px-6 text-[40px] title">
        <h1>{serviceInfo[0]}</h1>
      </div>
      {/*banner*/}
      <div
        className={`px-12 py-6 text-white bg-center bg-cover bg-no-repeat max-md:px-6 md:min-h-[300px] flex items-center ${
          window.innerWidth <= 640 ? "lh-base" : "lh-lg"
        }`}
        style={{ backgroundImage: `url(${serviceInfo[2]})` }}
      >
        <p className=" max-sm:text-justify">{serviceInfo[1]}</p>
      </div>
      {/*info*/}
      <div className="flex justify-between gap-3 px-12 py-6 max-md:px-6 max-md:flex-col">
        <div className="md:1/3">
          <img
            src={serviceInfo[3]}
            alt="service-image"
            className="h-[400px] aspect-[11/12] object-cover max-md:w-full max-md:max-h-[300px]"
          />
        </div>
        <div className="flex items-center justify-center md:w-2/3 max-sm:text-justify">
          {serviceInfo[4]}
        </div>
      </div>
      {/*common data*/}
      <div className="flex flex-col gap-12 px-12 py-6 max-md:px-6">
        <h1 className="title text-[40px]">Contact Us</h1>
        <div className="bg-[#00000008] py-6 px-12 max-md:px-6 flex justify-center gap-12 max-md:flex-col text-center">
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <img src={email_icon} alt="" />
            <p>jkiholdings@gmail.com</p>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <img src={add_icon} alt="" />
            <p> No: 10, Theldeniya Road, Balagolla,Kengalla, Kandy.</p>
          </div>
          <div className="flex flex-col items-center justify-center md:w-1/3">
            <img src={phone_icon} alt="" />
            <p> +94 773 606 487 / +94 773 037238 </p>
          </div>
        </div>
        <span className="flex flex-col items-center justify-center gap-6">
          <p className="text-center md:w-2/3 lh-lg">
            We’d love to hear from you! Whether you have a question, need a
            consultation, or want to schedule a fitting, the team at JKI
            Holdings is here to assist you.
          </p>
          <button className="rounded-lg bg-[#C10000] px-6 py-3 text-white hover:scale-90 transition-all">
            Contact Us
          </button>
        </span>
      </div>
    </div>
  );
}

export default SingleService;
