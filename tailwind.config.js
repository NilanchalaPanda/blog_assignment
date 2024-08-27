/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        PrimaryDark: '#000000',
        SecondaryDark: '#282829',
        PrimaryLight: '#ffffff',
        SecondaryLight: '#F3F4F6'
      },
    },
  },
  plugins: [],
}
