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
        // EngineerBabu inspired color palette
        primary: {
          50: "#e6f7ff",
          100: "#bae7ff",
          200: "#91d5ff",
          300: "#69c0ff",
          400: "#40a9ff",
          500: "#1890ff", // Main blue
          600: "#096dd9",
          700: "#0050b3",
          800: "#003a8c",
          900: "#002766",
        },
        secondary: {
          50: "#e6fffb",
          100: "#b5f5ec",
          200: "#87e8de",
          300: "#5cdbd3",
          400: "#36cfc9",
          500: "#13c2c2", // Teal accent
          600: "#08979c",
          700: "#006d75",
          800: "#00474f",
          900: "#002329",
        },
        accent: {
          50: "#fff0f6",
          100: "#ffd6e7",
          200: "#ffadd2",
          300: "#ff85c0",
          400: "#f759ab",
          500: "#eb2f96", // Pink accent
          600: "#c41d7f",
          700: "#9e1068",
          800: "#780650",
          900: "#520339",
        },
        success: {
          50: "#f6ffed",
          100: "#d9f7be",
          200: "#b7eb8f",
          300: "#95de64",
          400: "#73d13d",
          500: "#52c41a", // Green
          600: "#389e0d",
          700: "#237804",
          800: "#135200",
          900: "#092b00",
        },
        warning: {
          50: "#fffbe6",
          100: "#fff1b8",
          200: "#ffe58f",
          300: "#ffd666",
          400: "#ffc53d",
          500: "#faad14", // Orange
          600: "#d48806",
          700: "#ad6800",
          800: "#874d00",
          900: "#613400",
        },
        danger: {
          50: "#fff1f0",
          100: "#ffccc7",
          200: "#ffa39e",
          300: "#ff7875",
          400: "#ff4d4f",
          500: "#f5222d", // Red
          600: "#cf1322",
          700: "#a8071a",
          800: "#820014",
          900: "#5c0011",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e8e8e8",
          300: "#d9d9d9",
          400: "#bfbfbf",
          500: "#8c8c8c",
          600: "#595959",
          700: "#434343",
          800: "#262626",
          900: "#1f1f1f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Poppins", "system-ui", "sans-serif"],
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
