export const metadata = { title: "Credits | Art Explorer" };

export default function CreditsPage() {
    return (
        <main>
            <h1>Credits</h1>
            <ul>
                <li>
                    Artwork data and images provided by the{" "}
                    <a href="https://harvardartmuseums.org/">Harvard Art Museums</a> API.
                </li>
                <li>
                    Built with <a href="https://nextjs.org/">Next.js</a> and React.
                </li>
            </ul>
        </main>
    );
}