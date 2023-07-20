/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

  ],
  theme: {
    colors:{
      'white':'#ffffff',
      'blue':'#1680fa',
      'black':'#020202',
      'green':'#24720e',
      'grey':'#e6e6e6',
      'yellow':'#ffcc00',
      'maroon':'#ff540d',
      'orange':'#ff9900',
      'red':'#f81c07',
      'pink':'#ff00df',
      'purple':'#a875ff',
      'light-green':'#6bc950',
      'light-blue':'#98c7fd'
    },
    boxShadow:{
      custom:'0px 0px 50px 0px rgb(165 164 164 / 30%)'
    },
    fontFamily:{
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

