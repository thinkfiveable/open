export default function Card({ owner, title, type, thumbnail, profileIcon, award }) {
    return (
        <div className="py-4">
            <div
                style={{ borderColor: award, backgroundImage: thumbnail }}
                className="rounded-xl h-52 w-3/4 overflow-hidden bg-white bg-center bg-cover border-4 mx-auto"
            />
            <div className="flex flex-row pt-4 justify-around">
                <div className="flex flex-col">
                    <h2 className="font-rubik font-medium text-xl">{title}</h2>
                    <div className="flex flex-row">
                        <p className="font-mono">
                            {owner} • {type}
                        </p>
                    </div>
                </div>
                <a href={`https://github.com/${owner}`}>
                    <img src={profileIcon} className="rounded-full h-full w-12 float-right" alt="Profile" />
                </a>
            </div>
        </div>
    );
}
