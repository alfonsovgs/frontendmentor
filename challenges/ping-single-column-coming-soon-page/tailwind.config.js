module.exports = {
  purge: [],
  theme: {
    screens: {
      sm: '375px',
      md: '1440px',
    },
    fontFamily: {
      body: ['Libre Franklin', 'sans-serif']
    },
    extend: {
      colors: {
        'blue-primary': 'hsl(223, 87%, 63%)',
        'pale-blue-secondary': 'hsl(223, 100%, 88%)',
        'light-red-secondary': 'hsl(354, 100%, 66%)',
        'gray-neutral': 'hsl(0, 0%, 59%)',
        'very-dark-blue-neutral': 'hsl(209, 33%, 12%)',
      },
      spacing: {
        '96': '24rem',
      }
    },
  },
  variants: {},
  plugins: [],
}
