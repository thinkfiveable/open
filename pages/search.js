import { useRouter } from "next/router";
import { useState } from "react";

import BackButton from "../components/backbtn";
import HeadObject from "../components/head";
import SearchCard from "../components/searchcard";
import data from "../data/PROJECTS.json";
import SearchData from "../lib/search";

export default function Search() {
    const router = useRouter();
    const [searchVal, updateSearch] = useState(router.query.q || "");
    const results = SearchData(searchVal, data);
    return (
        <div className="min-h-screen dark:text-white dark:bg-black">
            <HeadObject />
            <main>
                <div className="flex flex-col mx-5 sm:mx-20 justify-start gap-12 py-4 sm:py-12">
                    <div className="flex flex-col-reverse items-start sm:items-center sm:flex-row sm:justify-between">
                        <input
                            type="text"
                            className="bg-transparent lg:w-2/5 sm:w-1/2 p-2 lg:text-4xl md:text-3xl font-rubik border-b-4 border-black dark:border-white focus:border-opacity-50 dark:focus:border-opacity-50 focus:outline-none"
                            placeholder="Enter your query..."
                            name="search"
                            autoComplete="off"
                            value={searchVal}
                            onChange={(evt) => {
                                updateSearch(evt.target.value);
                                router.replace(`/search?q=${evt.target.value}`);
                            }}
                        />
                        <BackButton />
                    </div>

                    {results.length > 0 ? (
                        results.map(({ repoName, repoOwner, projectType, repoLogo }) => (
                            <a key={repoName} href={`https://github.com/${repoOwner}/${repoName}`}>
                                <SearchCard
                                    key={repoName}
                                    repoOwner={repoOwner}
                                    title={repoName}
                                    projectType={projectType}
                                    thumbnail={
                                        repoLogo ?? encodeURI(`https://og-image.vercel.app/${repoName}.png`)
                                    }
                                />
                            </a>
                        ))
                    ) : (
                        <p className="px-2 sm:text-xl text-base font-rubik">
                            {searchVal === ""
                                ? "Enter your search above."
                                : "Nothing was found for this query."}
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
}
