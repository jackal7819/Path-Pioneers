const SocialIcon = ({ icon: Icon, path, itemClass }) => {
    return (
        <li>
            <a
                href={path}
                target='_blank'
                rel='noreferrer'
                className={itemClass}>
                <Icon />
            </a>
        </li>
    );
};

export default SocialIcon;
