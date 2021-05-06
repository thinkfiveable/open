import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

import Footer from "../components/footer";
import HeadObject from "../components/head";
import Modal from "../components/projectdetails";
import SearchBar from "../components/searchbar";
import RepoData from "../data/PROJECTS.json";

export default function Home() {
    const headerOutputRange = [
        `M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,176C672,171,768,181,864,192C960,203,1056,213,1152,213.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`,
        `M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`,
        `M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,234.7C672,256,768,288,864,277.3C960,267,1056,213,1152,192C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`,
        `M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,240C672,224,768,192,864,197.3C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z`
    ];
    const headerClipPathVariants = {
        beginning: {
            d: headerOutputRange[0]
        },
        middle: {
            d: headerOutputRange[1]
        },
        middle2: {
            d: headerOutputRange[2]
        },
        end: {
            d: headerOutputRange[3]
        }
    };
    return (
        <div>
            <HeadObject />
            <main>
                <section className="flex flex-col space-y-10 bg-blue px-12 md:px-20 py-12">
                    <div className="mt-10 sm:mt-0">
                        <div className="flex flex-row md:justify-between">
                            <div className="flex flex-col md:flex-row md:space-x-5">
                                <h1 className="font-rubik font-bold text-5xl sm:text-6xl">Fiveable</h1>
                                <div className="font-mono font-medium text-2xl leading-none md:self-center">
                                    Open <div className="inline md:block">Source</div>
                                </div>
                            </div>
                            <SearchBar />
                        </div>

                        <a
                            className="md:hidden hover:text-gray-500 absolute top-4 right-4 sm:top-8 sm:right-8 p-4 bg-white rounded-full"
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
                    <div className="flex flex-col space-y-2">
                        <Link href="/about">
                            <a className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 font-rubik font-medium bg-black text-center rounded-full px-5 py-1 text-lg text-white w-fitcontent flex flex-row cursor-pointer">
                                <div>Learn more.</div>
                                <BsArrowRightShort size={30} />
                            </a>
                        </Link>
                        <p className="text-xs">
                            Not sure where to start? Learn{" "}
                            <Link href="/contributors">
                                <a className="underline font-bold">Git</a>
                            </Link>
                            .
                        </p>
                    </div>
                </section>
                <svg className="transform rotate-180 -mt-1 md:-mt-5" viewBox="0 0 1440 320">
                    <motion.path
                        fill="#c1e8ed"
                        d={headerOutputRange[0]}
                        initial="beginning"
                        variants={headerClipPathVariants}
                        animate={["middle", "middle2", "end"]}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    />
                </svg>

                <div className="mx-auto justify-center grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {RepoData.map(
                        ({ repoName, repoOwner, projectType, repoLogo, projectDescription, award }) => (
                            <Modal
                                owner={repoOwner}
                                title={repoName}
                                type={projectType}
                                description={projectDescription}
                                thumbnail={
                                    repoLogo ?? encodeURI(`https://og-image.vercel.app/${repoName}.png`)
                                }
                                profileIcon={`https://avatars.githubusercontent.com/${repoOwner}`}
                                award={award ?? "silver"}
                            />
                        )
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
}
