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
        <div className="m-2 flex flex-row rounded-full bg-white sm:h-auto sm:w-3/5 md:w-2/5 sm:mr-8 md:mr-16">
            <input
                type="text"
                className="bg-transparent hidden w-full sm:block p-2 px-4 text-xl font-rubik focus:outline-none"
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
                className="absolute top-26 bg-white rounded-full right-4 sm:relative p-4 sm:p-none focus:outline-none">
                <BsSearch className="sm:hidden" size={30} />
                <BsSearch className="hidden sm:block" />
            </button>
        </div>
    );
}
