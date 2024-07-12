/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth:{
        '60' : '60%',
        '70' : '70%',
        '80' : '80%',
        '90' : '90%',
        '100' : '100%',
      }
    },
  },
  plugins: [],
}

