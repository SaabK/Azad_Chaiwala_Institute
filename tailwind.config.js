/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				dark: '#111111',
				yellow: '#F0E914',
				myBlue: '#0ca1f4',
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
			},
		},
		container: {
			center: true,
			padding: '4rem',
		},
	},
	plugins: [],
};
