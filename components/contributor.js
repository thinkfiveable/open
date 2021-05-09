import { useEffect, useState } from "react";

const bgColors = {
    maintainer: { color: "black", status: "Maintainer" },
    gold: { color: "#ffb800", status: "Gold" },
    silver: { color: "#878787", status: "Silver" },
    bronze: { color: "#ffb8a1", status: "Bronze" },
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
        <div className="flex w-full m-2 lg:flex-2">
            <div className="m-0 mr-5 w-1/4 h-2/4">
                <img alt="avatar" className=" sm:w-2/4 md:w-3/4 lg:w-4/4 rounded-full" src={avatar} />
            </div>
            <div className="self-center flex-1">
                <a href={url} className=" text-2xl lg:text-2xl font-medium text-left md:text-3xl">
                    @{name}
                </a>
                {maintainersName ? (
                    <p
                        className="m-1 pb-1 h-5 md:w-1/4 lg:w-2/4 xl:w-2/6 w-2/4 sm:w-1/4 rounded-full text-center text-xs font-medium "
                        style={{
                            lineHeight: "1.5",
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
        <section className=" flex flex-wrap lg:p-8 lg:w-4/4" style={{ marginTop: "30%", margin: "0 auto" }}>
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
        </section>
    );
}
