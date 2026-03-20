/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['"Lato"', 'sans-serif'],
      },
      colors: {
        wedding: {
          gold: '#D4AF37',
          ivory: '#FFFFF0',
          beige: '#F5F5DC',
          charcoal: '#36454F',
          sage: '#8FBC8F',
          olive: '#556B2F',
          cream: '#F0EAD6',
        }
      }
    },
  },
  plugins: [],
}
