import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
	children: React.ReactNode;
	offset?: number;
	className?: string;
}
const Parallax = ({ children, offset = 50, className: styles }: Props) => {
	const prefersReducedMotion = useReducedMotion();
	const ref = useRef<HTMLHeadingElement>(null);
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

	if (prefersReducedMotion) {
		return <div className={styles}>{children}</div>;
	}

	return (
		<motion.div ref={ref} style={{ y: yVal }} className={styles}>
			{children}
		</motion.div>
	);
};

export default Parallax;
