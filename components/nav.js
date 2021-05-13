import Link from "next/link";
import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";
import { FiGithub } from "react-icons/fi";

import SearchBar from "./searchbar";

export default function Nav() {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="dark:text-white">
            <ul className="flex flex-wrap sm:justify-between items-start sm:items-center">
                <ul className="mx-auto sm:mx-0 flex flex-row space-x-5">
                    <li className="self-center">
                        <SearchBar />
                    </li>
                    <li className="self-center">
                        <Link href="https://github.com/thinkfiveable/open">
                            <a className="p-3 block rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200">
                                <FiGithub size={28} />
                            </a>
                        </Link>
                    </li>
                    <li className="self-center">
                        <button
                            type="button"
                            onClick={() => {
                                setTheme(theme === "dark" ? "light" : "dark");
                                document.querySelector("#theme_toggle").classList.toggle("rotate-180");
                            }}
                            className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 focus:outline-none focus:bg-black dark:focus:bg-white focus:bg-opacity-20 dark:focus:bg-opacity-20 transform duration-200"
                            id="theme_toggle">
                            <CgDarkMode size={32} />
                        </button>
                    </li>
                </ul>
            </ul>
        </nav>
    );
}
