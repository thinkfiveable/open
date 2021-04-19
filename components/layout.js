import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

import Footer from "./footer";
import HeadObject from "./head";

function Layout({ subtitle, title, authors, publishDate, children }) {
    return (
        <div>
            <HeadObject />
            <section className="flex flex-col space-y-10 bg-blue px-12 md:px-20 py-12">
                <Link href="/">
                    <div className="font-rubik flex flex-row text-center text-lg cursor-pointer">
                        <BsArrowLeftShort size={25} /> Back
                    </div>
                </Link>
                <div>
                    <h1 className="font-rubik font-bold text-6xl">{title}</h1>
                    {subtitle && <h3 className="font-rubik text-2xl">{subtitle}</h3>}
                </div>
                {authors?.length && (
                    <div className="inline-flex flex-row align-middle space-x-2">
                        {authors.map((author) => (
                            <div key={author.name} className="flex-1 flex-row align-middle">
                                <img src={author.icon} alt={author.name} className="w-14 h-14 rounded-full" />
                                <div className="space-y-0.5">
                                    <p className="font-mono font-medium text-2xl">{author.name}</p>
                                    <p className="font-rubik font-light text-lg">{publishDate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
            <svg className="transform rotate-180 -mt-1 md:-mt-5 z-0 absolute" viewBox="0 0 1440 320">
                <path
                    fill="#c1e8ed"
                    d="M0 64h24c24 0 72 0 120 5.3 48 5.7 96 15.7 144 37.4 48 21.3 96 53.3 144 80 48 26.3 96 48.3 144 64C624 267 672 277 720 272s96-27 144-42.7c48-16.3 96-26.3 144-32 48-5.3 96-5.3 144 16 48 21.7 96 63.7 144 69.4 48 5.3 96-26.7 120-42.7l24-16v96H0z"
                />
            </svg>
            <section className="px-8 md:px-20 font-rubik z-40 relative mt-28">{children}</section>
            <Footer />
        </div>
    );
}

export default Layout;
