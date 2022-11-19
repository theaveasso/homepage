import React from 'react';

const GradientText = ({ text }: { text: string }) => {
	return (
		<span className='text-6xl inline-block w-20 font-semibold bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text	  text-transparent'>
			{text}
		</span>
	);
};

export default GradientText;
