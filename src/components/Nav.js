import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/shopProvider';
import '../styles/Nav.scss';
import { Anchor } from 'atomize';
import { animateScroll as scroll } from 'react-scroll';
import Lo from '../Images/Origin51_alt-logo.svg';

const Nav = () => {
  const { openCart } = useContext(ShopContext);

  const toggleTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <nav className='nav'>
        <div className='nav-container'>
          <Link to='/home' onClick={toggleTop} className='nav-name'>
            Origin 51
          </Link>
          <Link to='/home' onClick={toggleTop} className='nav-logo'>
            <img src={Lo} alt=' ' />
          </Link>
          <div className='nav-menu-container'>
            <ul className='nav-menu'>
              <li className='nav-item'>
                <NavLink
                  to='/home'
                  exact
                  activeClassName='underline'
                  className='nav-link'
                >
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/products'
                  exact
                  activeClassName='underline'
                  className='nav-link'
                >
                  Buy
                </NavLink>
              </li>
              <li className='nav-item'>
                <Anchor onClick={() => openCart()} className='nav-link'>
                  Cart
                </Anchor>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
