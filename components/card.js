export default function Card({ ownerName, projectTitle, projectType, projectThumbnail, profileIcon, award }) {
    return (
        <div className="py-4">
            <div
                style={{ borderColor: award }}
                className="rounded-xl h-52 w-3/4 overflow-hidden border-4 mx-auto">
                <img src={projectThumbnail} alt="featured project" />
            </div>
            <div className="flex flex-row pt-4 justify-around">
                <div className="flex flex-col">
                    <h2 className="font-rubik font-medium text-xl">{projectTitle}</h2>
                    <div className="flex flex-row">
                        <p className="font-mono">
                            {ownerName} • {projectType}
                        </p>
                    </div>
                </div>
                <img src={profileIcon} className="rounded-full h-12 w-12 float-right" alt="Profile" />
            </div>
        </div>
    );
}
