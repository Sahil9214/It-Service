/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-primary)",
          primaryDark: "var(--color-primary-dark)",
          secondary: "var(--color-secondary)",
          text: "var(--color-text-primary)",
          textSecondary: "var(--color-text-secondary)",
          surface: "var(--color-bg-cream)",
          light: "var(--color-bg-light)",
          border: "var(--color-border-primary)",
          danger: "var(--color-status-error)",
        },
      },
      fontFamily: {
        sans: ["Mona Sans", "system-ui", "sans-serif"],
        heading: ["Mona Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.08)",
        medium: "0 4px 16px rgba(0, 0, 0, 0.12)",
        large: "0 8px 24px rgba(0, 0, 0, 0.16)",
        "glow-primary": "0 0 20px rgba(24, 144, 255, 0.3)",
        "glow-success": "0 0 20px rgba(82, 196, 26, 0.3)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
