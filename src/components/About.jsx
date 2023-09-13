import Title from './Title';
import about from '../assets/about.jpeg';

const About = () => {
    return (
        <section className='section' id='about'>
            <Title title='about' subtitle='us' />

            <div className='section-center about-center'>
                <div className='about-img'>
                    <img
                        src={about}
                        className='about-photo'
                        alt='awesome beach'
                    />
                </div>
                <article className='about-info'>
                    <h3>explore the difference</h3>
                    <p>
                        Embark on a transformative adventure with PATHPIONEERS.
                        Our seasoned explorers craft unforgettable journeys,
                        immersing you in diverse cultures, breathtaking
                        landscapes, and authentic experiences.
                    </p>
                    <p>
                        Join us in continuing to explore and embrace the
                        extraordinary. With our unwavering commitment to
                        excellence, we redefine travel, one adventure at a time.
                    </p>
                    <a href='#' className='btn'>
                        read more
                    </a>
                </article>
            </div>
        </section>
    );
};

export default About;
