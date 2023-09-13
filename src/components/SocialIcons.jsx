import SocialIcon from './SocialIcon';
import { socialLinks } from '../data';

const SocialIcons = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass}>
            {socialLinks.map((link) => (
                <SocialIcon key={link.id} itemClass={itemClass} {...link} />
            ))}
        </ul>
    );
};

export default SocialIcons;
