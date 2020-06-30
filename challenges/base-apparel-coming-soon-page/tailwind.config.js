module.exports = {
  theme: {
    screens: {
      sm: "375px",
      md: '1440px',
    },
    fontFamily: {
      body: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        'desaturated-red': 'hsl(0, 36%, 70%)',
        'soft-red': 'hsl(0, 93%, 68%)',
        'dark-grayish-red': 'hsl(0, 6%, 24%)'
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '136': '32rem',
      }
    },
    linearGradientColors: {
      'primary-gradient': ['135deg', 'hsl(0, 0%, 100%)', 'hsl(0, 100%, 98%)'],
      'secondary-gradient': ['135deg', 'hsl(0, 80%, 86%)', 'hsl(0, 74%, 74%)'],
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'disabled']
  },
  plugins: [
    require('tailwindcss-gradients'),
  ],
}
