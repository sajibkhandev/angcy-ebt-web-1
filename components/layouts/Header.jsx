import Container from "../Container"
import logo from '../../src/assets/logo.png'
import Images from "../Images"

const Header = () => {
  return (
    <>
    <div className="py-15 sm:w-[640px] lg:w-full">
      <Container className={'sm:w-[620px] lg:w-[1320px]'}>
        <div className="lg:flex lg:justify-between items-center">
            <div className="logo">
             <Images imgSrc={logo} className={'mx-auto'}/>
            </div>
            <div className="menu sm:pt-10 lg:pt-0">
              <ul className="flex justify-between items-center gap-x-15">
                <li className="text-[18px] text-[#737373] hover:text-[#6A4DF4] hover:font-bold cursor-pointer font-inter">Home</li>
                <li className="text-[18px] text-[#737373] hover:text-[#6A4DF4] hover:font-bold cursor-pointer font-inter">About</li>
                <li className="text-[18px] text-[#737373] hover:text-[#6A4DF4] hover:font-bold cursor-pointer font-inter">Service</li>
                <li className="text-[18px] text-[#737373] hover:text-[#6A4DF4] hover:font-bold cursor-pointer font-inter">Careers</li>
                <li className="text-[18px] text-[#737373] hover:text-[#6A4DF4] hover:font-bold cursor-pointer font-inter">Contact</li>
              </ul>
            </div>
            <div className="btn  sm:text-center sm:pt-10 lg:pt-0">
              <button className="px-[42px] py-[15px] bg-[#6A4DF4] text-white font-bold font-inter rounded-[10px] cursor-pointer">Contact</button>
            </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default Header
