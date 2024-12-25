/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    screens: {
      print: { raw: "print" },
      sm: "600px",
      md: "960px",
      lg: "1280px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#DC2626E6",
        accent: "#1e293b",
        warn: "#EF4444",
        textdark: "#495057",
        base: "var(--base)",
        divider: "var(--divider)",
        dividers: "var(--dividers)",
        disabled: "var(--disabled)",
        "disabled-button": "var(--disabled-button)",
        "disabled-text": "var(--disabled-text)",
        elevation: "var(--elevation)",
        "hint-text": "var(--hint-text)",
        border: "var(--border)",
        "secondary-text": "var(--secondary-text)",
        icon: "var(--icon)",
        icons: "var(--icons)",
        text: "var(--text)",
        "slider-min": "var(--slider-min)",
        "slider-off": "var(--slider-off)",
        "slider-off-active": "var(--slider-off-active)",
        "status-bar": "var(--status-bar)",
        "app-bar": "var(--app-bar)",
        background: "var(--background)",
        hover: "var(--hover)",
        card: "var(--card)",
        dialog: "var(--dialog)",
        "raised-button": "var(--raised-button)",
        "focused-button": "var(--focused-button)",
        "selected-button": "var(--selected-button)",
        "selected-disabled-button": "var(--selected-disabled-button)",
        "disabled-button-toggle": "var(--disabled-button-toggle)",
        "unselected-chip": "var(--unselected-chip)",
        "disabled-list-option": "var(--disabled-list-option)",
        tooltip: "var(--tooltip)",
      },
      boxShadow: {
        custom: "0px 5px 15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
