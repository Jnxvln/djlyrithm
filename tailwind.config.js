/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		'animate-rainbow',
		'hover:animate-rainbow',
		'bg-[length:300%_300%]',
		'bg-[position:0%_50%]'
	],
	theme: {
		extend: {
			backgroundSize: {
				300: '300% 300%'
			},
			keyframes: {
				rainbow: {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				rainbow: 'rainbow 3s ease infinite'
			}
		}
	},
	plugins: []
};
