/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: { extend: { colors: { brand: { DEFAULT: "#cc0000", dark: "#990000" } } } },
  plugins: []
}
