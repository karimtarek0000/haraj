module.exports = {
  mode: 'jit',
  theme: {
    debugScreens: {
      position: ['top', 'right'],
    },
    fontSize: {
      xs: '1.2rem',
      sm: '1.4rem',
      smx1: '1.5rem',
      md: '1.6rem',
      mdx1: '1.7rem',
      lg: '2rem',
      lgx1: '2.5rem',
      xl: '4rem',
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
        mariner: '#2e64d4',
        alabaster: '#f8f8f8',
        selago: '#ebf1fc',
        silver: '#ACACAC',
        seashell: '#F2F1F1',
      },
      outline: {
        royal: '1px solid #3f72dc',
      },
      gridTemplateColumns: {
        // GRID SEARCH AND SORT
        ss: 'minmax(20rem, 1fr) repeat(2, minmax(16rem, 19.8rem)) minmax(12rem, 14.5rem)',
        mainBody: '33.6rem 1fr',
        mainBodyRes: '28rem 1fr',
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
