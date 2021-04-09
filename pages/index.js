import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

import Card from "../components/card";
import Footer from "../components/footer";
import HeadObject from "../components/head";

export default function Home() {
    return (
        <div>
            <HeadObject />
            <main>
                <section className="flex flex-col space-y-10 bg-blue px-12 md:px-20 py-12">
                    <div className="mt-10 sm:mt-0">
                        <div className="flex flex-col md:flex-row md:space-x-5">
                            <h1 className="font-rubik font-bold text-5xl sm:text-6xl">Fiveable</h1>
                            <div className="font-mono font-medium text-2xl leading-none md:self-center">
                                Open <div className="inline md:block">Source</div>
                            </div>
                        </div>
                        <a
                            className="md:animate-pulse md:hidden hover:text-gray-500 absolute top-4 right-4 sm:top-8 sm:right-8 p-4 bg-white rounded-full"
                            href="https://github.com/thinkfiveable/open">
                            <FiGithub size={30} />
                        </a>
                        <a
                            className="hidden sm:block hover:text-gray-500 absolute top-4 right-4 sm:top-8 sm:right-8 p-4 bg-white rounded-full"
                            href="https://github.com/thinkfiveable/open">
                            <FiGithub size={40} />
                        </a>
                    </div>
                    <h2 className="font-rubik font-medium text-3xl md:w-2/3 lg:w-2/5">
                        We&#39;re building a community for discovery and learning.
                    </h2>
                    <Link href="/about">
                        <a className="md:animate-bounce hover:text-gray-300 font-rubik font-medium bg-black text-center rounded-full px-5 py-1 text-lg text-white w-fitcontent flex flex-row cursor-pointer">
                            <div>Learn more.</div>
                            <BsArrowRightShort size={30} />
                        </a>
                    </Link>
                </section>
                <svg className="transform rotate-180 -mt-1 md:-mt-5" viewBox="0 0 1440 320">
                    <path
                        fill="#c1e8ed"
                        d="M0 64h24c24 0 72 0 120 5.3 48 5.7 96 15.7 144 37.4 48 21.3 96 53.3 144 80 48 26.3 96 48.3 144 64C624 267 672 277 720 272s96-27 144-42.7c48-16.3 96-26.3 144-32 48-5.3 96-5.3 144 16 48 21.7 96 63.7 144 69.4 48 5.3 96-26.7 120-42.7l24-16v96H0z"
                    />
                </svg>
                <div className="mx-auto justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <Card
                        name="Student Name"
                        title="Lorem Ipsum Dddddddd"
                        projectType="Website"
                        thumbnail="https://source.unsplash.com/random"
                        profileIcon="https://picsum.photos/200"
                        award="gold"
                    />
                    <Card
                        name="Student Name"
                        title="Lorem Ipsum"
                        projectType="Discord Bot"
                        thumbnail="https://source.unsplash.com/random"
                        profileIcon="https://picsum.photos/200"
                        award="silver"
                    />
                    <Card
                        name="Student Name"
                        title="Lorem Ipsum"
                        projectType="Website"
                        thumbnail="https://source.unsplash.com/random"
                        profileIcon="https://picsum.photos/200"
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
