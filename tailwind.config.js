/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fcf9f8',
        paperDark: '#181716',
        card: '#ffffff',
        cardDark: '#22201d',
        terracotta: '#9d3d2c',
        terracottaLight: '#bd5541',
        slateBlue: '#4c616c',
        mustard: '#c7a938',
        charcoal: '#2c2c2c',
        ridgeBorder: '#ddc0bb',
        tapeBg: 'rgba(232, 213, 183, 0.75)',
        mutedText: '#685e5b'
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
        label: ['"Space Grotesk"', 'monospace']
      },
      boxShadow: {
        press3d: '0px 4px 0px #2c2c2c',
        press3dSm: '0px 2px 0px #2c2c2c',
        paper: '4px 4px 12px rgba(44, 44, 44, 0.08)'
      }
    },
  },
  plugins: [],
}
