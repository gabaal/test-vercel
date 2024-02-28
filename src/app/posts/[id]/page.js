import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link"

export async function generateMetadata({ params }) {
  // load the post
const result = await fetch (`https://jsonplaceholder.typicode.com/posts/${params.id}`)
const post = await result.json()

return{
  title: `${post.title}`,
  description: `An article about ${post.title}`,
}

}

export default async function PostPage({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}` // include the params.id value from the URL
  );
  const post = await response.json(); // parse the response as JSON

  return (
    <div>
      <h1>Post {post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href="/posts">Back to posts</Link>
    </div>
  );
}