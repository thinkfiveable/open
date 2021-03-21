import Head from "next/head";

export default function HeadObject({ children }) {
    const title = "Open Source Initiative | Fiveable ";
    const description =
        "Put your projects on the Fiveable Open Souce Initiative today and release them to the world!";
    const keywords = "Fiveable, Open Source, Fiveable Open Source, projects";
    const author = "Fiveable";
    const twitter = "@thinkfiveable";
    // const image = "/ogimage.png"; // This is your OpenGraph image
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width,initial-scale=1" />
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={author} />
            <meta property="og:url" content="put the domain in quotes here" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* <meta property="og:image" content={image} /> */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content={twitter} />
            <meta name="twitter:creator" content={twitter} />
            {children}
        </Head>
    );
}
