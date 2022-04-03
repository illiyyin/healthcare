import React from 'react';
import Image from 'next/dist/client/image';
import image from '../public/hospitalBed.jpg';
const Container3 = () => {
	return (
		<>
			<div className='w-full max-w-7xl mx-auto lg:py-4 sm:my-20 flex'>
				<div className='w-full '>
					<Image
						className='rounded-xl'
						src={image}
						alt=''
						width={640}
						layout='responsive'
						height={420}
					/>
				</div>
				<div className='w-full px-16'>
					<p className='font-sans text-red-500 py-1 ml-1 text-xl font-semibold'>
						ABOUT
					</p>
					<p className='font-sans text-gray-800  py-2 text-7xl font-semibold'>
						You Always Get Our Help
					</p>
					<p className='font-sans text-gray-800  py-2 ml-1 text-lg font-medium'>
						Lorem Ipsum is simply dummy text of the printing and
						typesetting industry.
					</p>
					<p className='font-sans text-gray-400  py-2 ml-1 mb-4 text-lg font-medium'>
						Lorem Ipsum has been the industry&apos;s standard dummy
						text ever since the 1500s, when an unknown printer took
						a galley of type and scrambled it to make a type
						specimen book
					</p>
					<a
						href=''
						className='bg-gray-200 rounded-full font-bold text-red-500 px-4 py-3 my-3 transition duration-300 ease-in-out hover:bg-gray-300 mr-6'
					>
						Find a Doctors
					</a>
				</div>
			</div>
		</>
	);
};

export default Container3;
