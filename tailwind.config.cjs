/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Aqui ficará contido os arquivos que vão ter classes do tailwind
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      // Definindo as cores que o tailwind vai ter, com base no designSystem

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6'
      },

      cyan: {
        500: '#81d8f7',
        300: '#9be1fb'
      }
    },
    extend: {
      // Definindo a fonte "padrão"
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
