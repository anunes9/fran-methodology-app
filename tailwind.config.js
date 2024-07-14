/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        projectBlue: "#122C49",
        projectGreen: "#6bb8a4",
        projectGray: "#F4F4F4",
        green: {
          50: "#f3faf7",
          100: "#d7f0e8",
          200: "#afe0d0",
          300: "#7fc9b4",
          400: "#6bb8a4",
          500: "#3a927c",
          600: "#2d7464",
          700: "#275e53",
          800: "#234c44",
          900: "#21403a",
          950: "#0e2521",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        dimmed: "hsl(var(--dimmed))",
      },
    },
    fontFamily: {
      gtBold: ["GT-America Bold", "sans-serif"],
      gtExtendedBlack: ["GT-America Extended Black", "sans-serif"],
      gtExtendedBold: ["GT-America Extended Bold", "sans-serif"],
      gtExtendedMedium: ["GT-America Extended Medium", "sans-serif"],
      gtExtendedRegular: ["GT-America Extended Regular", "sans-serif"],
      gtMedium: ["GT-America Medium", "sans-serif"],
      gtRegular: ["GT-America Regular", "sans-serif"],
    },
  },
  plugins: [],
}
