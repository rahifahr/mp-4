import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <p> All Rights Reserved by Rahifah Rahman &copy;</p>
            <p>
                <Link href="/credits">Credits</Link>
            </p>
        </footer>
    );
}