import HeadObject from "../components/head"

export default function Home() {
    return (
        <div>
            <HeadObject />
            <main>
                <section className="flex flex-col space-y-10 bg-blue px-12 md:px-20 py-12">
                    <div className="flex flex-row space-x-5">
                        <h1 className="font-rubik font-bold text-5xl md:text-6xl">
                            Fiveable
                        </h1>
                        <div className="font-mono font-medium text-xl md:text-2xl leading-tight">
                            Open
                            <br />
                            Source
                        </div>
                    </div>
                    <h2 className="font-rubik font-medium text-3xl md:w-2/3 lg:w-2/5">
                        We're building a community for discovery and learning.
                    </h2>
                    <div className="font-rubik font-medium bg-black text-center rounded-full px-3 py-1 text-lg text-white w-48">
                        Learn more. -&gt;
                    </div>
                </section>
                <svg
                    className="transform rotate-180 -mt-1 md:-mt-5"
                    viewBox="0 0 1440 320">
                    <path
                        fill="#c1e8ed"
                        d="M0 64h24c24 0 72 0 120 5.3 48 5.7 96 15.7 144 37.4 48 21.3 96 53.3 144 80 48 26.3 96 48.3 144 64C624 267 672 277 720 272s96-27 144-42.7c48-16.3 96-26.3 144-32 48-5.3 96-5.3 144 16 48 21.7 96 63.7 144 69.4 48 5.3 96-26.7 120-42.7l24-16v96H0z"
                    />
                </svg>
            </main>
        </div>
    )
}
