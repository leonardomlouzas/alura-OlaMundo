import "./post.css";
import { useParams } from "react-router-dom";
import posts from "/src/json/posts.json";
import PostModel from "/src/components/PostModel";
import PostCard from "/src/components/PostCard";
import ReactMarkdown from "react-markdown";
import NotFound from "../NotFound";
import Default from "/src/components/Default";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => post.id === params.id);

  if (!post) return <NotFound />;

  const recommendedPosts = posts
    .filter((post) => post.id !== params.id)
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <Default>
      <PostModel
        cover={`/src/assets/posts/${post.id}/capa.png`}
        title={post.titulo}
        id={post.id}
      >
        <div className="post--markdown">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>

        <h2 className="post--recommended">Posts recomendados:</h2>
        <ul className="post--recommended-list">
          {recommendedPosts.map((post) => (
            <li key={post.id}>
              <PostCard id={post.id} title={post.titulo} />
            </li>
          ))}
        </ul>
      </PostModel>
    </Default>
  );
}
