/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { NavLink } from 'react-router-dom';
import './navbar.css';
import logo from '../../images/logo.png';
import usaFlag from '../../images/USA-flag.svg';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/dashboard',
      text: 'Dashboard',
    },
    {
      id: 2,
      path: '/about',
      text: 'Collection',
    },
    {
      id: 3,
      path: '/usecases',
      text: 'UseCases',
    },
    {
      id: 4,
      path: '/products',
      text: 'Products',
    },
    {
      id: 5,
      path: '/more',
      text: 'More',
    },
  ];

  const clickToggleButton = () => {
    const navList = document.querySelector('.nav-list');
    const toggleButton = document.getElementsByClassName('toggle-button')[0];

    if (navList.style.display === '') {
      navList.style.display = 'flex';
      toggleButton.classList.toggle('active');
    } else {
      navList.style.display = '';
      toggleButton.classList.toggle('active');
    }
  };

  return (
    <nav>
      <div className="logo-and-toggle">
        <div className="toggle-button" onClick={() => clickToggleButton()}>
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
        <span className="logo-img">
          <img src={logo} alt="" />
        </span>
      </div>

      <ul className="nav-list">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flag-div" />
      <span className="flags">
        <img className="language-flag" src={usaFlag} alt="" />
        <h3 className="language">EN</h3>
      </span>
      <button type="button" className="connect-button">
        Connect App
      </button>
    </nav>
  );
};

export default Navbar;
