import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg  px-3">
      <div className="navbar-nav">
        <NavLink
          to="/events"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          Events
        </NavLink>

        <NavLink
          to="/my-events"
          className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
        >
          My Events
        </NavLink>
      </div>
    </nav>
  );
};
