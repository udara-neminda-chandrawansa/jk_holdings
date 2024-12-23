import ServiceCard from "./components/ServiceCard";

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

function ServicesCardsPage({mainService}) {
  return (
    <div>
      {/**heading + text*/}
      <div className="flex flex-col gap-6 p-12 max-md:p-6">
        <h1 className="text-[30px] text-[#C10000] title">
          {mainService === "construction"
            ? "JKI Constructions"
            : mainService === "facility-management"
            ? "JKI Facility Management"
            : ""}
        </h1>
      </div>
      {/*card grid*/}
      <div>
        <div className="grid grid-cols-4 gap-6 px-12 pb-6 place-items-center max-md:px-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          {mainService === "construction" ? (
            <>
              <ServiceCard
                img={Card_16}
                text={"Residential Construction"}
                url={"residential-construction"}
              ></ServiceCard>
              <ServiceCard
                img={Card_17}
                text={"Commercial Construction"}
                url={"commercial-construction"}
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
              <ServiceCard
                img={Card_9}
                text={"Aluminum Fabrication"}
                url={"aluminum-fabrication"}
              ></ServiceCard>
            </>
          ) : mainService === "facility-management" ? (
            <>
              <ServiceCard
                img={Card_10}
                text={"Electrical Services"}
                url={"electrical-services"}
              ></ServiceCard>
              <ServiceCard
                img={Card_11}
                text={"Property Management"}
                url={"property-management"}
              ></ServiceCard>
              <ServiceCard
                img={Card_12}
                text={"Manpower Supply"}
                url={"manpower-supply"}
              ></ServiceCard>
              <ServiceCard
                img={Card_13}
                text={"Janitorial Services"}
                url={"janitorial-services"}
              ></ServiceCard>
              <ServiceCard
                img={Card_14}
                text={"Landscape Designing"}
                url={"landscape-designing"}
              ></ServiceCard>
              <ServiceCard
                img={Card_15}
                text={"Garden Maintenance"}
                url={"garden-maintenance"}
              ></ServiceCard>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default ServicesCardsPage;
