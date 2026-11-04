import Link from "next/link";

export default function SiteHeader() {
    return (
        <header className="site-header">
            <p className="site-title">Art Explorer</p>
            <nav aria-label="Main navigation">
                <ul className="nav-list">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/credits">Credits</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}