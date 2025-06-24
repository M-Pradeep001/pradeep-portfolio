/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        keyframes: {
          slideInRight: {
            '0%': { transform: 'translateX(100%)', opacity: '0' },
            '100%': { transform: 'translateX(0)', opacity: '1' },
          },
          wave: {
            '0%, 100%': { transform: 'rotate(0deg)' },
            '10%': { transform: 'rotate(14deg)' },
            '20%': { transform: 'rotate(-8deg)' },
            '30%': { transform: 'rotate(14deg)' },
            '40%': { transform: 'rotate(-4deg)' },
            '50%': { transform: 'rotate(10deg)' },
            '60%': { transform: 'rotate(0deg)' },
          }
        },
        animation: {
          slideInRight: 'slideInRight 1s ease-out forwards',
          wave: 'wave 2s infinite',
        },
      },
    },
    plugins: [],
  }
  