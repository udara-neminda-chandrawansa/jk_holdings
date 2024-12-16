import { useState } from "react";
import coconut_1 from "./assets/csr/csr-coconut-1.png";
import coconut_2 from "./assets/csr/csr-coconut-2.png";
import coconut_3 from "./assets/csr/csr-coconut-3.png";
import coconut_4 from "./assets/csr/csr-coconut-4.png";
import coconut_5 from "./assets/csr/csr-coconut-5.png";
import coconut_6 from "./assets/csr/csr-coconut-6.png";
import coconut_7 from "./assets/csr/csr-coconut-7.png";
import coconut_8 from "./assets/csr/csr-coconut-8.png";
import coconut_9 from "./assets/csr/csr-coconut-9.png";

function CSRNew() {
  const [paraVisibility, setParaVisibility] = useState(true);
  const [largeGrid, setLargeGrid] = useState(false);
  const handleViewAll = () => {
    if (paraVisibility) {
      setParaVisibility(false);
      setLargeGrid(true);
    } else {
      setParaVisibility(true);
      setLargeGrid(false);
    }
  };

  return (
    <div>
      {/*header*/}
      <div className="bg-[#C10000] py-6 text-white px-12 max-md:px-6 text-[40px] title">
        <h1>Our CSR Projects</h1>
      </div>
      {/*para*/}
      {paraVisibility ? (
        <div className="px-12 py-6 max-md:px-6">
          <p className="text-justify line-height-abt 2xl:text-2xl xl:text-xl max-md:text-lg max-sm:text-base">
            At JKI Holdings, we believe that building communities goes beyond
            constructing buildings; it’s about uplifting lives and fostering
            sustainable development. Through our Social Care Project, we are
            committed to making a positive impact on society by addressing
            critical social and environmental challenges.
          </p>
        </div>
      ) : (
        ""
      )}
      {/*second header*/}
      <div className="py-6 text-[#C10000] px-12 max-md:px-6 text-[40px] title">
        <h1>Coconut plant’s contribution</h1>
      </div>
      {/*Photo grid*/}
      <div className="grid grid-cols-3 gap-4 px-12 max-md:grid-cols-2 max-sm:grid-cols-1 max-md:px-6">
        <div>
          <img
            src={coconut_1}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        <div>
          <img
            src={coconut_2}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        <div>
          <img
            src={coconut_3}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        <div>
          <img
            src={coconut_4}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        <div>
          <img
            src={coconut_5}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        <div>
          <img
            src={coconut_6}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        <div>
          <img
            src={coconut_7}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        <div>
          <img
            src={coconut_8}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        <div>
          <img
            src={coconut_9}
            alt="csr-coconut-img"
            className="max-sm:w-full"
          />
        </div>
        {largeGrid ? (
          <>
            {" "}
            <div>
              <img
                src={coconut_1}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
            <div>
              <img
                src={coconut_2}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
            <div>
              <img
                src={coconut_3}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
            <div>
              <img
                src={coconut_4}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
            <div>
              <img
                src={coconut_5}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
            <div>
              <img
                src={coconut_6}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
            <div>
              <img
                src={coconut_7}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
            <div>
              <img
                src={coconut_8}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
            <div>
              <img
                src={coconut_9}
                alt="csr-coconut-img"
                className="max-sm:w-full"
              />
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      {/*view all/go back btn*/}
      <div className="flex justify-center px-12 py-6 underline max-md:px-6">
        <button onClick={handleViewAll}>
          {paraVisibility ? "View All" : "Go Back"}
        </button>
      </div>
    </div>
  );
}
export default CSRNew;
