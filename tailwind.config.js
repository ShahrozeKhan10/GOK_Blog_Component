/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      minWidth: {
        'custom': '345px'
      },
      maxWidth: {
        'custom': '345px', // Custom maximum width
      },
      minHeight: {
        'custom' : '471px'
      },
      maxHeight: {
        'custom' : '600px'
      },
    },
  },
  plugins: [],
}

