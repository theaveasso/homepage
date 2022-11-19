import Image from 'next/image';
import React from 'react';
import { AnimatedOnScroll, AnimatedOnScrollHorizontal } from './Animation';
import { Parallax } from './Parallax';

// import asset
import ProfilePic from '../assets/profile-removebg.png';
import Introduction from './introduction';

const Me = () => {
	return (
		<section className='toxic-sunset relative w-full h-screen flex flex-col items-center mt-10 lg:rounded-t-[50px] rounded-none overflow-hidden'>
			<h5 className='text-[#121212] tracking-wider md:text-6xl text-2xl font-bold font-[CascadiaCodePL] mt-10'>
				Hi there! 👋🏽
			</h5>

			<AnimatedOnScroll className='w-[500px] h-[500px] md:w-[700px] md:h-[700px] lg:w-[800px] lg:h-[800px] z-10 absolute  -bottom-1.5'>
				<Image src={ProfilePic} alt='profile image' layout='fill' />
			</AnimatedOnScroll>
			<div className='text-black leading-tight font-extrabold lg:text-[95px] text-[50px] font-[CascadiaCodePL] absolute w-screen tracking-tighter'>
				<AnimatedOnScrollHorizontal
					pos={[-20, 0]}
					className='absolute top-[150px] left-10 md:top-[550px] md:left-[180px]'
				>
					<Parallax>
						<span>by the way</span>
					</Parallax>
				</AnimatedOnScrollHorizontal>

				<AnimatedOnScrollHorizontal
					pos={[-20, 0]}
					className='absolute top-[200px] left-10 md:top-[650px] md:left-[100px]'
				>
					<Parallax>
						<span>this is me</span>
					</Parallax>
				</AnimatedOnScrollHorizontal>

				<AnimatedOnScrollHorizontal
					pos={[-20, 0]}
					className='absolute top-[250px] left-10 md:top-[750px] md:left-[10px]'
				>
					<Parallax>
						<span>theaveas.so</span>
					</Parallax>
				</AnimatedOnScrollHorizontal>

				<AnimatedOnScrollHorizontal className='absolute top-[350px] right-10 lg:top-[550px] md:right-[350px] z-30'>
					<Parallax className=' text-fuchsia-500'>
						<span>creative</span>
					</Parallax>
				</AnimatedOnScrollHorizontal>

				<AnimatedOnScrollHorizontal className='absolute top-[400px] right-10 lg:top-[650px] md:right-[10px] z-30'>
					<Parallax>
						<span>computational</span>
					</Parallax>
				</AnimatedOnScrollHorizontal>

				<AnimatedOnScrollHorizontal className='absolute top-[450px] lg:top-[750px] right-10 md:right-[200px] z-30'>
					<Parallax>
						<span>designer</span>
					</Parallax>
				</AnimatedOnScrollHorizontal>
			</div>
		</section>
	);
};
export default Me;
