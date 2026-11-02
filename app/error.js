"use client";

export default function GlobalError({ reset }) {
    return (
        <main>
            <h1>Something went wrong</h1>
            <p role="alert">An unexpected error occurred.</p>
            <button type="button" onClick={reset}>
                Try again
            </button>
        </main>
    );
}