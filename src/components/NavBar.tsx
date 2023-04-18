import { NavLink } from "react-router-dom";
import "./../styles/NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Products
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Users
      </NavLink>
    </div>
  );
};
