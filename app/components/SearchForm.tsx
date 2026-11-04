type SearchFormProps = {
    defaultQuery?: string;
};

export default function SearchForm({ defaultQuery = "" }: SearchFormProps) {
    return (
        <form action="/" method="get" role="search" className="search-form">
            <label htmlFor="q">Search artworks</label>
            <input
                id="q"
                name="q"
                type="text"
                defaultValue={defaultQuery}
                placeholder="e.g. Monet, pottery, landscape"
            />
            <button type="submit">Search</button>
        </form>
    );
}