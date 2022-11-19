import Image from 'next/image';

const ImageGallery = () => {
	return (
		<div className='bg-white text-black overflow-hidden '>
			<div className='auto-rows-auto container mx-auto mt-2 gap-4 md:grid grid-cols-1 md:grid-cols-3 p-5 max-w-7xl rounded-3xl hidden'>
				<div className='rounded-3xl relative text-white pt-10 md:row-span-2 h-[700px] bg-gradient-to-b from-black via-black to-transparent hover:scale-[1.005] shadow-3xl shadow-[#121212] border-spacing-4 duration-200'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p11.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
					<div className='relative p-5 bg-gradient-to-b from-black via-black to-transparent'>
						<h3 className='font-bold text-2xl text-white '>Creative Coding</h3>
					</div>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl relative col-span-1 md:col-span-2 shadow-2xl shadow-[#d6d6d4]'>
					<Image
						className='w-full h-full   rounded-3xl'
						src='/imageGallery/p1.png'
						alt='abstract art 1'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 relative rounded-3xl col-span-2'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p4.jpg'
						alt='abstract art 4'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 relative md:row-span-1 col-span-2 rounded-3xl'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p3.jpg'
						alt='abstract art 3'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl relative md:row-span-2 h-[700px] shadow-2xl shadow-black'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p2.jpg'
						alt='abstract art 3'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 relative rounded-3xl box col-span-2 '>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p5.png'
						alt='abstract art 5'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl relative box row-span-2 h-[500px] col-span-3 shadow-sm shadow-[#d6d6d4] '>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p6.png'
						alt='abstract art 6'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl box row-span-2 relative h-[700px] shadow-xl shadow-slate-400'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p10.png'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
					<div className='absolute bottom-6 p-5 rounded-3xl bg-gradient-to-t from-black  to-transparent'>
						<h3 className='font-bold text-2xl text-white '>
							Architecture Concepte Design
						</h3>
					</div>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl box col-span-2 relative'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p7.png'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl box col-span-2 relative'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p8.png'
						alt='abstract art 8'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl box col-span-2 '>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p14.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='rounded-3xl relative rounded-3xlbox row-span-2  h-[700px]'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p12.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>

					<div className=' p-5 rounded-3xl absolute bg-white bottom-0 w-full backdrop-blur-sm backdrop-filter bg-opacity-5'>
						<h3 className='font-bold text-2xl text-white '>
							Architecture Concepte Design
						</h3>
					</div>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl box col-span-2 bg-red-600'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p19.png'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl box bg-red-600 h-[500px]'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p15.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl h-[500px]'>
					<Image
						className=' w-full h-full rounded-3xl'
						src='/imageGallery/p16.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl h-[500px]'>
					<Image
						className='relative w-full h-full rounded-3xl'
						src='/imageGallery/p17.png'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl row-span-2 col-span-3 h-[700px]'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p19.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>
			<div className='md:hidden grid grid-cols-3 gap-2'>
				<div className='rounded-3xl relative text-white pt-10  h-[700px] bg-gradient-to-b from-black via-black to-transparent hover:scale-[1.005] shadow-3xl shadow-[#121212] border-spacing-4 duration-200'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p11.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
					<div className='relative p-5 bg-gradient-to-b from-black via-black to-transparent'>
						<h3 className='font-bold text-2xl text-white '>Creative Coding</h3>
					</div>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl relative shadow-2xl shadow-[#d6d6d4]'>
					<Image
						className='w-full h-full   rounded-3xl'
						src='/imageGallery/p1.png'
						alt='abstract art 1'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 relative rounded-3xl'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p4.jpg'
						alt='abstract art 4'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 relative rounded-3xl'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p3.jpg'
						alt='abstract art 3'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl relative shadow-2xl shadow-black'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p2.jpg'
						alt='abstract art 3'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 relative rounded-3xl box '>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p5.png'
						alt='abstract art 5'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl relative box row-span-2 h-[500px] col-span-3 shadow-sm shadow-[#d6d6d4] '>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p6.png'
						alt='abstract art 6'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl box row-span-2 relative h-[700px] shadow-xl shadow-slate-400'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p10.png'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
					<div className='absolute bottom-6 p-5 rounded-3xl bg-gradient-to-t from-black  to-transparent'>
						<h3 className='font-bold text-2xl text-white '>
							Architecture Concepte Design
						</h3>
					</div>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl box col-span-2 relative'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p7.png'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='hover:scale-[1.005] duration-200 rounded-3xl box col-span-2 relative'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p8.png'
						alt='abstract art 8'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl box col-span-2 '>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p14.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='rounded-3xl relative rounded-3xlbox row-span-2  h-[700px]'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p12.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>

					<div className=' p-5 rounded-3xl absolute bg-white bottom-0 w-full backdrop-blur-sm backdrop-filter bg-opacity-5'>
						<h3 className='font-bold text-2xl text-white '>
							Architecture Concepte Design
						</h3>
					</div>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl box col-span-2 bg-red-600'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p19.png'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl box bg-red-600 h-[500px]'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p15.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl h-[500px]'>
					<Image
						className=' w-full h-full rounded-3xl'
						src='/imageGallery/p16.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl h-[500px]'>
					<Image
						className='relative w-full h-full rounded-3xl'
						src='/imageGallery/p17.png'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
				<div className='relative hover:scale-[1.005] duration-200 rounded-3xl row-span-2 col-span-3 h-[700px]'>
					<Image
						className='w-full h-full rounded-3xl'
						src='/imageGallery/p19.jpg'
						alt='abstract art 9'
						layout='fill'
						objectFit='cover'
					/>
				</div>
			</div>
		</div>
	);
};

export default ImageGallery;
