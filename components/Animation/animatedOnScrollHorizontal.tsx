import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
	children: React.ReactNode;
	className?: string;
	threshold?: number | number[] | undefined;
	pos?: [number, number];
}
const AnimatedOnScrollHorizontal = ({
	children,
	className: styles,
	threshold = 0.5,
	pos = [20, 20],
}: Props) => {
	const { ref, inView } = useInView({ threshold: threshold });
	const ctrls = useAnimation();

	const animatedText = {
		hidden: { opacity: 0, x: pos[0] },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.8, type: 'spring' },
		},
	};

	useEffect(() => {
		if (inView) {
			ctrls.start('visible');
		}
		if (!inView) {
			ctrls.start('hidden');
		}
	}, [ctrls, inView]);
	return (
		<motion.div
			ref={ref}
			initial='hidden'
			animate={ctrls}
			variants={animatedText}
			className={styles}
		>
			{children}
		</motion.div>
	);
};

export default AnimatedOnScrollHorizontal;
