import PageLink from './PageLink';
import { pageLinks } from '../data';

const PageLinks = ({ parentClass, itemClass, id }) => {
    return (
        <ul className={parentClass}>
            <ul className='nav-links' id={id}>
                {pageLinks.map((link) => (
                    <PageLink key={link.id} itemClass={itemClass} {...link} />
                ))}
            </ul>
        </ul>
    );
};

export default PageLinks;
