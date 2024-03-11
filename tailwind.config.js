/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.ts",
  ],
  theme: {
    extend: {
      backgroundImage: {
        first_landing_page_card : "url('/assets/card1_wave_coloured.jpg')",
        second_landing_page_card : "url('/assets/card2_wave_coloured.jpg')",
        third_landing_page_card : "url('/assets/card3_wave_coloured.jpg')",
        fourth_landing_page_card : "url('/assets/card4_wave_coloured.jpg')",
      },
      colors:{ 
        ang: {
          gradient_from : "#06b7f9",
          gradient_to : "#194aec",
          main_bg : '#FBFEF9',
          text_main : '#3369f3',
          text_white : '#FBFEF9',
          border_main : '#3369f3',
          main_btn : '#3369f3',
        }
      },
      boxShadow: {
        inner_sh: 'inset 0 0 12px gray',
      }
    },
  },
  plugins: [],
}