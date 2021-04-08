export default function SearchBar({ onChange }) {
    return (
        <input
            type="text"
            className="lg:w-2/5 sm:w-1/2 p-2 lg:text-4xl md:text-3xl font-rubik border-b-4"
            placeholder="Enter your query..."
            name="search"
            onChange={onChange}
        />
    );
}
