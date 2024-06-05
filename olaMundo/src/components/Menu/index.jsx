import "./menu.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header className="nav">
      <MenuLink to="/">Inicio</MenuLink>
      <MenuLink to="/aboutme">Sobre Mim</MenuLink>
    </header>
  );
}
