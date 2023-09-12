import { socialLinks } from '../data';

const Footer = () => {
    return (
        <footer className='section footer'>
            <ul className='footer-links'>
                <li>
                    <a href='#home' className='footer-link'>
                        home
                    </a>
                </li>
                <li>
                    <a href='#about' className='footer-link'>
                        about
                    </a>
                </li>
                <li>
                    <a href='#services' className='footer-link'>
                        services
                    </a>
                </li>
                <li>
                    <a href='#tours' className='footer-link'>
                        tours
                    </a>
                </li>
            </ul>
            <ul className='footer-icons'>
                {socialLinks.map((link) => (
                    <li key={link.id}>
                        <a
                            href={link.path}
                            target='_blank'
                            rel='noreferrer'
                            className='footer-icon'>
                            <link.icon />
                        </a>
                    </li>
                ))}
            </ul>
            <p className='copyright'>
                copyright &copy; Path Pioneers travel tours company
                <span id='date'></span> all rights reserved
            </p>
        </footer>
    );
};

export default Footer;
