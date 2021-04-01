import React from 'react';
import '../styles/Hero.scss';
import Logo from '../Images/Origin51_logo_alien.svg';
import Text from '../Images/Origin51_alt-logotype.svg';



function Hero() {
    return (
        <section className='hero-container'>
            <div className='hero-images'>
                <img src={Logo} className='logo' alt=''/>
                <img src={Text} className='logo name' alt=''/>
            </div>
            <div className='arrow'>
                <span></span>
            </div>
        </section>
    )
}

export default Hero
