import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                'profesores-button-edit': '3px 3px 0px 0px #000000',
                'profesores-button-edit-click': '3px 3px 0px 0px #000 inset',
              },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                // Red Shades
                red:{
                    DEFAULT: "rgba(210, 38, 38, 1)", // Red Basic
                    hover: "rgba(230, 60, 60, 1)", // Red Hover
                    dark: "rgba(150, 30, 30, 1)", // Red Dark
                },
                // Purple Shades
                purple: {
                    DEFAULT: "rgb(99, 49, 138)", // Purple Basic
                    neon: "rgba(161, 40, 255, 1)", // Purple Neon
                    light: "rgba(196, 140, 239, 1)", // Light Purple
                    hover: "rgba(131, 71, 178, 1)", // Purple Hover
                    hoverLight: "rgba(151, 61, 221, 1)", // Purple Hover Light
                    dark: "rgba(81, 29, 122, 1)", // Dark Purple
                    text: "rgba(54, 43, 62, 1)", // Purple Text Dark
                    disabled: "rgba(118, 104, 130, 1)", // Disabled Text
                    card: "rgba(122, 82, 153, 0.9)", // Card Background
                },

                // Green Shades
                green: {
                    DEFAULT: "rgba(31, 139, 88, 1)", // Card Background
                    hover: "rgba(49, 174, 114, 1)", // Green Basic
                },

                // Orange Shades
                orange: {
                    DEFAULT: "rgba(235, 91, 39, 1)", // Orange Basic
                    card: "rgba(255, 111, 58, 0.8)", // Card Background
                },

                // Grey Shades
                gray: {
                    DEFAULT: "rgba(179, 179, 179, 1)", // Grey Basic
                    purple: "rgb(133,133,133)" //Breadcrumb deactivated
                },

                //Blue Shades
                blue: {
                    card: "rgba(29, 131, 224, 0.8)", // Card Background
                }

            }
        },
    },
    plugins: [],
};
export default config;
