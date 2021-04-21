import { useState } from "react";
import { FiGithub } from "react-icons/fi";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            {/** Shows modal when the button is clicked for testing purposes */}
            <button
                className="bg-black font-rubik text-white p-5 rounded-lg"
                type="button"
                onClick={() => setShowModal(true)}>
                test
            </button>
            {showModal ? (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/* content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/* Modal header */}
                                <div className="flex flex-col justify-center w-full pt-12 pb-5 px-5 space-y-3 bg-blue rounded-t-lg">
                                    <div className="flex justify-end px-4">
                                        <a
                                            href="/"
                                            className="hover:text-gray-500 absolute top-4 right-4 sm:top-8 sm:right-8 p-4 bg-white rounded-full">
                                            <FiGithub size={30} />
                                        </a>
                                    </div>

                                    <div className="flex flex-col space-y-3">
                                        <h3 className="text-5xl font-rubik font-medium text-center">Maya</h3>
                                        <div className="flex flex-row items-center justify-center space-x-2 pb-3">
                                            <img
                                                src="https://avatars.githubusercontent.com/u/19440022?v=4"
                                                alt="blank"
                                                className="w-8 h-8 rounded-full"
                                            />
                                            <p className="font-mono text-xl">ThinkFivebale</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Repo Description */}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 font-rubik font-light text-lg leading-relaxed">
                                        Maya is a multi-purpose, community-driven, single-guild Discord bot
                                        built for the Fiveable student community. It was built with
                                        functionality and customizability in mind, offering featurful
                                        moderation commands, utilities, reaction roles, and channel linking.
                                    </p>
                                </div>
                                {/* Modal Footer */}
                                <div className="flex items-center justify-end p-6">
                                    <button
                                        className="text-gray-500 font-rubik font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
                </>
            ) : null}
        </div>
    );
}
