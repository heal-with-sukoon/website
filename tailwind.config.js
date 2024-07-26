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
        mioge : ['mioge' , 'sans-serif' ]
      },
      boxShadow : {
        shd: '-95px 0px 96.5px #8B91F3',
        
      }
    },
  },
  
  plugins: [
    
  ],
}
