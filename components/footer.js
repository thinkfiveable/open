export default function Footer() {
    return (
        <div className="footer">
            <svg id="footer-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 100 1440 200">
                <path
                    fill="#171717"
                    fillOpacity="1"
                    d="M0,288L40,266.7C80,245,160,203,240,176C320,149,400,139,480,138.7C560,139,640,149,720,165.3C800,181,880,203,960,197.3C1040,192,1120,160,1200,149.3C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                />
            </svg>
            <div className="bg-black text-white font-medium flex flex-col space-y-5 md:flex-row md:space-y-0 py-5 md:px-20">
                <div className="flex-1 flex justify-between items-center pl-4 md:pl-0">
                    <div>&#169; Fiveable 2021 | All Rights Reserved.</div>
                </div>
                <ul className="flex flex-col items-center md:flex-row space-y-5 md:space-x-5 md:space-y-0">
                    <li>Docs</li>
                    <li>Contributors</li>
                    <li>
                        <a className="hover:bg-white hover:bg-opacity-5 px-4 py-2 rounded-xl" href="https://hi.fiveable.me/contact/">Contact Us</a>
                    </li>
                    <li>
                        <a href="https://hi.fiveable.me/privacy-policy/">Privacy</a>
                    </li>
                    <li>
                        <a href="https://hi.fiveable.me/terms-of-use/">Terms and Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
