import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <p>&copy; 2026 Art Explorer. All rights reserved.</p>
            <p>
                <Link href="/credits">Credits</Link>
            </p>
        </footer>
    );
}