import React from 'react'
import Image from 'next/dist/client/image'
import image from '../public/headerIllustration.svg'

const Container1 = () => {
    return (
        <>
        <div className='container sm:px-5 mx-auto lg:my-24 sm:my-20 flex-wrap items-center justify-between'>
        <p className="font-sans text-red-500 py-2 ml-1 text-xl font-semibold">MEDICAL</p>
        <p className="font-sans text-gray-800 w-2/5  text-8xl font-bold">Healthcare Solutions</p>
        
        <p className="font-sans text-gray-400 lg:w-2/5 py-8 ml-1 text-lg font-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <a href="" className="bg-red-500 rounded-full font-bold text-white px-4 py-3 transition duration-300 ease-in-out hover:bg-red-700 mr-6">
          Find a Doctors
            </a>
        </div>
        <div className="absolute lg:top-0 right-0 lg:w-1/2 ">
            <div className="flex flex-row-reverse">
            <Image src={image} alt="" width={720} height={720}/>
            </div>
        </div>
            
        </>
    )
}

export default Container1
