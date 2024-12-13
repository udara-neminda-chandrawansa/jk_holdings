import img1 from "./assets/AboutGrid/img-1.png";
import img2 from "./assets/AboutGrid/img-2.png";
import img3 from "./assets/AboutGrid/img-3.png";
import img4 from "./assets/AboutGrid/img-4.png";
import img5 from "./assets/AboutGrid/img-5.png";
import img6 from "./assets/AboutGrid/img-6.png";
import img7 from "./assets/AboutGrid/img-7.png";

function CSR() {
  return (
    <div>
      {/*heading + text*/}
      <div className="flex flex-col gap-6 p-12 max-md:p-6">
        <h1 className="text-[30px] text-[#C10000] title">Our CSR Projects</h1>
        <p className="text-justify 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base line-height-abt">
          At JKI Holdings, we believe in taking responsibility for our actions,
          both as a company and as members of society. We acknowledge the impact
          we have on the environment, the people we work with, and the
          communities we operate in. Therefore, we have initiated a range of
          projects and programs that aim to create a positive impact on the
          world around us. Through our corporate social responsibility (CSR)
          projects, we strive to promote sustainability, equality, diversity,
          and inclusion. We are committed to making a difference and creating a
          better future for all.
        </p>
      </div>
      {/*phrase*/}
      <div className="flex justify-center text-2xl poltawski">
        <span className="inline text-[60px] max-md:text-2xl sansita max-lg:text-3xl max-xl:text-5xl text-[#C10000]">
          “
        </span>
        <h1 className="px-3 text-center w-fit max-sm:p-3">
          For a brighter future
        </h1>
        <span className="inline text-[60px] max-md:text-2xl sansita max-lg:text-3xl max-xl:text-5xl text-[#C10000]">
          ”
        </span>
      </div>
      {/*photo grid*/}
      <div className="p-12 max-md:p-6">
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
    </div>
  );
}

export default CSR;
