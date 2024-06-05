import "./postModel.css";

export default function PostModel({ children, cover, title }) {
  return (
    <article className="postModel">
      <div
        className="postModel--cover"
        style={{ backgroundImage: `url(${cover})` }}
      ></div>

      <h2 className="postModel--title">{title}</h2>

      <div className="postModel--content">{children}</div>
    </article>
  );
}
