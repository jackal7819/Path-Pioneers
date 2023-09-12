import { pageLinks, socialLinks } from '../data';

import { FaBars } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h3 className='title'>
                        Path <span className='title-logo'>Pioneers</span>
                    </h3>
                    <button
                        type='button'
                        className='nav-toggle'
                        id='nav-toggle'>
                        <FaBars />
                    </button>
                </div>

                <ul className='nav-links' id='nav-links'>
                    {pageLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.path} className='nav-link'>
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className='nav-icons'>
                    {socialLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.path}
                                target='_blank'
                                rel='noreferrer'
                                className='nav-icon'>
                                <link.icon />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
