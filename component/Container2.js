import React from 'react';
import * as Icon from 'react-feather';

const Container2 = () => {
	return (
		<>
			<div className='bg-purple-100 bg-opacity-60 lg:py-8 sm:my-20'>
				<div className='w-full max-w-7xl mx-auto  flex justify-between space-x-4'>
					<div className='bg-red-500  p-8 flex flex-col justify-between rounded-xl w-full min-h-[360px]  filter shadow-md'>
						<div className='flex justify-between items-center '>
							<p className='text-white font-semibold text-3xl w-20'>
								Opening Hours
							</p>
							<Icon.Clock size={48} color='white' />
						</div>
						<div>
							<div className='mt-8 h-42 flex flex-col justify-between'>
								<p className='text-red-300 text-lg font-medium'>
									Monday - Friday
								</p>
								<p className='text-red-100 text-xl font-medium mb-4'>
									9:00 AM - 11:00 PM
								</p>
								<p className='text-red-300 text-lg font-medium'>
									Address
								</p>
								<p className='text-red-100 text-xl font-medium'>
									7563 St. Vegas Place
								</p>
							</div>
						</div>
					</div>
					<div className='bg-white  p-8  flex flex-col justify-between rounded-xl w-full min-h-[360px]  filter shadow-md'>
						<div className='flex justify-between items-center '>
							<p className='text-gray-800 font-semibold text-3xl w-20'>
								Medical Checkup
							</p>
							<Icon.Calendar size={48} className='text-red-500' />
						</div>
						<div>
							<div className='mt-8 h-42 flex flex-col justify-between'>
								<p className='text-gray-400 text-xl font-medium mb-4'>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry.
								</p>
								<div className='py-4'>
									<a
										href='#'
										className='bg-red-500 rounded-full font-bold text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-red-700 mr-6'
									>
										Request
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='bg-white  p-8  flex flex-col justify-between rounded-xl w-full min-h-[360px]  filter shadow-md'>
						<div className='flex justify-between items-center '>
							<p className='text-gray-800 font-semibold text-3xl w-20'>
								Find Doctor
							</p>
							<Icon.Search size={48} className='text-red-500' />
						</div>
						<div>
							<div className='mt-8 h-42 flex flex-col justify-between'>
								<p className='text-gray-400 text-xl font-medium mb-4'>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry.
								</p>
								<div className='py-4'>
									<a
										href='#'
										className='bg-red-500 rounded-full font-bold text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-red-700 mr-6'
									>
										Request
									</a>
								</div>
							</div>
						</div>
					</div>
                    <div className='bg-white  p-8  flex flex-col justify-between rounded-xl w-full min-h-[360px]  filter shadow-md'>
						<div className='flex justify-between items-center '>
							<p className='text-gray-800 font-semibold text-3xl w-20'>
								Find Location
							</p>
							<Icon.MapPin size={48} className='text-red-500' />
						</div>
						<div>
							<div className='mt-8 h-42 flex flex-col justify-between'>
								<p className='text-gray-400 text-xl font-medium mb-4'>
									Lorem Ipsum is simply dummy text of the
									printing and typesetting industry.
									
								</p>
								<div className='py-4'>
									<a
										href='#'
										className='bg-red-500 rounded-full font-bold text-white px-8 py-3 transition duration-300 ease-in-out hover:bg-red-700 mr-6'
									>
										Request
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Container2;
