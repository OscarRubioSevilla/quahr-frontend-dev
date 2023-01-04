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
                'white-smoke': 'var(--white-smoke)',
                'dolphin': 'var(--dolphin)',
                'silver': 'var(--silver)',
                'denim': 'var(--denim)',
                'solitude': 'var(--solitude)',
                'negative': 'var(--negative)',
                'positive': 'var(--positive)'


            },
        },
    },
    plugins: [],
}