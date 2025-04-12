/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,vue}',
    './components/**/*.{js,ts,vue}',],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": {
          50: "#fff9eb",
          100: "#fdecc8",
          200: "#fbd88c",
          300: "#f9bd50",
          400: "#f79f1a",
          500: "#f1820f",
          600: "#d65f09",
          700: "#b13f0c",
          800: "#903210",
          900: "#762911",
          950: "#441204",
        },
        "apple-green": "#046E1B",
        "dire-wolf": "#292727",
      },
    },
    animation: {
      'fade-down': 'fadeDown 0.8s ease-in-out',
      'slide-in': 'slideIn 0.5s ease-out',
      'zoom-in': 'zoomIn 0.6s ease-in',
    },
    keyframes: {
      fadeDown: {
        '0%': { opacity: 0, transform: 'translateY(-20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
      slideIn: {
        '0%': { opacity: 0, transform: 'translateX(100px)' },
        '100%': { opacity: 1, transform: 'translateX(0)' },
      },
      zoomIn: {
        '0%': { opacity: 0, transform: 'scale(0.8)' },
        '100%': { opacity: 1, transform: 'scale(1)' },
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
};
