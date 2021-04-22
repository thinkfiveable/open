module.exports = {
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                rubik: "Rubik, sans-serif",
                mono: "Inconsolata, monospace"
            },
            colors: {
                blue: {
                    DEFAULT: "#C1E8ED",
                    dark: "#01A0B6"
                },
                black: "#171717",
                gray: "#393939",
                gold: "#FFE800",
                silver: "#878787",
                bronze: "#FFB8A1",
                contributor: "#C9BEFF"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
