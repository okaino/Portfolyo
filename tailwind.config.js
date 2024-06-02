/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'dentist': 'url("./src/assets/yakın.JPG")',
        'dentist-birdseye': 'url("./src/assets/uzakkus.JPG")',
        'glass': 'url("./src/assets/glass.JPG")',
        'shelf': 'url("./src/assets/shelf.JPG")'
      },
      fontFamily: {
        julius: ['"Julis Sans One"'],
      }
    },
  },
  plugins: [],
}

