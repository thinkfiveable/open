import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer">
            <svg
                id="footer-svg"
                className="fill-current text-black dark:text-gray -mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320">
                <path
                    fillOpacity="1"
                    d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,240C672,224,768,192,864,197.3C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </svg>
            <div className="bg-black dark:bg-gray text-white font-medium flex flex-col space-y-5 md:flex-row md:space-y-0 py-5 md:px-20">
                <div className="flex-1 flex justify-between items-center pl-4 md:pl-0">
                    <div className="text-center md:text-left">
                        &#169; Fiveable 2021 | All Rights Reserved.
                    </div>
                </div>
                <ul className="flex flex-col items-center md:flex-row space-y-5 md:space-x-5 md:space-y-0">
                    <li>
                        <Link href="/docs/git">
                            <a className="hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-xl">Docs</a>
                        </Link>
                    </li>
                    <li>Contributors</li>
                    <li>
                        <a
                            className="hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-xl"
                            href="https://hi.fiveable.me/contact/">
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-xl"
                            href="https://hi.fiveable.me/privacy-policy/">
                            Privacy
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-xl"
                            href="https://hi.fiveable.me/terms-of-use/">
                            Terms and Conditions
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
