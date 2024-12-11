import proj_1 from "./assets/Projects/proj-1.png";
import proj_2 from "./assets/Projects/proj-2.png";
import proj_3 from "./assets/Projects/proj-3.png";
import client1 from "./assets/clients/brandix.png";
import client2 from "./assets/clients/cbl.png";
import client3 from "./assets/clients/hela.png";
import client4_bg from "./assets/clients/mas_bg.png";
import client5_bg from "./assets/clients/esquel_bg.png";

function Projects() {
  return (
    <div>
      {/*heading + text*/}
      <div className="flex flex-col gap-6 p-12 max-md:p-6">
        <h1 className="text-[30px] text-[#C10000] title">Our Projects</h1>
        <p className="2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt max-sm:text-justify">
          Here, we showcase the diverse range of construction projects we’ve
          successfully completed. Each project reflects our commitment to
          excellence, innovation, and delivering on time with unmatched quality.
          From residential homes and luxury villas to commercial buildings,
          industrial facilities, and infrastructure developments, our portfolio
          highlights our versatility and expertise in construction. Every
          project is a testament to our meticulous planning, skilled
          craftsmanship, and adherence to safety and sustainability standards.
          Explore our work and discover why J K I Holdings is a trusted name in
          the construction industry. Our projects not only meet client
          expectations but often exceed them, creating enduring landmarks that
          stand the test of time.
        </p>
      </div>
      {/*projects grid*/}
      <div className="flex justify-center gap-12 px-12 max-md:gap-6 max-md:px-6 md:flex-wrap max-md:flex-col">
        {/*proj-1*/}
        <div
          className="flex flex-col md:w-[40%] gap-6 p-6"
          style={{ backgroundImage: `url(${proj_1})` }}
        >
          <h1 className="text-[30px] text-[#C10000] title">
            Garden Maintenance & Janitorial Services
          </h1>
          <ul className="h-[300px] flex flex-col gap-3 pr-3 overflow-y-scroll red-custom-scroll">
            <li>Nestle Lanka (PVT) Ltd., Pannala.</li>
            <li>Ceylon Biscuits Limited</li>
            <li> Thulhiriya Board Of Investments </li>
            <li> Ruhunu Foods (pvt) Ltd., Pallekele</li>
            <li>Linea Clothing, BOI, Pallekele</li>
            <li> Linea Intimates, BOI, Pallekele</li>
            <li> MAS Active Contour line</li>
            <li>MAS Fabric Park (Pvt) Ltd. Kurunegala Road, Thulhiriya</li>
            <li>Noyon Lanka (Pvt) Ltd. EPZ, Biyagama</li>
            <li>MAS Active Nirmaana Division, EPZ Katunayake</li>
            <li> MAS Active Shadowline (Pvt) Ltd, EPZ, Katunayake</li>
          </ul>
        </div>
        {/*proj-2*/}
        <div
          className="flex flex-col md:w-[40%] gap-6 p-6"
          style={{ backgroundImage: `url(${proj_2})` }}
        >
          <h1 className="text-[30px] text-[#C10000] title">
            Construction & Refurbishment
          </h1>
          <ul className="h-[300px] flex flex-col gap-3 pr-3 overflow-y-scroll red-custom-scroll">
            <li>
              Unichela (Pvt) Ltd. Panadura. Construction of factory building.
              Sub contract with ICDL
            </li>
            <li>Sumithra garments Polgahawela. ICDL Subcontract</li>
            <li> CN Bodymatrix building construction, BOI, Pallekele </li>
            <li>
              Construction and Renovations of Housing Section of MAS Fabric
              Park, Thulhiriya
            </li>
            <li>
              Construction of Luxury type twenty Rooms at MAS Institute of
              Management and Technology of MAS Fabric Park
            </li>
            <li>
              Construction and Renovations at Hela Clothing. (Thihariya, Naula,
              Palapathwala)
            </li>
          </ul>
        </div>
        {/*proj-3*/}
        <div
          className="flex flex-col md:w-[40%] gap-6 p-6"
          style={{ backgroundImage: `url(${proj_3})` }}
        >
          <h1 className="text-[30px] text-[#C10000] title">Landscaping</h1>
          <ul className="h-[300px] flex flex-col gap-3 pr-3 overflow-y-scroll red-custom-scroll">
            <li>Designing the garden at Unichela (Pvt) Ltd. Panadura</li>
            <li>
              {" "}
              Designing, Construction & maintenance garden at Linea Clothing
              (Pvt) Ltd., BOI, Pallekele.
            </li>
            <li>
              {" "}
              Designing, Construction & maintenance the garden at Noyon Lanka
              (Pvt) Ltd., EPZ, Biyagama{" "}
            </li>
            <li>Designing Garden at Linea Intimo (Pvt) Ltd. BOI, Biyagama</li>
            <li>
              Designing, Construction & maintenance the garden at Textured &
              Jersey Lanka (Pvt) Ltd., BOI, Seethawaka, Awissawella. (Project
              value 1.2 M)
            </li>
            <li>
              Designing, Construction & maintenance garden Colorit (Pvt) Ltd.
              building.
            </li>
          </ul>
        </div>
      </div>
      {/*client logos*/}
      <div className="flex items-center justify-center gap-12 p-12 max-md:gap-6 max-md:p-6 max-md:flex-col">
        <img
          src={client1}
          alt="client-logo"
          className="object-contain w-[200px] aspect-square"
        />
        <img
          src={client2}
          alt="client-logo"
          className="object-contain w-[200px] aspect-square"
        />
        <img
          src={client3}
          alt="client-logo"
          className="object-contain w-[200px] aspect-square"
        />
      </div>
      {/*Groups*/}
      <div className="flex justify-center gap-12 px-12 pb-12 max-md:gap-6 max-md:flex-col max-md:px-6 max-md:pb-6">
        {/*grp-1*/}
        <div className="flex flex-col gap-6 p-6 bg-center bg-no-repeat bg-contain md:w-1/2" style={{ backgroundImage: `url(${client4_bg})` }}>
          <h1 className="text-[30px] text-[#C10000] title">MAS Holdings</h1>
          <ul className="flex flex-col gap-6">
            <li>Unichela (Pvt) Ltd., Panadura</li>
            <li>Linea Clothing (Pvt) Ltd., BOI, Pallekele.</li>
            <li>Linea Intimates (Pvt) Ltd., BOI, Pallekele</li>
            <li>MAS Active Contourline, BOI, Pallekele.</li>
            <li>Linea Intimo (Pvt) Ltd., EPZ, Biyagama.</li>
            <li>MAS Active Nirmaana, EPZ, Katunayake.</li>
            <li>MAS Active Shadowline (Pvt) Ltd., EPZ, Katunayake.</li>
            <li>MAS Active Shadeline (Pvt) Ltd. Mahiyangana.</li>
            <li>MAS Fabric Park, Kurunegala Road, Thulhiriya.</li>
            <li>Casual line (Pvt) Ltd., Mawathagama.</li>
          </ul>
        </div>
        {/*grp-2*/}
        <div className="flex flex-col gap-6 p-6 bg-center bg-no-repeat bg-contain md:w-1/2" style={{ backgroundImage: `url(${client5_bg})` }}>
          <h1 className="text-[30px] text-[#C10000] title">Esquel Group</h1>
          <ul className="flex flex-col gap-6">
            <li>Polytex Garments (Pvt) Ltd.</li>
            <li>Screenline Group of Companies</li>
            <li>Colorit (Pvt) Ltd., BOI, Pallekele.</li>
            <li>CN BodyMatrix (Pvt) Ltd.</li>
            <li>Esquel Group</li>
            <li>Polytex Garments (Pvt) Ltd.</li>
            <li>Kanrich Finance (Pvt) Ltd., Kandy.</li>
            <li>Smart Shirts (Pvt) Ltd.,Pallekele.</li>
            <li>Nestle Lanka (pvt)Ltd., Pannala.</li>
            <li>Ruhunu Foods (pvt) Ltd., Pallekele.</li>
            <li>Heineken Lanka (Pvt) Ltd., Mawathagama.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
