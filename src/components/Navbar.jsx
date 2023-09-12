import {
    FaBars,
    FaFacebook,
    FaInstagram,
    FaTwitter,
} from 'react-icons/fa6';

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
                    <li>
                        <a href='#home' className='nav-link'>
                            home
                        </a>
                    </li>
                    <li>
                        <a href='#about' className='nav-link'>
                            about
                        </a>
                    </li>
                    <li>
                        <a href='#services' className='nav-link'>
                            services
                        </a>
                    </li>
                    <li>
                        <a href='#tours' className='nav-link'>
                            tours
                        </a>
                    </li>
                </ul>

                <ul className='nav-icons'>
                    <li>
                        <a
                            href='https://www.facebook.com'
                            target='_blank'
                            rel='noreferrer'
                            className='nav-icon'>
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.twitter.com'
                            target='_blank'
                            rel='noreferrer'
                            className='nav-icon'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.instagram.com/'
                            target='_blank'
                            rel='noreferrer'
                            className='nav-icon'>
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
