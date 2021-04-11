import HeadObject from "../components/head";
import SearchBar from "../components/searchbar";
import SearchCard from "../components/searchcard";

export default function Search() {
    return (
        <div>
            <HeadObject />
            <main>
                <div className="grid mx-5 sm:mx-20 justify-start grid-cols-1 gap-12 py-4 sm:py-12">
                    <SearchBar />
                    <SearchCard
                        name="Student Name"
                        title="Lorem Ipsum"
                        projectType="Website"
                        thumbnail="https://source.unsplash.com/random"
                        profileIcon="https://picsum.photos/200"
                    />
                    <SearchCard
                        name="Student Name"
                        title="Lorem Ipsum"
                        projectType="Website"
                        thumbnail="https://source.unsplash.com/random"
                        profileIcon="https://picsum.photos/200"
                    />
                    <SearchCard
                        name="Student Name"
                        title="Lorem Ipsum"
                        projectType="Website"
                        thumbnail="https://source.unsplash.com/random"
                        profileIcon="https://picsum.photos/200"
                    />
                    <SearchCard
                        name="Student Name"
                        title="Lorem Ipsum"
                        projectType="Website"
                        thumbnail="https://source.unsplash.com/random"
                        profileIcon="https://picsum.photos/200"
                    />
                    <SearchCard
                        name="Student Name"
                        title="Lorem Ipsum"
                        projectType="Website"
                        thumbnail="https://source.unsplash.com/random"
                        profileIcon="https://picsum.photos/200"
                    />
                </div>
            </main>
        </div>
    );
}
