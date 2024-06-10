import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import CV from '../../assets/files/Nathalie_CV.pdf';

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const { pathname } = useLocation();

  // create a responsive navigation bar
  let elementsArray = document.querySelectorAll('.link');

  elementsArray.forEach(function (link) {
    link.addEventListener('click', function () {
      setToggleNav(false);
    });
  });
  return (
    <>
      <nav className="top-nav">
        <NavLink className="link" to="/">
          <h1 className="logo">
            {pathname === '/' ? '/fullstack dev' : pathname}.
          </h1>
        </NavLink>
        <div className="toggle-nav"></div>
        <FontAwesomeIcon
          icon={faBars}
          className="burger-nav"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}
        />
        <div className={toggleNav ? 'top-nav__menu expanded' : 'top-nav__menu'}>
          <ul>
            <li>
              <NavLink
                exact="true"
                className="link"
                activeclassname="active"
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" className="link" to="/projects">
                PROJECTS
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" className="link" to="/about">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink activeclassname="active" className="link" to="/contact">
                CONTACT
              </NavLink>
            </li>
            <li>
              <a href={CV} className="cv-button" target="blank">
                CV
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sidebar">
        <div className="sidebar__wrapper">
          <a
            href="https://www.linkedin.com/in/nathalie-persson-enriquez/"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/nathaliejanep/"
            target="_blank"
            rel="noreferrer"
            className="linkedin-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
