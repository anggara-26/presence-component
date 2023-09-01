/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      h1: [
        "2rem",
        {
          fontWeight: "700",
          lineHeight: "2.625rem",
          letterSpacing: "0.02rem",
        },
      ],
      h2: [
        "1.5rem",
        {
          fontWeight: "700",
          lineHeight: "2.125rem",
          letterSpacing: "0.0625rem",
        },
      ],
      h3: [
        "1.125rem",
        {
          fontWeight: "700",
          lineHeight: "1.5625rem",
          letterSpacing: "0.01125rem",
        },
      ],
      h4: [
        "1rem",
        {
          fontWeight: "700",
          lineHeight: "1.5rem",
          letterSpacing: "0.01rem",
        },
      ],
      h5: [
        "0.875rem",
        {
          fontWeight: "700",
          lineHeight: "1.3125rem",
          letterSpacing: "0.00875rem",
        },
      ],
      h6: [
        "0.875rem",
        {
          fontWeight: "500",
          lineHeight: "1.3125rem",
          letterSpacing: "0.04375rem",
        },
      ],
      h7: [
        "0.75rem",
        {
          fontWeight: "700",
          lineHeight: "1.25rem",
          letterSpacing: "0.0075rem",
        },
      ],
      "subhead-1": [
        "1rem",
        {
          fontWeight: "600",
          lineHeight: "1.5rem",
          letterSpacing: "0.01rem",
        },
      ],
      "subhead-2": [
        "0.875rem",
        {
          fontWeight: "600",
          lineHeight: "1.3125rem",
          letterSpacing: "0.00875rem",
        },
      ],
      "subhead-3": [
        "0.75rem",
        {
          fontWeight: "600",
          lineHeight: "1.25rem",
          letterSpacing: "0.0375rem",
        },
      ],
      "paragraph-1": [
        "1rem",
        {
          fontWeight: "400",
          lineHeight: "1.5rem",
          letterSpacing: "0.01rem",
        },
      ],
      "paragraph-2": [
        "0.875rem",
        {
          fontWeight: "500",
          lineHeight: "1.3125rem",
          letterSpacing: "0.00875rem",
        },
      ],
      "paragraph-3": [
        "0.875rem",
        {
          fontWeight: "400",
          lineHeight: "1.3125rem",
          letterSpacing: "0.00875rem",
        },
      ],
      "paragraph-4": [
        "0.75rem",
        {
          fontWeight: "400",
          lineHeight: "1.25rem",
          letterSpacing: "0.0375rem",
        },
      ],
    },
    extend: {
      colors: {
        ligth: "#F6F9FF",
        dark: "#1E1E1E",
        "medium-state-blue": "#6E5DE7",
        primary: {
          50: "#E5F3FF",
          100: "#CCE7FF",
          200: "#99CEFF",
          300: "#66B6FF",
          400: "#339DFF",
          500: "#0085FF",
          600: "#006ACC",
          700: "#005099",
          800: "#003566",
          850: "#00284C",
        },
        warning: {
          50: "#FFFBEA",
          100: "#FFF8D5",
          200: "#FFF0AA",
          300: "#FFE980",
          400: "#FFE155",
          500: "#FFDA2B",
          600: "#CCAE22",
          700: "#99831A",
          800: "#665711",
          850: "#4C410D",
        },
        success: {
          50: "#E6F9EE",
          100: "#D1F5E0",
          200: "#A8EBC4",
          300: "#7EE2A8",
          400: "#54D98C",
          500: "#2ECC71",
          600: "#25A25A",
          700: "#1B7943",
          800: "#124F2C",
          850: "#0D3A20",
        },
        danger: {
          50: "#FFEBEA",
          100: "#FFD7D6",
          200: "#FFAFAD",
          300: "#FF8683",
          400: "#FF5E5A",
          500: "#FF3631",
          600: "#CC2B27",
          700: "#99201D",
          800: "#661614",
          850: "#4C100F",
        },
        neutral: {
          50: "#FFFFFF",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          850: "#000000",
        },
      },
    },
  },
  plugins: [],
};
