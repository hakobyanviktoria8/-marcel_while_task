import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <Link to="/" className="mr-2">
        Products
      </Link>
      <Link to="/users">Users</Link>
    </div>
  );
};
