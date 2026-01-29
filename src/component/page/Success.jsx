import Container from "../Container";
import { FaStar } from "react-icons/fa";
import Flex from "../Flex";

const Success = () => {
  return (
    <>
      <Container
        className={
          "bg-[#F8F6FE] rounded-[20px] px-7 py-8 lg:px-[50px] lg:py-[70px] font-inter"
        }
      >
        <div className={"justify-between lg:flex items-center"}>
          <div className="">
            <h5 className="text-[#6A4DF4] text-2xl font-medium mb-4">
              Our Success
            </h5>
            <h4 className="text-[#151515] text-4xl font-semibold w-[380px]">
              West cost Brand makers-Global Edge
            </h4>
          </div>
          <Flex
            className={
              "lg:gap-x-25 gap-x-7 items-start mt-10 lg:mt-0 justify-end lg:justify-normal"
            }
          >
            <div className="">
              <p className="text-[#151515] font-bold text-[50px]">200+</p>
              <p className="text-[#737373] text-xl font-medium my-5">
                Customer Satisfied
              </p>
              <img src="/src/assets/successOne.png" alt="" />
            </div>
            <div className="">
              <p className="text-[#151515] font-bold text-[50px]">4.5</p>
              <p className="text-[#737373] text-xl font-medium my-5">
                200+ Avg rating
              </p>
              <Flex className={"gap-x-1 text-[#FFAC4A] text-base"}>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </Flex>
            </div>
            <div className="">
              <p className="text-[#151515] font-bold text-[50px]">351+</p>
              <p className="text-[#737373] text-xl font-medium my-5">
                Project Delivered
              </p>
              <a href="#" className="text-[#6A4DF4] font-medium text-xl ">
                <u>See Works</u>
              </a>
            </div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Success;
