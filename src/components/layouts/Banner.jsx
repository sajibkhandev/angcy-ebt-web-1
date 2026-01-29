import Container from "../container";
import Images from "../Images";
import banner from "/src/assets/bannerImg.png";
const Banner = () => {
  return (
    <Container>
      <div className="lg:flex lg:justify-between lg:items-center sm:py-5 lg:py-20">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-[#151515] lg:text-[75px] sm:text-[50px] sm:font-medium lg:font-bold font-inter  lg:w-[636px] leading-[120%]">
            We Help brands with high quality services
          </h1>
          <p className="text-[#737373] text-base font-inter md:px-[100px] lg:px-0 lg:w-[604px] leading-7">
            There are many variations of passages of Lorem Ipsum available, but
            themajority have suffered alteration in some form, by injected
            humour, or randomised words which don't look.
          </p>
          <button
            className="py-3.5 lg:px-10 sm:px-7
           bg-[#6A4DF4] text-white text-[20px] font-semibold font-inter rounded-[10px] lg:mt-10 sm:mt-5 cursor-pointer"
          >
            Get Started
          </button>
        </div>
        <div className="sm:mt-10 sm:mx-8 sm:mb-5">
          <Images srcImg={banner} />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
