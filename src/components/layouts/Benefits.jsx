import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import BenefitImage from '/src/assets/benefitImage.png'
import BusinessIdea from '/src/assets/business idea.png'
import Money from '/src/assets/money.png'
import Support from '/src/assets/support.png'

const Benefits = () => {
    return (
        <Container>
            <div className="py-[140px]">
                <Flex className="justify-between">

                    <div>
                        <h2 className="w-[400px] h-[100px] font-bold text-[45px]">
                            Why You Should Choose Agenc
                        </h2>
                        <p className="w-[510px] h-[100px] mt-15 mb-15 text-[16px]">
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                        </p>

                        <div>
                            <div className='flex'>
                                <div>
                                    <div>
                                        <Image
                                            imgSrc={BusinessIdea}
                                            imgAlt="Benefits illustration"
                                        />
                                        <h2 className="w-[200px] h-[30px] font-bold text-[25px]">
                                            Innovative Ideas
                                        </h2>
                                        <p className="w-[340px] h-[50px] mt-2 mb-10 text-[16px]">
                                            Because each project is different, we adapt to your business model.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        imgSrc={Support}
                                        imgAlt="Benefits illustration"
                                    />
                                    <h2 className="w-[200px] h-[30px] font-bold text-[25px]">
                                        Innovative Ideas
                                    </h2>
                                    <p className="w-[340px] h-[50px] mt-2 mb-10 text-[16px]">
                                        Because each project is different, we adapt to your business model.
                                    </p>
                                </div>
                            </div>
                            <div className='ml-50'> <Image
                                imgSrc={Money}
                                imgAlt="Benefits illustration"
                            />
                                <h2 className="w-[200px] h-[30px] font-bold text-[25px]">
                                    Innovative Ideas
                                </h2>
                                <p className="w-[340px] h-[50px] mt-2 mb-10 text-[16px]">
                                    Because each project is different, we adapt to your business model.
                                </p></div>
                        </div>

                    </div>

                    <div className='mt-15'>
                        <Image
                            imgSrc={BenefitImage}
                            imgAlt="Benefits illustration"
                        />
                    </div>


                </Flex>
            </div>
        </Container>
    )
}

export default Benefits
