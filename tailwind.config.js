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
    extend: {},
  },
  plugins: [],
};
