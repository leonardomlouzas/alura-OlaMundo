import "./footer.css";
import Copyright from "/src/assets/marca_registrada.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={Copyright} alt="Copyright" />
      Desenvolvido por Leonardo Moreira Louzas
    </footer>
  );
}
