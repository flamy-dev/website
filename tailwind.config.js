module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
    "./pages/**/*.tsx",
    "./components/**/*.tsx",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
      backgroundImage: (theme) => ({
        underline: "url('/static/images/underline.svg')",
        darktheme:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/static/images/bg.webp')",
        about:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/static/images/logo-f.svg'))",
        chatbot: "url('/static/illustrations/chatbot.svg')",
        work:
          "linear-gradient(49deg,rgba(182, 25, 0, 1) 0%,rgba(0, 63, 136, 1) 100%)",
      }),
      backgroundSize: {
        30: "30%",
        50: "70%",
      },
      width: {
        client: "32rem",
        1000: "1000px",
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
      textColor: ["disabled"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [],
};
