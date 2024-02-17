/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['**/*.{tsx,scss,sass}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    dark: '#5651e5',
                    light: '#709dff',
                },
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
            },
            screens: {
                'xs': {max: '240px'}
            },
        },
    },
    plugins: [],
};