import React from 'react'
import AddCard from './card/AddCard'
import Gr1 from '../assets/gr1.png'
import Gr2 from '../assets/gr2.png'
import Gr3 from '../assets/gr3.png'
import Gr4 from '../assets/gr4.png'
import Gr5 from '../assets/gr5.png'
import Gr6 from '../assets/gr6.png'

const Provided = () => {
  return (
     <section className='mx-w-[1320px]'>
            <div className='container mx-auto py-8'>
                <div className='text-center'>
                    <h2 className='md:text-4xl text-2xl font-bold'>Our Provided Services</h2>
                    <p className='text-[#737373] lg:pr-120 lg:pl-120 pb-8 pt-5 text-center '>There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form.</p>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-5'>
                    <AddCard image={Gr1} name={'Web Design'} para={'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don'} />
                    <AddCard  image={Gr2} name={'UI/UX Design'} para={'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don'} />
                    <AddCard image={Gr3}  name={'Web Development'} para={'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don'} />
                    <AddCard image={Gr4}  name={'Motion Graphics'} para={'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don'} />
                    <AddCard image={Gr5}  name={'3D Animation'} para={'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don'} />
                    <AddCard image={Gr6}  name={'Digital Marketing'} para={'There are many variations of passages of Lorem Ipsum available, but themajority  have suffered alteration in some form, by injected humour, or randomised words which don'} />

                </div>
            </div>
        </section>
  )
}

export default Provided