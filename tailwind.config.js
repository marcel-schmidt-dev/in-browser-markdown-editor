/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FFFFFF',
          200: '#F5F5F5',
          300: '#E4E4E4',
          400: '#C1C4CB',
          500: '#7C8187',
          600: '#5A6069',
          700: '#35393F',
          800: '#2B2D31',
          900: '#1D1F22',
          1000: '#151619',
        },
        orangeDefault: '#E46643',
        orangeHover: '#F39765'
      },
      fontFamily: {
        'roboto-light': ['Roboto-Light', 'sans-serif'],
        'roboto-regular': ['Roboto-Regular', 'sans-serif'],
        'roboto-mono-regular': ['RobotoMono-Regular', 'monospace'],
        'roboto-slab-bold': ['RobotoSlab-Bold', 'serif'],
        'roboto-slab-light': ['RobotoSlab-Light', 'serif'],
        'roboto-slab-regular': ['RobotoSlab-Regular', 'serif'],
      }
    },
  },
  plugins: [],
};
