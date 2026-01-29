import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-dark": "#0a0a0a",
        "bg-secondary": "#1a1410",
        "text-primary": "#f5f5f5",
        "text-secondary": "#a8a8a8",
        "accent-orange": "#ff6b35",
        "accent-warm": "#d4a574",
        "accent-red": "#c23b22",
        "brown-dark": "#2d1f1a",
        "brown-light": "#4a3428",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
