import ServiceCard from "./components/ServiceCard";
import Card_1 from "./assets/ServiceCards/card_1.jpg";
import Card_2 from "./assets/ServiceCards/card_2.jpg";
import Card_3 from "./assets/ServiceCards/card_3.jpg";
import Card_4 from "./assets/ServiceCards/card_4.png";
import Card_5 from "./assets/ServiceCards/card_5.png";
import Card_6 from "./assets/ServiceCards/card_6.png";
import Card_7 from "./assets/ServiceCards/card_7.png";
import Card_8 from "./assets/ServiceCards/card_8.png";
import Card_9 from "./assets/ServiceCards/card_9.png";
import Card_10 from "./assets/ServiceCards/card_10.png";
import Card_11 from "./assets/ServiceCards/card_11.png";
import Card_12 from "./assets/ServiceCards/card_12.png";
import Card_13 from "./assets/ServiceCards/card_13.png";
import Card_14 from "./assets/ServiceCards/card_14.png";
import Card_15 from "./assets/ServiceCards/card_15.png";
import Card_16 from "./assets/ServiceCards/card_16.png";
import Card_17 from "./assets/ServiceCards/card_17.png";
import { useState } from "react";

function Services() {
  const [pagination, setPagination] = useState(1); // for setting and retreiving pagination

  return (
    <div>
      {/**heading + text*/}
      <div className="flex flex-col gap-6 p-12 max-md:p-6">
        <h1 className="text-[30px] text-[#C10000] title">Our Services</h1>
        <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt max-sm:text-justify">
          At JKI Construction, we are dedicated to transforming your visions
          into reality with unparalleled expertise and craftsmanship. Our
          comprehensive range of services ensures every aspect of your
          construction project is handled with precision, innovation, and care.
        </p>
      </div>
      {/*card grid*/}
      <div>
        <div className="grid grid-cols-4 gap-6 px-12 pb-3 place-items-center max-md:px-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {pagination === 1 ? (
            <>
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
              <ServiceCard
                img={Card_5}
                text={"Interior Designing"}
                url={"interior-designing"}
              ></ServiceCard>
              <ServiceCard
                img={Card_6}
                text={"Masonry, Tile & Interlock Services"}
                url={"masonry-tile-interlock-services"}
              ></ServiceCard>
              <ServiceCard
                img={Card_7}
                text={"Plumbing Services"}
                url={"plumbing-services"}
              ></ServiceCard>
              <ServiceCard
                img={Card_8}
                text={"Wood-based Services"}
                url={"wood-based-services"}
              ></ServiceCard>
            </>
          ) : pagination === 2 ? (
            <>
              <ServiceCard
                img={Card_9}
                text={"Aluminum Fabrication"}
              ></ServiceCard>
              <ServiceCard
                img={Card_10}
                text={"Electrical Services"}
              ></ServiceCard>
              <ServiceCard
                img={Card_11}
                text={"Property Management"}
              ></ServiceCard>
              <ServiceCard img={Card_12} text={"Manpower Supply"}></ServiceCard>
              <ServiceCard
                img={Card_13}
                text={"Janitorial Services"}
              ></ServiceCard>
              <ServiceCard
                img={Card_14}
                text={"Landscape Designing"}
              ></ServiceCard>
              <ServiceCard
                img={Card_15}
                text={"Garden Maintenance"}
              ></ServiceCard>
              <ServiceCard
                img={Card_16}
                text={"Residential Construction"}
              ></ServiceCard>
            </>
          ) : (
            <ServiceCard
              img={Card_17}
              text={"Commercial Construction"}
              extraClasses={
                "md:col-start-2 md:col-span-2 w-1/2 md:justify-self-center place-self-center"
              }
            ></ServiceCard>
          )}
        </div>
      </div>
      {/*pagination*/}
      <nav className="flex justify-center py-3">
        <ul className="inline-flex -space-x-px text-sm">
          <li>
            <button
              onClick={() =>
                pagination > 1 ? setPagination(pagination - 1) : ""
              }
              className={`flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg md:hover:bg-gray-100 md:hover:text-gray-200 ${
                pagination === 1 ? "text-gray-100" : ""
              }`}
            >
              Previous
            </button>
          </li>
          <li>
            <button
              onClick={() => setPagination(1)}
              className={`items-center justify-center h-8 px-3 leading-tight bg-white border border-gray-300 flflex md:hover:bg-gray-100 md:hover:text-gray-700 ${
                pagination === 1 ? " text-[#C10000]" : " text-gray-500"
              }`}
            >
              1
            </button>
          </li>
          <li>
            <button
              onClick={() => setPagination(2)}
              className={`items-center justify-center h-8 px-3 leading-tight bg-white border border-gray-300 flflex md:hover:bg-gray-100 md:hover:text-gray-700 ${
                pagination === 2 ? " text-[#C10000]" : " text-gray-500"
              }`}
            >
              2
            </button>
          </li>
          <li>
            <button
              onClick={() => setPagination(3)}
              aria-current="page"
              className={`items-center justify-center h-8 px-3 leading-tight bg-white border border-gray-300 flflex md:hover:bg-gray-100 md:hover:text-gray-700 ${
                pagination === 3 ? " text-[#C10000]" : " text-gray-500"
              }`}
            >
              3
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                pagination < 3 ? setPagination(pagination + 1) : ""
              }
              className={`flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg md:hover:bg-gray-100 md:hover:text-gray-200 ${
                pagination === 3 ? "text-gray-100" : ""
              }`}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Services;
