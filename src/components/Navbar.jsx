import { FaBars } from 'react-icons/fa6';
import PageLinks from './PageLinks';
import SocialIcons from './SocialIcons';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='nav-center'>
                <div className='nav-header'>
                    <h3 className='title'>
                        PATH<span className='title-logo'>PIONEERS</span>
                    </h3>
                    <button
                        type='button'
                        className='nav-toggle'
                        id='nav-toggle'>
                        <FaBars />
                    </button>
                </div>

                <PageLinks
                    parentClass='nav-links'
                    id='nav-links'
                    itemClass='nav-link'
                />

                <SocialIcons parentClass='nav-icons' itemClass='nav-icon' />
            </div>
        </nav>
    );
};

export default Navbar;
