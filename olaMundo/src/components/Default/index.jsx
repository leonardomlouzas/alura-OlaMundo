import { Outlet } from "react-router-dom";
import Banner from "/src/components/Banner";

export default function Default({ children }) {
  return (
    <main>
      <Banner />
      <Outlet />
      {children}
    </main>
  );
}
