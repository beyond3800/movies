/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width:{
        big:'700px',
        300:'320px',
        82:'370px',
      },
      height:{
        big:'500px',
        300:'300px',

      }
    },
  },
  plugins: [

  ],
}

