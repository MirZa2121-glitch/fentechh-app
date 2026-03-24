import { useState } from 'react';
import '../scss/bloc/_header.scss';
import IMG from '../components/img';

const Header = function() {
    const navigation = [
        {id: 1, name: 'Home', href: '#home'},
        {id: 2, name: 'About', href: '#about'},
        {id: 3, name: 'New', href: '#new'},
        {id: 4, name: 'Bank', href: '#bank'},
        {id: 5, name: 'FAQ', href: '#faq'},
        {id: 6, name: 'Smile', href: '#smile'},
    ]

    const [active, setActive] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__inner">
                        <div className="header__logo">
                            <a className="logo__box" href="#home">
                                <img src={IMG.logo} alt="logo"/>
                                <p className="logo">Rise<abbr style={{
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }}>Finance</abbr></p>
                            </a>
                        </div>
                        <nav className="header__nav" >
                            <ul className={`header__list ${active ? 'active' : ''}`}>
                                <li className="close" onClick={() => setActive(false)}>
                                    <img src={IMG.close} alt="close"/>
                                </li>
                                {navigation.map(nav => (
                                    <li key={nav.id}>
                                        <a className="header__links" href={nav.href}>{nav.name}</a>
                                    </li>
                                ))}
                            </ul>
                            <li className="open" onClick={() => setActive(!active)}>
                                <img src={IMG.menu} alt="menu"/>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;