import Link from "next/link";

function buildHref(query, page) {
    const params = new URLSearchParams();
    if (query) {
        params.set("q", query);
    }
    params.set("page", String(page));
    return `/?${params}`;
}

export default function Pagination({ query, page, totalPages }) {
    if (totalPages <= 1) {
        return null;
    }

    return (
        <nav aria-label="Pagination" className="pagination">
            {page > 1 ? (
                <Link href={buildHref(query, page - 1)}>Previous</Link>
            ) : (
                <span className="muted">Previous</span>
            )}
            <p>
                Page {page} of {totalPages}
            </p>
            {page < totalPages ? (
                <Link href={buildHref(query, page + 1)}>Next</Link>
            ) : (
                <span className="muted">Next</span>
            )}
        </nav>
    );
}