module.exports = {
  purge: {
    enabled: true,
    content: ['*.html'],
    safelist:[
      'text-red-500',
      'font-semibold',
      'lg:text-left'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme=> ({
        'mobile': "url('../images/bg-curvy-mobile.svg')",
        'desktop': "url('../images/bg-curvy-desktop.svg')",
        'quote': "url('../images/bg-quotes.png')"
      }),
      backgroundSize:{
        'medium':'100% 50%'
      },
      fontFamily:{
        raleway: ['Raleway', 'serif'],
        sans: ['Open Sans', 'serif']
      },
      colors:{
        'dark-blue':{
          intro: 'hsl(217, 28%, 15%)',
          main: 'hsl(218, 28%, 13%)',
          footer: 'hsl(216, 53%, 9%)',
          test: 'hsl(219, 30%, 18%)'
        },
        Cyan: 'hsl(176, 68%, 64%)',
        Blue: 'hsl(198, 60%, 50%)',
        'Light-Red': 'hsl(0, 100%, 63%)'
      }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover'],
      backgroundImage: ['responsive']
    }
  },
  plugins: [],
}
