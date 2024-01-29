/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('/src/assets/Coding-Challenge-Image.png')"
      },
		},
		colors: {
			'maroon': '#611818',
			'white': '#FFFFFF'
		},
		fontFamily: {
			'lato': ['lato', 'sans-serif'],
			'didot': ['didot', 'serif']
		}
  },
  plugins: [],
}
