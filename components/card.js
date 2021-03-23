export default function Card({ name, title, projectType, thumbnail, profileIcon, award }) {
    return (
        <div className="py-4">
            <div
                style={{ borderColor: award }}
                className="rounded-xl h-52 w-96 overflow-hidden border-4 lg:w-80">
                <img src={thumbnail} alt="featured project" />
            </div>
            <div className="flex flex-row pt-4 justify-between max-w-6xl">
                <div className="flex flex-col">
                    <h2 className="font-rubik font-medium text-xl">{title}</h2>
                    <div className="flex flex-row">
                        <p className="font-mono">
                            {name} • {projectType}
                        </p>
                    </div>
                </div>
                <img src={profileIcon} className="rounded-full h-12 w-12" alt="Profile" />
            </div>
        </div>
    );
}
