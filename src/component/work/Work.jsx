import React from "react";
import WorkCard from "../commonComponent/WorkCard";
import { workCardsData, workNavnar } from "../../helper/workElement";

const Work = () => {
  return (
    <section className=" py-7 md:py-12 lg:py-[150px] bg-[#F3F3F3]">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-0">
        <div className="flex flex-col items-center ">
          <h2 className="text-[45px] font-bold  text-[#151515] ">
            {" "}
            Our Recent Work
          </h2>
          <p
            className="text-center text-lg/[26px] font-normal text-center pt-5 pb-8
            text-[#A1A1A1] lg:w-[620px]"
          >
            There are many variations of passages of Lorem Ipsum available, but
            themajority have suffered alteration in some form.
          </p>
        </div>
        <div className="mb-[50px]">
          <ul className="flex flex-wrap gap-6 lg:justify-between " >
            {workNavnar.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className="inline-block font-semibold text-lg/[26px] hover:text-[#6A4DF4] text-[#A1A1A1] transition-all duration-300 ease-in-out"
                >{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            workCardsData.map((item) => (
              <WorkCard key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Work;
