import "../styles/globals.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            {/* eslint-disable-next-line */}
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
