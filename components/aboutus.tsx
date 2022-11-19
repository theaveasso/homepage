import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import { AnimatedOnScroll } from './Animation';
import { Parallax } from './Parallax';

// import asset
import textBackground from '../assets/text-bg.jpg';
import { AboutusBG } from './Templates';

const Aboutus = () => {
	return (
		<section
			id='services'
			className=' mt-10 flex flex-col justify-center items-center relative overflow-hidden w-screen'
		>
			<motion.div className='w-full h-full absolute -z-10 mt-20'>
				<Image
					className='mt-5 w-full h-full top-0 -left-20 absolute opacity-40 z-0'
					src={textBackground}
					alt='text background'
					layout='fill'
					objectFit='cover'
				/>
			</motion.div>
			<AboutusBG />

			<div className='max-w-3xl mt-5 text-center leading-[100px] xl:leading-[150px]'>
				<h2 className=' mt-10 text-lg'>What we do?</h2>

				<span className='font-bold xl:text-[150px] font-[CascadiaCodePL] block text-[80px]'>
					Design
				</span>
				<h2 className='block font-bold font-[CascadiaCodePL] text-[80px] xl:text-[150px] text-gray-400'>
					<span className=' bg-gradient-to-r from-fuchsia-500 to-teal-500 bg-clip-text text-transparent'>
						Develop
					</span>
				</h2>
				<span className='font-bold font-[CascadiaCodePL] text-[80px] xl:text-[150px]'>
					Deploy
				</span>

				<p className=' leading-8 font-[CascadiaCodePL]'>
					We are responsible for creating high-quality websites for our clients.
					Primary duties include conceptualizing and implementing creative ideas
					for client websites, as well as creating visual elements that are in
					line with your brand. I will work closely with you to ensure proper
					and hassle-free implementation.
				</p>
			</div>
			<div className='grid container mt-10 grid-cols-1 lg:grid-cols-3 place-items-center gap-4 mb-10 mx-auto p-5'>
				<CardService
					title='Design'
					icon='/paint-kit-dynamic-color.png'
					desc='High quality web dsign'
				/>
				<CardService
					title='Develop'
					icon='/tool-dynamic-color.png'
					desc='Highly customizable without boring template.'
				/>
				<CardService
					title='Deploy'
					icon='/rocket-dynamic-color.png'
					desc="We deploy your website on Cloud. Don't worry about upfront cost on Infrastructure."
				/>
			</div>
		</section>
	);
};

export default Aboutus;

interface Props {
	title: string;
	icon: string | StaticImageData;
	desc: string;
}
const CardService = ({ title, icon, desc }: Props) => {
	return (
		<div className='cardShadow px-8 pb-8 flex flex-col justify-center items-center text-center  h-[500px] md:w-[400px] w-[300px]  rounded-2xl shadow-xl shadow-gray-800  bg-gray-700 backdrop-blur-md backdrop-filter bg-opacity-20 gap-y-4 hover:scale-105 duration-300'>
			<div className='w-28 aspect-square relative bg-opacity-20 mb-5'>
				<div className='bg-gradient-to-br from-fuchsia-500 to-teal-500 w-full h-full rounded-full blur-xl opacity-30'></div>
				<Image
					src={icon}
					alt={title}
					layout='fill'
					objectFit='contain'
					className='relative'
				/>
			</div>
			<p className='p-2 font-bold text-xl bg-gradient-to-r  hover:xl:bg-gradient-to-r from-fuchsia-300 to-teal-300 bg-clip-text hover:xl:text-transparent text-transparent'>
				{title}
			</p>
			<p className='mt-5 font-[CascadiaCodePL] font-thin text-gray-300'>
				{desc}
			</p>
		</div>
	);
};
