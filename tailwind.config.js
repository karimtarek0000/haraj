module.exports = {
  theme: {
    debugScreens: {
      position: ['top', 'right'],
    },
    extend: {
      fontFamily: {
        Loew: ['Loew'],
      },
      colors: {
        mercury: '#E2E2E2',
        mountain: '#1EAF62',
      },
    },
  },
  variants: {
    logical: ['responsive'],
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tailwindcss-logical'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          margin: '0 auto',
          maxWidth: '116.8rem',
          paddingLeft: '.5rem',
          paddingRight: '.5rem',
        },
      })
    },
  ],
}
