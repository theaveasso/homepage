import Link from 'next/link';
import React from 'react';

const links = [
	{ title: 'Services', section: 'services' },
	{ title: 'About Me', section: 'aboutme' },
	{ title: 'Works', section: 'works' },
];

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center p-10'>
			<h3 className='text-xl text-white font-extrabold tracking-widest'>RF</h3>
			{/* Navbar mobile */}
			<h5 className='text-xl xl:hidden'>Menu</h5>

			{/* Navbar fullscreen */}
			<ul className='ml-44 hidden xl:flex flex-1 justify-between items-center'>
				{links.map((link, idx) => (
					<Link href={`#${link.section}`} key={idx}>
						{link.title}
					</Link>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
