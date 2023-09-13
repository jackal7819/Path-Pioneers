import { FaMap } from 'react-icons/fa6';

const Tour = ({ image, title, info, price, duration, location, date }) => {
    return (
        <article className='tour-card'>
            <div className='tour-img-container'>
                <img src={image} className='tour-img' alt={title} />
                <p className='tour-date'>{date}</p>
            </div>
            <div className='tour-info'>
                <h4>{title}</h4>
                <p>{info}</p>
                <div className='tour-footer'>
                    <p>
                        <FaMap /> {location}
                    </p>
                    <p>{duration} days</p>
                    <p>from ${price}</p>
                </div>
            </div>
        </article>
    );
};

export default Tour;
