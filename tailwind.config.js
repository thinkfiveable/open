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
                blue: "#C1E8ED",
                black: "#171717",
                gold: "#FFE800",
                silver: "#878787",
                bronze: "#FFB8A1",
                contributor: "#C9BEFF"
            },
            flex: {
                2: "1 1 40%"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
