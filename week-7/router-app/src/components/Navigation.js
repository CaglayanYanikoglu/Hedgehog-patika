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
          style={({ isActive }) =>
            isActive ? { fontWeight: '600' } : undefined
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
          style={({ isActive }) =>
            isActive ? { fontWeight: '600' } : undefined
          }
        >
          About
        </NavLink>
      </li>
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
    </ul>
  );
};

export default Navigation;