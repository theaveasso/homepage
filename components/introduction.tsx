import React from 'react';
import { Parallax } from './Parallax';

const Introduction = () => {
	return (
		<div className='bg-white h-screen w-screen relative text-black pt-10 flex flex-col justify-center items-center'>
			<h5 className='text-black flex justify-center items-center text-4xl font-extrabold'>
				FYI
			</h5>

			<div className='text-md xl:text-3xl mt-10 p-10 space-y-8 font-[CascadiaCodePL] max-w-[1280px]'>
				<p className=''>
					As a software developer, I have found that nothing satisfies me more
					than meeting new people, generating creative ideas, solving problems,
					and contributing to open-source projects. I am passionate about
					bringing ideas to life.
				</p>
				<p className=''>
					The majority of my time is spent researching and building cutting-edge
					technologies. Additionally, I have experience designing, developing,
					and architecting a monolithic architecture, a microservices
					architecture, and an event-driven architecture, as well as designing
					and developing large-scale and distributed applications.
				</p>
			</div>
		</div>
	);
};

export default Introduction;
