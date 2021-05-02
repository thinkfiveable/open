import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton() {
    const router = useRouter();
    return (
        <button
            type="button"
            className="my-4 text-xl sm:text-2xl font-rubik font-medium text-black dark:text-white focus:text-opacity-75 dark:focus:text-opacity-75 focus:outline-none"
            onClick={() => router.back()}>
            <BsArrowLeft className="inline" /> Back
        </button>
    );
}
