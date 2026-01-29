import React from "react";

const WorkCard = ({ item }) => {
  return (
    <div className="rounded-[20px] flex flex-col items-center bg-white w-[100%] ">
      <figure className="w-[100%]">
        <img src={item.imgname} alt="" className="w-[100%] rounded-[20px] object-cover" />
      </figure>
      <div className="py-8  flex flex-col items-center" >
        <p className="text-[#151515] font-bold text-xl pb-[10px]">
          {item.h}  
        </p>
        <p className="text-[#737373] font-normal text-lg/[26px] lg:w-[340px]  text-center">
          {item.p}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
