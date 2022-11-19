import { ImageGallery } from './Templates';

const grid = new Array(10);
const Gallery = () => {
	return (
		<section className='flex flex-col bg-white p-10'>
			<h5 className='text-black font-bold text-2xl'></h5>
			<h2 className='text-4xl xl:text-9xl font-extrabold text-black'>
				Recent works
			</h2>
			<ImageGallery />
		</section>
	);
};

export default Gallery;
