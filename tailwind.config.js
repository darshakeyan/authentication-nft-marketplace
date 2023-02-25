/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        metaverse: "url('../src/assets/metaverse.jpeg')",
        "metaverse-gif": "url('../src/assets/meta.gif')",
        "meta-horizon": "url('../src/assets/meta.jpeg')",
        "logo-icon": "url('../src/assets/logo.png')",
      },
      colors: {
        primary: "#343273",
        background: "rgba(255,255,255, 0.6)",
      },
      height: {
        200: "45rem",
      },
      width: {
        150: "38rem",
      },
      maxWidth: {
        5: "4rem",
      },
    },
  },
  plugins: [],
};
