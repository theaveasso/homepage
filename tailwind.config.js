/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		extend: {
			rotate: {
				360: '360deg',
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite ',
			},
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
