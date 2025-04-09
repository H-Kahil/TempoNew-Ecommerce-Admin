/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3a86ff",
          dark: "#2563eb",
          light: "#60a5fa",
        },
        secondary: {
          DEFAULT: "#8338ec",
          dark: "#6d28d9",
          light: "#a78bfa",
        },
        accent: {
          DEFAULT: "#ff006e",
          dark: "#e11d48",
          light: "#fb7185",
        },
        success: {
          DEFAULT: "#10b981",
          dark: "#059669",
        },
        warning: {
          DEFAULT: "#fbbf24",
          dark: "#d97706",
        },
        error: {
          DEFAULT: "#ef4444",
          dark: "#dc2626",
        },
      },
      backgroundColor: {
        primary: {
          DEFAULT: "#3a86ff",
          dark: "#2563eb",
          light: "#60a5fa",
        },
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};
