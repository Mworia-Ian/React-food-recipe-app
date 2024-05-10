/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'very-light-orange': 'rgba(255, 184, 77, 0.5)', // Adjust the opacity (0.5 in this case) to make it lighter
        'dark-orange': '#FF5733',
        'Orange-peel':'#FF9F00',
        'Rust-orange':'#8B3A3A',
        'Outer-Space': '#414A4C',
        'Electic-blue':'	#7DF9FF',
        'Pastel-orange':'#FFB347'
    
      },
    },
  },
  plugins: [],
}
