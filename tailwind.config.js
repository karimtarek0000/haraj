module.exports = {
  theme: {
    debugScreens: {
      position: ['top', 'right'],
    },
    fontSize: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '4rem',
    },
    fontWeight: {
      medium: 500,
      bold: 700,
      extrabold: 800,
      heavy: 900,
    },
    extend: {
      fontFamily: {
        Loew: ['Loew'],
      },
      colors: {
        mercury: '#E2E2E2',
        mountain: '#1EAF62',
        link: '#d1dcf5',
        narvik: '#e8f7ef',
        royal: '#3f72dc',
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
