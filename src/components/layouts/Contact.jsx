import React from 'react'
import Container from '../Container';

const Contact = () => {
  return (
    <>
      <div className="bg-[#F3F3F3] py-[150px]">
        <Container>
          <div className="flex justify-between items-center">
            <div className="textPart w-[526px]">
              <h3 className="text-[45px] font-bold text-[#151515] pb-5 w-[450px]">
                We Do design, Code & Development
              </h3>
              <p className="text-base text-[#7B7B7B]">
                I had a good experience while using this app, what fascinated me
                was the live tracking feature There are many variations of
                passages of Lorem Ipsum available, but the majority. There are
                many variations of passages of Lorem Ipsum available, but
                themajority have suffered alteration in some form.
              </p>
            </div>
            <div className="input bg-white py-[61px] px-[43px] rounded-[20px] w-[536px]">
              <h3 className="text-[45px] font-bold text-[#151515]">
                Get a free quote now
              </h3>
              <p className='pt-5'>Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-[#E8E8E8] w-[450px] py-[19px] px-[23px] outline-none mt-5 rounded-[10px]"
              />
              <p className='pt-5'>Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-[#E8E8E8] w-[450px] py-[19px] px-[23px] outline-none mt-5 rounded-[10px]"
              />
              <p className='pt-5'>Name</p>
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-[#E8E8E8] w-[450px] py-[19px] px-[23px] outline-none mt-5 rounded-[10px]"
              />
              <button className=''></button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Contact