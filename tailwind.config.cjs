/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'primary-500': 'var(--primary-500)',
        'secondary': 'var(--secondary)',
        'blue': 'var(--blue)',
        'nero': 'var(--nero)',
        'purple': 'var(--purple)',
        'orange': 'var(--orange)',
        'green': 'var(--green)',
        'green-500': 'var(--green-500)',
        'red': 'var(--red)',
        'red-500': 'var(--red-500)',
        'yellow': 'var(--yellow)',
        'gray-dark': 'var(--gray-dark)',
        'gray': 'var(--gray)',
        'gray-900': 'rgb(17 24 39/var(--tw-bg-opacity))',
        'gray-light': 'var(--gray-light)'
      },
    },
  },
  plugins: [],
}
