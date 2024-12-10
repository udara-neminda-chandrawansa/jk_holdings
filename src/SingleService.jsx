import construction_banner from "./assets/Services/construction_banner.png";
import gateway_banner from "./assets/Services/gateway_banner.png";
import architecture_banner from "./assets/Services/architecture_banner.png";
import construction_img from "./assets/ServiceCards/card_1.jpg";
import gateway_img from "./assets/ServiceCards/card_3.jpg";
import architecture_img from "./assets/ServiceCards/card_4.png";
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
  };

  // Get the integer index from the map or default to 16
  const serviceTypeInt = serviceTypeMap[serviceType] ?? 0;

  const serviceData = [
    [
      "J K I Constructions",
      "Welcome to J K I Construction, where innovation meets excellence in construction. With a proven track record of delivering high-quality projects, we specialize in creating spaces that inspire and endure. From residential homes to commercial buildings, our expert team is dedicated to turning your vision into reality. At J K I Construction, we prioritize precision, sustainability, and client satisfaction. Every project is crafted with attention to detail, ensuring superior craftsmanship and timely completion. Whether you're building your dream home or embarking on a large-scale development, we are here to guide you every step of the way. Discover the difference of working with a trusted partner who values quality, integrity, and innovation. Choose J K I Construction—where your dreams take shape.",

      construction_banner,
      construction_img,
      <ul className="flex flex-col gap-6 list-none">
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
      "facility mgmt text here.",

      "banner-image-here",
      "small-image-here",
      "Facility Management description here.",
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
        className={`px-12 py-6 text-white max-md:px-6 ${
          window.innerWidth <= 640 ? "lh-base" : "lh-lg"
        }`}
        style={{ backgroundImage: `url(${serviceInfo[2]})` }}
      >
        <p>{serviceInfo[1]}</p>
      </div>
      {/*info*/}
      <div className="flex justify-between gap-3 px-12 py-6 max-md:px-6 max-md:flex-col">
        <div className="md:w-1/2">
          <img
            src={serviceInfo[3]}
            alt="service-image"
            className="w-full aspect-[11/12] object-cover max-md:w-full max-md:max-h-[300px]"
          />
        </div>
        <div className="flex items-center justify-center md:w-1/2">{serviceInfo[4]}</div>
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
          <p className="text-center md:w-2/3">
            We’d love to hear from you! Whether you have a question, need a
            consultation, or want to schedule a fitting, the team at Janaka
            Tailors is here to assist you.
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
