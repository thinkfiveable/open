import { useEffect, useState } from "react";

const bgColors = {
    maintainer: { color: "black", status: "Maintainer" },
    gold: { color: "#ffb800", status: "Gold Contributor" },
    silver: { color: "#878787", status: "Silver Contributor" },
    bronze: { color: "#ffb8a1", status: "Bronze Contributor" },
    contributor: { color: "#c9beff", status: "Contributor" }
};

class UserStatus {
    constructor(contribution) {
        this.contribution = contribution;
    }

    getLabelBgColor(maintainer) {
        if (maintainer) return bgColors.maintainer.color;
        if (this.contribution > 10) return bgColors.gold.color;
        if (this.contribution > 5) return bgColors.silver.color;
        if (this.contribution > 2) return bgColors.bronze.color;
        return bgColors.contributor.color;
    }

    getLabelText(maintainer) {
        if (maintainer) return bgColors.maintainer.status;
        if (this.contribution > 10) return bgColors.gold.status;
        if (this.contribution > 5) return bgColors.silver.status;
        if (this.contribution > 2) return bgColors.bronze.status;
        return bgColors.contributor.status;
    }
}

function Contributor({ name, contributions, avatar, url }) {
    const [maintainers, setMaintainers] = useState([]);
    const user = new UserStatus(contributions);

    useEffect(() => {
        fetch("https://api.github.com/orgs/thinkfiveable/public_members")
            .then((res) => res.json())
            .then(setMaintainers)
            .catch((err) => err);
    }, []);

    const maintainersName = maintainers.map(({ login }) => ({ login }));
    const checkUserStatus = maintainersName.find(({ login }) => login === name) !== undefined;

    return (
        <div className="flex flex-row space-x-6 font-rubik">
            <div className="w-32 h-32 rounded-full overflow-hidden">
                <img alt="avatar" className="w-full h-full object-cover object-center" src={avatar} />
            </div>
            <div className="self-center space-y-3">
                <a href={url} className="text-2xl md:text-3xl dark:text-white">
                    @{name}
                </a>
                {maintainersName ? (
                    <p
                        className="rounded-full text-center text-sm leading-6 font-bold w-48"
                        style={{
                            background: user.getLabelBgColor(checkUserStatus),
                            color: checkUserStatus ? "white" : "black"
                        }}>
                        {user.getLabelText(checkUserStatus)}
                    </p>
                ) : null}
            </div>
        </div>
    );
}

export default function Contributors() {
    const [usersDetails, setUsersDetails] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/repos/thinkfiveable/open/contributors")
            .then((res) => res.json())
            .then(setUsersDetails)
            .catch((err) => err);
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-12">
            {usersDetails
                ? usersDetails.map((user) => (
                      <Contributor
                          key={user.id}
                          name={user.login}
                          contributions={user.contributions}
                          avatar={user.avatar_url}
                          url={user.html_url}
                      />
                  ))
                : null}
        </div>
    );
}
