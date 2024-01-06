import { type Config } from "tailwindcss"

export default {
  content: ["*"],
  theme: {
    screens: {
      xs: "380px",
      // => @media (min-width: 380px) { ... }
      sm: "576px",
      // => @media (min-width: 5760px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        flexa: "var(--font-gt-flexa)",
      },
      colors: {
        primary: "#03C988",
        light: "#BEF0CB",
        secondary: "#F9BE00",
        tertiary: "#004AAD",
      },
      backgroundImage: {
        "bg-search": "url('/images/search/bg-search.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config
