/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        abril: ['abrilFatface'], // font-abrilFatface
        sora: ['sora'], // font-sora
        jack: ['jacquard24'], // font-jacquard24
        tusker: ['tuskerGrotesk'], // font-tuskerGrotesk
        tuskerBold: ['tuskerGrotesk-bold'], // font-tuskerBold

      },
      colors: {
        primaryFont: '#F5EEE6',
        yellow: '#FFDA73'
      },
      backgroundImage: {
        landingImg: "url('./assets/images/starry-night.jpg')",
      },

    },
  },
  plugins: [],
}