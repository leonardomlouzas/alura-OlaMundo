import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import "./notFound.css";
import error from "/src/assets/erro_404.png";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <div className="notfound">
        <span className="notfound--404">404</span>

        <h1 className="notfound--title">Ops, página não encontrada!</h1>
        <p className="notfound--paragraph">
          Desculpe, a página que você está procurando não existe.
        </p>
        <div className="notfound--button" onClick={() => navigate("/")}>
          <Button isLarge={true}>Início</Button>
        </div>
        <img
          className="notfound--image"
          src={error}
          alt="Cachorro de óculos e vestido como humano"
        />
      </div>
      <div className="notfound--blank"></div>
    </>
  );
}
