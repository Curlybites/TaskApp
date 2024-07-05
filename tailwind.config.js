/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.jsx",
    "./resources/**/*.vue",
    "./resources/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    }
  },
    screens: {
      'xsm': '320px', // Define custom breakpoint
      'md':'620px',
      'lg':'1024px',
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["sunset","nord"],
    // "nord",
  },
}