/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cemetery-dark': '#0a1f0a',
        'cemetery-darker': '#051008',
        'cemetery-green': '#0d2818',
        'neon-green': '#00ff41',
      },
      fontFamily: {
        'tombstone': ['Impact', 'Haettenschweiler', 'Arial Black', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'drift': 'drift 20s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        drift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(100px) translateY(-50px)' },
          '50%': { transform: 'translateX(200px) translateY(0)' },
          '75%': { transform: 'translateX(100px) translateY(50px)' },
        },
      },
    },
  },
  plugins: [],
}
