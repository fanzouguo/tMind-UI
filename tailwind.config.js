/* eslint-disable quote-props */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      none: '0',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px'
    },
    colors: {
      primary: {
        light: '#D5D8F0',
        DEFAULT: '#5C6AC4'
      },
      secondary: {
        light: '#FCF7E4',
        DEFAULT: '#ECC94B'
      },
      black: {
        light: '#999',
        DEFAULT: '#333'
      },
      white: {
        light: '#FAFAFC',
        DEFAULT: '#FFF'
      },
      red: '#E83F00',
      blue: '#3B82F6',
      yellow: '#F59E0B',
      green: '#10B981',
      info: '#3B82F6',
      warn: '#F59E0B',
      err: '#E83F00',
      succ: '#10B981'
    },
    borderRadius: {
      'none': '0',
      'sm': '4px',
      DEFAULT: '16px',
      'lg': '32px',
      'full': '50%'
    },
    opacity: {
      '0': '0',
      '20': '0.2',
      '50': '0.5',
      '80': '0.8',
      '100': '1'
    },
    extend: {
      fontFamily: {
        sans: [
          'Lato',
          ...defaultTheme.fontFamily.sans
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
