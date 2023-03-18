/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'recipe': "url('./images/recipe.png')",
        'avocado': "url('./images/avocado.png')"
      },
      colors: {
        green: '#82E0AA',
        purple: '#3d2352'
      },
      fontFamily: {
        source: ['Source Code Pro', 'monospace']
      }
    },
  },
  plugins: [],
}
