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
    screens: {
      'sm': '320px',
      'sl': '400px',
      '450': '450px',
      'm': '500px',
      'mx': '550px',
      'ml': '600px',
      '621': '621px',
      'x': '700px',
      'xs': '750px',
      'xl': '800px',
      'xxl': '900px',
      '980': '980px',
      '1000': '1000px',
      '1100': '1100px',
      '1130': '1130px',
      '1175': '1175px',
      '1260': '1260px',
      '1285': '1285px',
    },
  },
  plugins: [],
}

