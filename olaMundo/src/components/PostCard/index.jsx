import { Link } from "react-router-dom";
import "./post.css";
import Button from "../Button";

export default function PostCard({ id, title }) {
  return (
    <Link to={`/posts/${id}`}>
      <div className="post">
        <img
          className="post--cover"
          src={`/src/assets/posts/${id}/capa.png`}
          alt="Post cover image"
        />

        <h2 className="post--title">{title}</h2>

        <Button>Ler</Button>
      </div>
    </Link>
  );
}
