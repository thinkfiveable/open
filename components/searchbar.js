import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchBar() {
    const router = useRouter();
    const [search, update] = useState("");
    const submit = () => {
        router.push(`/search?q=${search}`);
    };
    return (
        <div className="m-2 w-auto flex flex-row rounded-full bg-transparent sm:bg-white dark:bg-black dark:bg-opacity-25 focus-within:ring-4 focus-within:ring-white focus-within:ring-opacity-25">
            <input
                type="text"
                className="bg-transparent dark:placeholder-blue focus:outline-none hidden w-full sm:block p-2 px-4 text-xl font-rubik"
                placeholder="Search projects"
                autoComplete="off"
                name="search"
                value={search}
                onKeyUp={(evt) => {
                    if (evt.key === "Enter") {
                        submit();
                    }
                }}
                onChange={(evt) => update(evt.target.value)}
            />

            <button
                type="button"
                onClick={submit}
                className="hidden sm:block focus:outline-none right-4 sm:relative p-4">
                <BsSearch />
            </button>
            <button
                type="button"
                onClick={submit}
                className="sm:hidden p-3 block rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200">
                <BsSearch size={28} />
            </button>
        </div>
    );
}
