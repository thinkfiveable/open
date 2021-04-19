import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta
                        name="google-site-verification"
                        content="Y_ap0oZB97bXXcmzOpaE1RL9JirZVSVrbELjoIAGyU4"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
