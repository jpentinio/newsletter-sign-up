/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "signup-desktop": "url(/src/assets/illustration-sign-up-desktop.svg)",
        "signup-mobile": "url(/src/assets/illustration-sign-up-mobile.svg)",
      },
    },
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#ff6257",

            secondary: "#242742",

            accent: "#1fb2a6",

            neutral: "#2a323c",

            "base-100": "#fff",

            info: "#3abff8",

            success: "#36d399",

            warning: "#fbbd23",

            error: "#f87272",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
};
