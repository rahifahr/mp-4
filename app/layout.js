import SiteHeader from "./components/site-header";
import SiteFooter from "./components/site-footer";
import "./globals.css";

export const metadata = {
  title: "Art Explorer",
  description: "Search the Harvard Art Museums collection.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body>
      <SiteHeader />
      {children}
      <SiteFooter />
      </body>
      </html>
  );
}
