import Fuse from "fuse.js";

export default function SearchData(q, data) {
    const options = {
        includeScore: true,
        // Search in `author` and in `tags` array
        keys: ["repoName", "repoOwner", "projectType"]
    };

    const fuse = new Fuse(data, options);

    const results = fuse.search(q);
    return results.sort((a, b) => a.score - b.score).map((result) => result.item);
}
