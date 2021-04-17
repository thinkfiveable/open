import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton() {
    const router = useRouter();
    return (
        <button
            type="button"
            className="my-4 text-xl sm:text-2xl font-rubik font-medium"
            onClick={() => router.back()}>
            <BsArrowLeft className="inline" /> Back
        </button>
    );
}
