import { Inter } from "next/font/google";
import Link from "next/link"
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gerald Lessons",
  description: "next.js lessons",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <header><h1>The header</h1></header>
      <nav>The nav bar
        <Link href="/">Home</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/about">About</Link>
      </nav>
      <body className={inter.className}>{children}</body>
      <footer><h1>The footer</h1></footer>
    </html>
  );
}
