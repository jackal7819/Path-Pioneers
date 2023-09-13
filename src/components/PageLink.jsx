const PageLink = ({ path, title, itemClass }) => {
    return (
        <li>
            <a href={path} className={itemClass}>
                {title}
            </a>
        </li>
    );
};

export default PageLink;
