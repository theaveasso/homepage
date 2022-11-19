import React from 'react';
import { AnimatedOnScroll, AnimatedOnScrollHorizontal } from './Animation';
import GradientText from './Atoms/gradientText';
import { Parallax } from './Parallax';

const Projects = () => {
	return (
		<section
			id='projects'
			className='w-screen grid lg:grid-cols-3 place-content-center overflow-hidden pt-20 p-10 gap-8'
		>
			<AnimatedOnScroll className='relative'>
				<Parallax
					className={
						'p-10 h-[600px] overflow-hidden bg-cyan-700 rounded-xl flex flex-col'
					}
				>
					<GradientText text='01' />
					<h5 className='text-4xl xl:text-8xl font-bold relative'>FaaS</h5>
					<p className='mt-auto text-right font-bold'>
						Rapidly design build deploy your Business logic without an invest on
						upfront cost on Infrastructure.
					</p>
					<div className='absolute -z-[3] w-[500px] h-[500px] rounded-full bg-blue-700 -top-40 -left-40' />
					<div className='absolute -z-[5] w-[600px] h-[600px] rounded-full bg-blue-200 top-32 left-20 bg-transparent border-[100px] border-cyan-500 border-opacity-30' />
				</Parallax>
			</AnimatedOnScroll>
			<AnimatedOnScroll className='relative'>
				<Parallax
					className={
						'bg-red-500 p-10 h-[600px] rounded-xl overflow-hidden flex flex-col'
					}
				>
					<GradientText text='02' />
					<h5 className='text-4xl xl:text-8xl font-bold'>SaaS</h5>
					<p className='mt-auto text-right font-bold'>
						Tell me what is in your mind, and I help you make it come true.
					</p>
					<div className='absolute -z-[3] w-[500px] h-[500px] rotate-45 bg-blue-700 -top-40 -left-40' />
					<div className='absolute -z-[5] w-[600px] h-[600px] bg-blue-200 top-32 -left-32 bg-transparent border-[100px] border-cyan-500 border-opacity-30' />
				</Parallax>
			</AnimatedOnScroll>
			<AnimatedOnScroll className='relative'>
				<Parallax
					className={
						'bg-purple-500 p-10 h-[600px] rounded-xl overflow-hidden flex flex-col'
					}
				>
					<GradientText text='03' />
					<h5 className='text-4xl xl:text-8xl font-bold'>Web Design</h5>
					<p className='mt-auto text-right font-bold'>
						Like we&apos;ve said, we only build a unique experience for your
						brand
					</p>
					<div className='absolute -z-[3] w-[500px] h-[500px] rounded-full bg-blue-700 -top-40 -left-40' />
					<div className='absolute -z-[5] w-[600px] h-[600px] bg-blue-200 rotate-45 top-32 left-32 bg-transparent border-[100px] border-cyan-500 border-opacity-30' />
				</Parallax>
			</AnimatedOnScroll>
			<AnimatedOnScroll className='relative'>
				<Parallax
					className={
						'bg-orange-500 p-10 h-[600px] flex flex-col rounded-xl overflow-hidden'
					}
				>
					<GradientText text='04' />
					<h5 className='text-4xl xl:text-8xl font-bold'>Internal Tools</h5>
					<p className='mt-auto text-right font-bold'>
						We help you build an internal tools (ERP Software) like Inventory
						management HR systems and you name it.
					</p>
					<div className='absolute -z-[3] w-[500px] h-[500px] rotate-45 bg-blue-700 -top-40 -left-40' />
					<div className='absolute -z-[5] w-[600px] h-[600px] bg-blue-200 top-32 -left-32 bg-transparent border-[100px] border-cyan-500 border-opacity-30' />
				</Parallax>
			</AnimatedOnScroll>
			<AnimatedOnScroll className='relative'>
				<Parallax
					className={
						'bg-blue-500 p-10 h-[600px] rounded-xl flex  flex-col overflow-hidden'
					}
				>
					<GradientText text='05' />
					<h5 className='text-4xl xl:text-8xl font-bold'>Cloud Solu tions</h5>
					<p className='mt-auto text-right font-bold'>
						Build and Deploy your application by utilized the power of cloud
						computing .
					</p>
					<div className='absolute -z-[3] w-[500px] h-[500px] rotate-45 bg-blue-700 -top-40 -left-40' />
					<div className='absolute -z-[5] w-[600px] h-[600px] bg-blue-200 top-32 -left-32 bg-transparent border-[100px] border-cyan-500 border-opacity-30' />
				</Parallax>
			</AnimatedOnScroll>
		</section>
	);
};

export default Projects;
