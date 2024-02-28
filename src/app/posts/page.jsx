// asynchronous server component
import Link from "next/link"

export const metadata = {
  title: "Gerald Posts - next.js",
  description: "A simple blog built with Next.js",
  image: "https://next-comments-postgres.vercel.app/og-image.png",
  openGraph: {
    title: "Next.js Blog",
    description: "A simple blog built with Next.js",
    type: "website",
  },
}

export default async function PostListPage({ searchParams }) {
  console.log("searchParams", searchParams);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  // reverse the posts array if the sort parameter is set to descending
  if (searchParams.sort === "desc") {
    posts.reverse();
  }

  return (
    <div>
      <h2>Post List</h2>
      <Link href="/posts?sort=asc">Sort ascending</Link> - <Link href="/posts?sort=desc">
        Sort descending
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={`/posts/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}