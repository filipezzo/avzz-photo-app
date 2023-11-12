/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        calc: "calc(100vh - 56px)",
      },
      animation: {
        fade: "fade 0.5s ease-in-out",
        fadeIn: "fadeIn 1s ease-in-out ",
        fadeR: "fadeR 1s ease-in-out",
        back: "fadeIn 1s 0.1s backwards",
        back2: "fadeIn 1s 0.2s backwards",
        back3: "fadeIn 1s 0.3s backwards",
        back4: "fadeIn 1s 0.4s backwards",
        back5: "fadeIn 1s 0.5s backwards",
        fadeRight: "fadeRight 0.5s ease-in-out",
        smaller: "makeSmaller 1s 0.2s backwards ",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        fadeRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },

        fadeR: {
          "0%": {
            opacity: 0,
            transform: "translateX(50px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },

        makeSmaller: {
          "0%": {
            height: "100%",
            width: "100%",
          },
          "100%": {
            height: "75%",
            width: "75%",
          },
        },
      },
    },
  },
  plugins: [],
};
