import m_1 from "./assets/milestones/m-1.png";
import m_2 from "./assets/milestones/m-2.png";
import m_3 from "./assets/milestones/m-3.png";
import m_4 from "./assets/milestones/m-4.png";

import { Link } from "wouter";

function Achievements() {
  const ach_data = [
    [
      m_1,
      <>
        <p className="p-3">
          Best Coming Entrepreneur of 2015 in Central Province
        </p>
      </>,
    ],
    [
      m_2,
      <>
        <p className="p-3">
          Best Performing Entrepreneur of 2016 in Central Province 
        </p>
      </>,
    ],
    [
      m_3,
      <>
        <p className="p-3">Star Awards in 2017</p>
      </>,
    ],
    [
      m_4,
      <>
        <p className="p-3">
          Best Performing Entrepreneur of 2016 in Central Province
        </p>
      </>,
    ],
  ];

  return (
    <div>
      {/*Achievements*/}
      <div className="h-fit">
        <div className="flex flex-col gap-6 p-12 h-fit max-md:p-6">
          <h1 className="text-[30px] text-[#C10000] title">Our Achievements</h1>
          {/*Achievement cards*/}
          <div className="grid grid-cols-3 gap-4">
          {ach_data.map((content, index) => (
              <div key={index} className="bg-[#000000BD] text-white w-fit">
                <img
                  src={content[0]}
                  alt={`ach-img-${index + 1}`}
                  className="h-[300px] w-full object-cover object-top"
                />
                <p className="p-3">{content[1]}</p>
              </div>
            ))}
          </div>
        </div>
        <span className="flex justify-end w-full px-12 py-3 underline max-md:px-6">
          <Link href={"/aboutus"}>View All</Link>
        </span>
      </div>
    </div>
  );
}

export default Achievements;
