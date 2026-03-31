import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        "accent-foreground": "hsl(var(--accent-foreground) / <alpha-value>)",
        sidebar: "hsl(var(--sidebar) / <alpha-value>)",
        "sidebar-border": "hsl(var(--sidebar-border) / <alpha-value>)",
        "nav-active": "hsl(var(--nav-active) / <alpha-value>)",
        "nav-active-foreground":
          "hsl(var(--nav-active-foreground) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
