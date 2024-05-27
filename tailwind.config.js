/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				textColor: "#001e4d",
				accentTextColor: "#25b37c",
			},
			boxShadow: {
				bottomShadow: "0 3px 10px rgb(0 0 0 / 0.8)",
			},
		},
	},
	plugins: [],
};
