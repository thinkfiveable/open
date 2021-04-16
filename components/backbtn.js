import { useRouter } from "next/router";
import { BsArrowLeft } from "react-icons/bs";

export default function BackButton() {
    const router = useRouter();
    return (
        <button type="button" className="text-2xl font-rubik" onClick={() => router.back()}>
            <BsArrowLeft className="inline" /> Back
        </button>
    );
}
