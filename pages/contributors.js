import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

import Contributor from "../components/contributor";
import Footer from "../components/footer";
import HeadObject from "../components/head";

function Contributors() {
    return (
        <div className="dark:bg-black dark:text-white">
            <HeadObject />
            <section className="flex flex-col space-y-10 bg-blue dark:bg-blue-dark px-12 md:px-20 py-12">
                <Link href="/">
                    <div className="font-rubik flex flex-row text-center text-lg cursor-pointer">
                        <BsArrowLeftShort size={25} /> Back
                    </div>
                </Link>

                <h1 className="font-rubik font-bold lg:text-6xl text-4xl">Contributors</h1>
            </section>
            <svg
                className="fill-current text-blue dark:text-blue-dark transform rotate-180 -mt-1 md:-mt-5 z-0 absolute"
                viewBox="0 0 1440 320">
                <path d="M0 64h24c24 0 72 0 120 5.3 48 5.7 96 15.7 144 37.4 48 21.3 96 53.3 144 80 48 26.3 96 48.3 144 64C624 267 672 277 720 272s96-27 144-42.7c48-16.3 96-26.3 144-32 48-5.3 96-5.3 144 16 48 21.7 96 63.7 144 69.4 48 5.3 96-26.7 120-42.7l24-16v96H0z" />
            </svg>
            <section className="mx-8 md:mx-14 mt-20 relative z-10">
                <Contributor />
            </section>
            <Footer />
        </div>
    );
}
export default Contributors;
