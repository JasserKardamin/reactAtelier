import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <>
      <NavLink
        to="/Events"
        className={({ isActive }) =>
          isActive ? "active-link-class" : "inactive-link-class"
        }
      >
        My Events
      </NavLink>
    </>
  );
};
