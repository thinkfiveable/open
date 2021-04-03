import { useRouter } from "next/router";
import { BsArrowLeftShort } from "react-icons/bs";

import HeadObject from "../components/head";

export default function About(handleKeyDown) {
    const router = useRouter();

    return (
        <div>
            <HeadObject />
            <main>
                <section className="flex flex-col space-y-10 bg-blue px-12 md:px-20 py-12">
                    <div
                        onClick={() => router.push("/")}
                        role="link"
                        tabIndex={0}
                        onKeyDown={handleKeyDown}
                        className="font-rubik flex flex-row text-center text-lg">
                        <BsArrowLeftShort size={25} /> Back
                    </div>
                    <div>
                        <h1 className="font-rubik font-bold text-6xl">About</h1>
                        <h3 className="font-rubik text-2xl">Fiveable Open Source Initiative</h3>
                    </div>
                </section>
                <div className="w-full h-60 object-cover">
                    <svg viewBox="0 0 900 600" className="transform rotate-180 -mt-1 md:-mt-5">
                        <path
                            d="M0 482l9.3-8.7c9.4-8.6 28-26 46.9-17 18.8 9 37.8 44.4 56.6 63.2 18.9 18.8 37.5 21.2 56.2 13 18.7-8.2 37.3-26.8 56-43.3 18.7-16.5 37.3-30.9 56.2-19.7 18.8 11.2 37.8 47.8 56.6 62.3 18.9 14.5 37.5 6.9 56.2-19 18.7-25.8 37.3-69.8 56-71.6 18.7-1.9 37.3 38.5 56.2 61.5 18.8 23 37.8 28.6 56.6 26 18.9-2.7 37.5-13.7 56.2-22.4 18.7-8.6 37.3-15 56-24 18.7-9 37.3-20.6 56.2-15.5C750 472 769 494 787.8 507.2c18.9 13.1 37.5 17.5 56.2 2.6 18.7-14.8 37.3-48.8 46.7-65.8l9.3-17v174H0z"
                            fill="#c1e8ed"
                        />
                    </svg>
                </div>
                <section className="px-12 md:px-20 md:py-6 font-rubik">
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
                        <p className="text-lg leading-loose">
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
