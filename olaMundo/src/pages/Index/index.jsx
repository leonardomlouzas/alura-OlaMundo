import "./index.css";
import posts from "/src/json/posts.json";
import PostCard from "/src/components/PostCard";

export default function Index() {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} id={post.id} post={post} />
      ))}
    </ul>
  );
}
