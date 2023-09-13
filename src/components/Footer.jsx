import PageLinks from './PageLinks';
import SocialIcons from './SocialIcons';

const Footer = () => {
    return (
        <footer className='section footer'>
            <PageLinks
                parentClass='footer-links'
                id='footer-links'
                itemClass='footer-link'
            />

            <SocialIcons parentClass='footer-icons' itemClass='footer-icon' />

            <p className='copyright'>
                copyright &copy; PATHPIONEERS travel tours company
                <span id='date'>{new Date().getFullYear()}</span> all rights
                reserved
            </p>
        </footer>
    );
};

export default Footer;
