import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
});

export const metadata: Metadata = {
    title: {
        default: "Home | Art Explorer",
        template: "%s | Art Explorer",
    },
    description: "Search the Harvard Art Museums collection.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={openSans.variable}>
        <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        </body>
        </html>
    );
}