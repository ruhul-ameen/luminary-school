import { type Config } from "tailwindcss"

export default {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        flexa: "var(--font-gt-flexa)",
      },
      colors: {
        primary: "#34E2A3",
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
