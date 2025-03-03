/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "*.{html,js}"],
  theme: {
    screens:{
      sm: "340px",
      md:"540px",
      lg:"768px",
      xl:"1180px"
    },
    extend: {
     
      
    },
    
    fontFamily:{
      roboto:["Roboto", "serif"]
    },
    container:{
      center:true,
      padding:{
        DEFAULT:"12px",
        md:"32px"
      }
    }
  },
  plugins: [],
}

