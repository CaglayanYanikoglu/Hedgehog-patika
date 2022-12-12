import {
  Link,
  NavLink
} from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'active-link' : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'active-link' : undefined
          }
        >
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;