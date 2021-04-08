import "../styles/globals.css";

import { MDXProvider } from "@mdx-js/react";
import { ThemeProvider } from "next-themes";

import MDXComponents from "../components/MDXComponents";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider defaultTheme="system" attribute="class">
            <MDXProvider components={MDXComponents}>
                {/* eslint-disable-next-line */}
                <Component {...pageProps} />
            </MDXProvider>
        </ThemeProvider>
    );
}

export default MyApp;
