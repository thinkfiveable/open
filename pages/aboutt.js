import Link from "next/link";
import { BsArrowLeftShort } from "react-icons/bs";

import HeadObject from "../components/head";

export default function About() {
    return (
        <div>
            <HeadObject />
            <main>
                <section className="flex flex-col space-y-10 bg-blue px-12 md:px-20 pt-12">
                    <Link href="/">
                        <div className="font-rubik flex flex-row text-center text-lg cursor-pointer">
                            <BsArrowLeftShort size={25} /> Back
                        </div>
                    </Link>
                    <div>
                        <h1 className="font-rubik font-bold text-6xl">About</h1>
                        <h3 className="font-rubik text-2xl">Fiveable Open Source Initiative</h3>
                    </div>
                </section>
                <div className="w-full">
                    <svg viewBox="0 0 900 200">
                        <path
                            d="M0 20l10.7 15.3c10.6 15.4 32 46 53.5 45.7 21.5-.3 43.1-31.7 64.6-38.2 21.5-6.5 42.9 11.9 64.2 12.2 21.3.3 42.7-17.3 64-11.5 21.3 5.8 42.7 35.2 64.2 48 21.5 12.8 43.1 9.2 64.6 3.5 21.5-5.7 42.9-13.3 64.2-26 21.3-12.7 42.7-30.3 64.2-33.7 21.5-3.3 43.1 7.7 64.6 16 21.5 8.4 42.9 14 64.2 6.7 21.3-7.3 42.7-27.7 64-31.5 21.3-3.8 42.7 8.8 64.2 15 21.5 6.2 43.1 5.8 64.6.7C857.3 37 878.7 27 889.3 22l10.7-5V0H0z"
                            fill="#c1e8ed"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>
                <section className="px-12 md:px-20 md:-mt-28 lg:-mt-50 font-rubik z-50">
                    <div>
                        <p className="text-lg">
                            The Fiveable Open Source Initiative aims to create more community and
                            opportunities for students interested in all things STEM and coding related. No
                            prior experience is necessary. On this website, students will have the opportunity
                            to submit their open-source projects to be featured on the website. This website
                            also serves as a resource for students to discover open source projects to
                            contribute to.
                        </p>
                        <br />
                        <h3 className="font-bold text-2xl md:text-3xl leading-loose">What is open source?</h3>
                        <p className="text-lg">
                            Open source projects are projects with public source code that anyone can modify,
                            share, and make enhancements to. Contributors may add new features to the project
                            or fix bugs that cause usability issues. Every open source project has a license
                            that determines the way people can use, distribute, or modify the software.
                        </p>
                        <br />
                        <h3 className="font-bold text-2xl md:text-3xl leading-loose">
                            How can I get involved?
                        </h3>
                        <p className="text-lg">
                            Join the Fiveable Discord server at{" "}
                            <strong>
                                <a href="https://discord.gg/thinkfivable">discord.gg/thinkfiveable</a>
                            </strong>{" "}
                            and check out the <strong>#open-source</strong> channel which serves as the main
                            discussion forum for this initiative. The GitHub repository can be found{" "}
                            <strong>
                                <a href="https://github.com/ThinkFiveable/open">here</a>
                            </strong>
                            . We are currently accepting submissions for open source projects{" "}
                            <strong>
                                <a href=" https://forms.gle/ntDNx9KQoxLe5vXb6">here</a>
                            </strong>
                            .
                        </p>
                        <br />
                        <p className="text-lg">
                            Don&#39;t know where to start? Check out our{" "}
                            <strong>
                                <a href="https://github.com/ThinkFiveable/open/blob/main/git-tutorials/git.md">
                                    Git tutorials
                                </a>
                            </strong>
                            .
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
