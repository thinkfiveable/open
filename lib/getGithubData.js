/**
 * Retrieve Github GraphQL Data
 * @param {String} repoOwner - Owner of the Repository
 * @param {String} repoName - Name of the Repository
 */
export async function getGraphqlData(repoOwner, repoName) {
    const headers = {};

    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const body = JSON.stringify({
        query: `
						query RepositoryInfo($repoOwner: String!, $repoName: String!){ 
							repository(owner: $repoOwner, name: $repoName) { 
								owner {
									login
								}
								description
								name
								usesCustomOpenGraphImage
								openGraphImageUrl
							}
						}`,
        variables: {
            repoOwner,
            repoName
        }
    });
    const { data, message } = await fetch("https://api.github.com/graphql", {
        headers,
        body,
        method: "POST"
    }).then((res) => res.json());

    if (message) return message;
    return data;
}

/**
 * Retrieve Github Restful Data
 * @param {String} repoOwner - Owner of the Repository
 * @param {String} repoName - Name of the Repository
 */
export async function getRestfulData(repoOwner, repoName) {
    const headers = {
        Accept: "application/vnd.github.mercy-preview+json"
    };

    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const data = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}`, {
        headers,
        method: "GET"
    }).then((res) => {
        if (res.headers.raw()["x-ratelimit-remaining"][0] === 0)
            console.log("\u001b[31mHit Rate Limit!!!\u001b[39m");
        return res.json();
    });

    return {
        owner: { login: data.owner.login },
        description: data.description,
        name: data.name,
        usesCustomOpenGraphImage: null,
        openGraphImageUrl: null
    };
}
