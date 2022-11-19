import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';

interface Props {
	children: string;
	offset?: number;
	className?: string;
}
const textAnimated = {
	hidden: { opacity: 0 },
	visible: (i = 1) => ({
		opacity: 1,
		transition: {
			duration: 0.8,
			ease: [0.2, 0.65, 0.3, 0.9],
			staggerChildren: 0.1,
			delayChildren: 0.02 * i,
		},
	}),
};

const charAnimated = {
	hidden: {
		opacity: 0,
		y: -500,
	},
	visible: {
		opacity: 1,
		y: 0,
	},
	exit: {
		opacity: 0,
		y: -100,
	},
};

const AnimatedTitle = ({ children, offset = 50, className: styles }: Props) => {
	const prefersReducedMotion = useReducedMotion();
	const ref = useRef<HTMLHeadingElement>(null);
	const words = children.split('');
	const { scrollY } = useScroll();
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);

	const initial = elementTop - clientHeight;
	const finalVal = elementTop - offset;

	const yRange = useTransform(
		scrollY,
		[initial, finalVal],
		[offset, -offset]
	);
	// apply a spring to ease the result
	const yVal = useSpring(yRange, { stiffness: 400, damping: 90 });
	useEffect(() => {
		const element = ref.current;
		// save our layout measurements in a function in order to trigger
		// it both on mount and on resize
		const onResize = () => {
			// use getBoundingClientRect instead of offsetTop in order to
			// get the offset relative to the viewport
			if (element != null) {
				setElementTop(
					element.getBoundingClientRect().top + window.scrollY ||
						window.pageYOffset
				);
			}
			setClientHeight(window.innerHeight);
		};
		onResize();
		window.addEventListener('resize', onResize);
		return () => window.removeEventListener('resize', onResize);
	}, [ref]);

	// Reduced motion if the user has 'reduced motion' enable
	if (prefersReducedMotion) {
		return (
			<h2 className={styles}>
				{words.map((char, idx) => (
					<span key={idx}>{char}</span>
				))}
			</h2>
		);
	}
	return (
		<motion.h2
			ref={ref}
			initial='hidden'
			animate='visible'
			variants={textAnimated}
			style={{ y: yVal }}
			className={styles}
		>
			{words.map((char, idx) => (
				<motion.span key={idx} variants={charAnimated}>
					{char}
				</motion.span>
			))}
		</motion.h2>
	);
};

export default AnimatedTitle;
