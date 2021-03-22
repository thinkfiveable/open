export default function Card({ name, title, projectType, thumbnail, profileIcon, featureColor }) {
    return (
        <div className="py-4">
            <div
                style={{ borderColor: `${featureColor}` }}
                className="rounded-xl h-40 w-72 overflow-hidden border-4">
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
