import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                "purple-basic": "rgba(99, 49, 138, 1)",
                "purple-bright": "rgba(161, 40, 255, 1)",
                "purple-light": "rgba(196, 140, 239, 1)",
                "purple-hover": "rgba(131, 71, 178, 1)",
                "purple-hover-light": "rgba(151, 61, 221, 1)",
                "purple-dark": "rgba(81, 29, 122, 1)",
                "grey-lines": "rgba(179, 179, 179, 1)",
                "green-basic": "rgba(49, 174, 114, 1)",
                "orange-basic": "rgba(235, 91, 39, 1)",
                "text-dark": "rgba(0, 0, 0, 1)",
                "text-light": "rgba(255, 255, 255, 1)",
                "text-purple-dark": "rgba(54, 43, 62, 1)",
                "text-disable": "rgba(118, 104, 130, 1)",
            },
            
        },
    },
    plugins: [],
};
export default config;
