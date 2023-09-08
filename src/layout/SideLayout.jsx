import { Link, Outlet } from "react-router-dom";
import "./SideLayout.css";

export function SideLayout() {
  return (
    <>
      <nav className="side-nav">
        <Link to="/">
          <h1>Movie Hub</h1>
        </Link>
        <div className="bottom-section_left"></div>
      </nav>
      <div className="content-container">
        <Outlet />
      </div>
    </>
  );
}
