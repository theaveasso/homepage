import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { AnimatedTitle } from './Animation';
import { Navbar } from './Navbar';
import { Parallax } from './Parallax';

const container = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.2, 0.65, 0.3, 0.9],
			staggerChildren: 0.3,
			delayChildren: 0.1,
		},
	},
};

const text = {
	hidden: { opacity: 0, y: -60 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { type: 'spring', duration: 1 },
	},
};

const Hero = () => {
	const ctrls = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start('visible');
		}
		if (!inView) {
			ctrls.start('hidden');
		}
	}, [ctrls, inView]);

	return (
		<section>
			<Navbar />
			<motion.div
				ref={ref}
				initial='hidden'
				animate={ctrls}
				variants={container}
				className='md:grid grid-cols-3 gap-2 text-[50px] md:text-[100px] xl:text-[150px] tracking-wide p-4 xl:p-10'
			>
				<motion.div variants={text} className='md:col-span-full'>
					I <span className='font-bold'>only</span> build
				</motion.div>
				<motion.div variants={text} className='md:col-span-2 '>
					<span
						className={
							'font-bold bg-gradient-to-r from-fuchsia-500 to-teal-500 bg-clip-text text-transparent'
						}
					>
						unique
					</span>
				</motion.div>

				<motion.div variants={text} className='md:col-span-full'>
					experience <span className='font-bold'>for</span>
				</motion.div>
				<motion.div variants={text} className='md:col-span-2 grid-flow-row'>
					your
					<span className={'font-bold'}> brand</span>
				</motion.div>
				<motion.div
					variants={text}
					className='lg:grid justify-center items-end hidden text-[10px] text-right'
				>
					<Parallax>
						Let me be your personal consultant when it comes to moving to
						digital. We strive to simplify your digital experiences. By building
						unique branding for small businesses, we help them grow quickly and
						make their brand stand out. Say goodbye to the template design.
					</Parallax>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Hero;
