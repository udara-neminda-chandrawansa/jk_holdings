import SCPCard from "./components/SCPCard";
import ServiceCard from "./components/ServiceCard";

import Card_1 from "./assets/ServiceCards/card_1.jpg";
import Card_2 from "./assets/ServiceCards/card_2.jpg";
import Card_3 from "./assets/ServiceCards/card_3.jpg";

function Services() {

  return (
    <div>
      {/**heading + text*/}
      <div className="flex flex-col gap-6 p-12 max-md:p-6">
        <h1 className="text-[30px] text-[#C10000] title">Our Services</h1>
        <p className="text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt">
          At JKI Construction, we are dedicated to transforming your visions
          into reality with unparalleled expertise and craftsmanship. Our
          comprehensive range of services ensures every aspect of your
          construction project is handled with precision, innovation, and care.
        </p>
      </div>
      {/*card grid*/}
      <div>
        <div className="grid grid-cols-3 gap-6 px-12 pb-6 place-items-center max-md:px-6 max-md:grid-cols-2 max-sm:grid-cols-1">
          <SCPCard
            img={Card_1}
            text={"Construction"}
            url={"construction"}
          ></SCPCard>
          <SCPCard
            img={Card_2}
            text={"Facility Management"}
            url={"facility-management"}
          ></SCPCard>
          <ServiceCard
            img={Card_3}
            text={"Getaways"}
            url={"getaways"}
          ></ServiceCard>
        </div>
      </div>
    </div>
  );
}

export default Services;
