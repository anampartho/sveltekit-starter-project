/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const config = {
	plugins: [
		// Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		// @ts-ignore
		tailwindcss(),
		// But others, like autoprefixer, need to run after,
		autoprefixer,
	],
};

module.exports = config;
