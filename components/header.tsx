import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

// background image
import BackgroundImage from '../assets/hero-bg.png';
import { AnimatedOnScroll, AnimatedTitle } from './Animation';
import { Parallax } from './Parallax';

const logoAnimated = {
	hidden: { opacity: 0, y: 80 },
	visible: {
		opacity: 1,
		y: 1,
		transition: {
			duration: 5,
			ease: 'easeOut',
			type: 'spring',
		},
	},
};

const Header = () => {
	return (
		<section className='h-[100wh] overflow-hidden'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.8 },
				}}
			>
				<Image
					className='absolute h-screen w-full bg-fixed bg-center '
					src={BackgroundImage}
					layout='fill'
					objectFit='cover'
					alt=''
				/>
			</motion.div>
			<div className='relative w-full h-screen flex justify-center items-center backdrop-blur-sm bg-black/10 opacity-90 space-x-5'>
				{/* <motion.div variants={logoAnimated} initial='hidden' animate='visible'>
					<AnimatedTitle >
						Theaveas So
					</AnimatedTitle>
					<AnimatedTitle >
						Full Stack Serverless Engineer
					</AnimatedTitle>
				</motion.div> */}
				<Parallax>
					<AnimatedOnScroll className='text-[30px] md:text-[80px] text-center space-x-3 font-[600] tracking-wider'>
						Theaveas So
					</AnimatedOnScroll>
					<AnimatedOnScroll className='text-[10px] md:text-[40px] text-center font-[CascadiaCodePL] space-x-3 font-[600] tracking-tight'>
						Full Stack Serverless Engineer
					</AnimatedOnScroll>
				</Parallax>
			</div>

			{/* overlay */}
			<div className='gradient' />
		</section>
	);
};

export default Header;
