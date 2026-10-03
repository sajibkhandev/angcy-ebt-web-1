import React from 'react'

const AddCard = ({name,image,para}) => {
  return (
    <div className="card bg-base-100 w-110 shadow-sm">
  <figure>
    <img className='pt-5 pl-45 text-lg'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="lg:card-body rounded-3xl py-5 ">
    <h2 className="card-title lg:text-4xl text-2xl font-semibold text-center">{name}</h2>
    <p className='text-[#737373] lg:w-100 w-80 text-center pl-20 py-5'>{para}</p>
    
  </div>
</div>
  )
}

export default AddCard