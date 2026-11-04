"use client";

type GlobalErrorProps = {
    reset: () => void;
};

// Last-resort boundary so an unexpected crash never leaves a blank screen.
export default function GlobalError({ reset }: GlobalErrorProps) {
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