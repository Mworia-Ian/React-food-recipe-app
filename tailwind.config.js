/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'very-light-orange': 'rgba(255, 69, 0, 0.7)', // Adjust the opacity (0.5 in this case) to make it lighter
        'dark-orange': '#FF5733',
        'Orange-peel':'#FF9F00',
        'Rust-orange':'#8B3A3A',
        'Outer-Space': '#414A4C',
        'Electic-blue':'	#7DF9FF',
        'Pastel-orange':'#FFB347',
        'Plum': '#DDA0DD',
        'Dark-Magenta':'#8B008B',
        'Indigo':'#4B0082',
        'siena': '#A0522D',
        'Dark-Purple' : '#301934',
        'light-blue': 'rgba(173, 216, 230)',
        'green':	'#FFDEAD',
        'blck' :'#000001'

    
      },
    },
  },
  plugins: [],
}
