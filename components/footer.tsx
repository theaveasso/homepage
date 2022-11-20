import Link from 'next/link';
import { BsInstagram } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';

import { Navbar } from './Navbar';
const Footer = () => {
	return (
		<section className='h-screen bg-[#0601f4] w-screen p-5 flex flex-col overflow-hidden'>
			<Navbar />
			<div className='mt-44'>
				<h2 className='font-extrabold text-3xl md:text-9xl'>
					Let&apos;s Connect
				</h2>
				<h3 className='text-xl md:text-5xl xl:mt-10 underline flex'>
					hello@theaveasso.dev
					<FiArrowUpRight className='ml-5s' />
				</h3>
			</div>
			<div className='mt-20'>
				<h2 className='font-[CascadiaCodePL] text-3xl'>Social</h2>
				<ul className='grid grid-cols-2 w-[500px] gap-4 mt-5'>
					<Link href='https://www.instagram.com/theaveasso/'>Instagram</Link>
					<Link href='https://github.com/theaveasso'>Github</Link>
					<Link href='https://twitter.com/theaveasso'>Twitter</Link>
					<Link href='https://www.linkedin.com/in/theaveas-so-2b94541a5/'>
						Linkedin
					</Link>
				</ul>
			</div>
		</section>
	);
};

export default Footer;
