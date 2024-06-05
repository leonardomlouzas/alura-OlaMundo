import { Link, useLocation } from "react-router-dom";
import "./menuLink.css";

export default function MenuLink({ children, to }) {
  const location = useLocation();
  return (
    <Link
      className={`link ${location.pathname === to ? "link--active" : ""}`}
      to={to}
    >
      {children}
    </Link>
  );
}
