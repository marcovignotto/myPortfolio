import React, { Fragment, useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().hash.toString().substr(1);

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 400) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = [];

  if (scrolled) {
    navbarClasses.push("scrolled ");
  }

  return (
    <Fragment>
      <div className={`${navbarClasses.join(" ")}menu row-1"`}>
        <nav className="navigation">
          <ul>
            <li>
              <NavLink
                exact
                className={location === "" ? "menu__current__item" : ""}
                smooth
                to="#"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className={location === "about" ? "menu__current__item" : ""}
                smooth
                to="#about"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                className={location === "projects" ? "menu__current__item" : ""}
                smooth
                to="#projects"
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Navbar;