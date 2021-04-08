export default function SearchCard({ name, title, projectType, thumbnail, profileIcon, award }) {
    return (
        <div className="flex flex-row py-4">
            <div
                style={{ borderColor: award }}
                className="rounded-xl h-52 w-96 overflow-hidden border-4 mr-8">
                <img src={thumbnail} alt="featured project" />
            </div>
            <div className="py-1 flex flex-row justify-around">
                <div className="flex flex-col">
                    <h2 className="font-rubik font-medium text-5xl">{title}</h2>
                    <div className="flex flex-row">
                        <p className="text-3xl font-mono">
                            {name} • {projectType}
                        </p>
                    </div>
                    <img
                        src={profileIcon}
                        className="my-5 rounded-full h-16 w-16 float-right"
                        alt="Profile"
                    />
                </div>
            </div>
        </div>
    );
}
