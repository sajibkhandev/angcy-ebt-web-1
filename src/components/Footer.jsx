function Footer() {
  return (
    <div className="flex flex-wrap justify-between w-full max-w-[1320px] mx-auto py-10 px-4 md:px-6 lg:px-0 gap-8 md:gap-6">
      {/* Footer content goes here */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
        <img src="logo.png" alt="logo.png" />
        <div className="w-full md:w-[356px] h-auto md:h-[104px]">
          <p className="font-inter text-sm md:text-base text-gray-600 mt-4 line-clamp-4">
            I had a good experience while using this app, what fascinated me was
            the live tracking feature There are many variations of passages of
            Lorem Ipsum available, but the majority.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
        <h2 className="font-semibold text-[20px] md:text-[24px] pb-4">About</h2>
        <ul>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            About us
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            Featured
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            News
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700">
            Careers{" "}
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
        <h2 className="font-semibold text-[20px] md:text-[24px] pb-4">
          Company
        </h2>
        <ul>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            Our Team
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            Partner With Us
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            FAQ
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700">
            Blog{" "}
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
        <h2 className="font-semibold text-[20px] md:text-[24px] pb-4">
          Support
        </h2>
        <ul>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            About
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            Support Center
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            Feedback
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2">
            Contact Us
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700">
            Accessibility
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
        <h2 className="font-semibold text-[20px] md:text-[24px] pb-4">
          Get in touch
        </h2>
        <ul>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700 mb-2 loading-5">
            info@gmail.com
          </li>
          <li className="font-regular text-[14px] md:text-[16px] text-gray-700">
            +88 0121 0212
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
