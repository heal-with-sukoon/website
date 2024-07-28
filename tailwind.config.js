/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
      fontFamily: {
        Roca: ['Roca', 'sans-serif'],
        galpike : ['galpike','sans-serif'],
        mioge : ['mioge' , 'sans-serif' ],
        betofin : ['betofin','sans-serif'],
        rocaLt : ['rocaLt' ,'sans-serif' ],
        rocaIt : ['rocait' ,'sans-serif' ]
      },
      boxShadow: {
        // shd: '-95px 95px 96.5px #8B91F3',
      shd : '-34px 9px 45px -16px #8B91F3',
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }

    },
  },
  
  plugins: [
    
  ],
}
