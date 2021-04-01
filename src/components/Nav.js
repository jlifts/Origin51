import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { ShopContext } from '../context/shopProvider';
import '../styles/Nav.scss';
import { Anchor} from 'atomize';
import { animateScroll as scroll } from 'react-scroll';
import Lo from '../Images/Origin51_alt-logo.svg';

const Nav = () => {

    const { openCart } = useContext(ShopContext)

    const toggleTop = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <nav className="nav">
                <div className="nav-container">
                    <Link to="/" onClick={toggleTop}className="nav-name">
                        Origin 51
                    </Link>
                    <Link to="/" className="nav-logo">
                        <img src={Lo} alt=" "/>
                    </Link>
                    <ul className='nav-menu'>
                        <li className="nav-item">
                            <Link to='/' className='nav-link'>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/products' className='nav-link'>
                                Buy
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Anchor onClick={() => openCart()} className='nav-link'>
                                Cart
                            </Anchor>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Nav
