module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{jsx,tsx}', './public/**/*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      background: {
        'stage-selector': 'rgba(0, 0, 0, .75)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
