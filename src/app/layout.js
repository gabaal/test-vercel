import { Inter } from "next/font/google";
import Link from "next/link"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Posts by Gerald",
  description: "A simple blog built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header className="header">
        <div className="container">
          <h1 className="logo">A Logo</h1>
          <nav className="navbar">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/about">About</Link>
          </nav>
        </div>
      </header>
      <main className={inter.className}>{children}</main>
      <footer className="footer"><h2>The footer</h2></footer>
      </body>
    </html>
  );
}
