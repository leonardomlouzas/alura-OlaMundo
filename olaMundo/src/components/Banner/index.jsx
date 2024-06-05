import "./banner.css";
import circle from "/src/assets/circulo_colorido.png";
import pfp from "/src/assets/pfp.png";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner--content">
        <h1 className="title">Olá, Mundo!</h1>
        <p className="paragraph">
          Bem-vindos ao meu espaço pessoal! Eu sou Leonardo M. Louzas, aluno da
          Alura. Aqui compartilho vários conhecimentos, espero que você aprenda
          algo novo. :)
        </p>
      </div>
      <div className="banner--images">
        <img
          className="banner--images--circle"
          src={circle}
          aria-hidden="true"
        />
        <img
          className="banner--images--profilepicture"
          src={pfp}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
