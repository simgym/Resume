import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <>
      <main>
        <ul className="navbar">
          <li>
            <span className="logo">
              <h2>Aditya Arya</h2>
              <h3>Software Engineer</h3>
            </span>
          </li>
          <div className="contents">
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/education">Education</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </div>
        </ul>
      </main>
    </>
  );
};

export default MainNavigation;
