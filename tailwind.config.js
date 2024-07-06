/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {},
        colors: {
            primary: "#f4d04e",
            white: "#ffffff",
            grey: "#808080",
            black: "#121212",
        },
        fontFamily: {
            figtree: 'Figtree'
        },
        boxShadow: {
            'custom-black': '8px 8px black',
            'hover-custom-black': '16px 16px black',
        }
    },
    plugins: [],
}

