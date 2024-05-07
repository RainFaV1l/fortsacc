/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'accent-dark-blue': '#151938',
        'accent-green': '#9CFF4F',
        'accent-light-blue': '#9197C2',
        'gradient-blue-light': '#604FFF',
        'gradient-blue': '#897CFF',
        'gradient-green-light': '#9CFF4F',
        'gradient-green': '#54A415',
      },
      gridTemplateRows: {
        '0': '0fr',
      },
    },
  },
  plugins: [],
}

