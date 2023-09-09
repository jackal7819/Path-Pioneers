import {
    FaBars,
    FaFacebook,
    FaInstagram,
    FaMap,
    FaSocks,
    FaTree,
    FaTwitter,
    FaWallet,
} from 'react-icons/fa6';

import about from './assets/about.jpeg';
import tour1 from './assets/tour-1.jpeg';
import tour2 from './assets/tour-2.jpeg';
import tour3 from './assets/tour-3.jpeg';
import tour4 from './assets/tour-4.jpeg';
import tour5 from './assets/tour-5.jpeg';
import tour6 from './assets/tour-6.jpeg';

const App = () => {
    return (
        <>
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

            <section className='hero' id='home'>
                <div className='hero-banner'>
                    <h1>continue exploring</h1>
                    <p>
                        Unlocking the World&apos;s Wonders, One Adventure at a
                        Time. Continue Exploring, Embrace the Extraordinary.
                    </p>
                    <a href='#tours' className='btn hero-btn'>
                        explore tours
                    </a>
                </div>
            </section>

            <section className='section' id='about'>
                <div className='section-title'>
                    <h2>
                        about <span>us</span>
                    </h2>
                </div>

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
                            Embark on a transformative adventure with Path
                            Pioneers. Our seasoned explorers craft unforgettable
                            journeys, immersing you in diverse cultures,
                            breathtaking landscapes, and authentic experiences.
                        </p>
                        <p>
                            Join us in continuing to explore and embrace the
                            extraordinary. With our unwavering commitment to
                            excellence, we redefine travel, one adventure at a
                            time.
                        </p>
                        <a href='#' className='btn'>
                            read more
                        </a>
                    </article>
                </div>
            </section>

            <section className='section services' id='services'>
                <div className='section-title'>
                    <h2>
                        our <span>services</span>
                    </h2>
                </div>
                <div className='section-center services-center'>
                    <article className='service'>
                        <span className='service-icon'>
                            <FaWallet />
                        </span>
                        <div className='service-info'>
                            <h4 className='service-title'>saving money</h4>
                            <p className='service-text'>
                                Our budget-friendly options ensure you explore
                                more without breaking the bank.
                            </p>
                        </div>
                    </article>

                    <article className='service'>
                        <span className='service-icon'>
                            <FaTree />
                        </span>
                        <div className='service-info'>
                            <h4 className='service-title'>endless hiking</h4>
                            <p className='service-text'>
                                Uncover the world&apos;s natural beauty with
                                extensive hiking trails and adventures.
                            </p>
                        </div>
                    </article>

                    <article className='service'>
                        <span className='service-icon'>
                            <FaSocks />
                        </span>
                        <div className='service-info'>
                            <h4 className='service-title'>amazing comfort</h4>
                            <p className='service-text'>
                                Experience comfort and luxury throughout your
                                journey with our accommodations.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className='section' id='tours'>
                <div className='section-title'>
                    <h2>
                        featured <span>tours</span>
                    </h2>
                </div>

                <div className='section-center featured-center'>
                    <article className='tour-card'>
                        <div className='tour-img-container'>
                            <img src={tour6} className='tour-img' alt='' />
                            <p className='tour-date'>january 17th, 2024</p>
                        </div>
                        <div className='tour-info'>
                            <h4>taj mahal exploration</h4>
                            <p>
                                Journey to the heart of India and behold the
                                iconic Taj Mahal. Immerse yourself in the
                                grandeur of this architectural masterpiece and
                                explore India&apos;s rich history and culture.
                            </p>
                            <div className='tour-footer'>
                                <p>
                                    <FaMap /> india
                                </p>
                                <p>14 days</p>
                                <p>from $2900</p>
                            </div>
                        </div>
                    </article>

                    <article className='tour-card'>
                        <div className='tour-img-container'>
                            <img src={tour5} className='tour-img' alt='' />
                            <p className='tour-date'>february 9th, 2024</p>
                        </div>
                        <div className='tour-info'>
                            <h4>tanzania adventure</h4>
                            <p>
                                Discover the untamed beauty of Tanzania on a
                                thrilling safari adventure. Witness the
                                &quot;Big Five&quot; and experience the stunning
                                Serengeti and Ngorongoro Crater.
                            </p>
                            <div className='tour-footer'>
                                <p>
                                    <FaMap /> tanzania
                                </p>
                                <p>17 days</p>
                                <p>from $3800</p>
                            </div>
                        </div>
                    </article>
                    <article className='tour-card'>
                        <div className='tour-img-container'>
                            <img src={tour1} className='tour-img' alt='' />
                            <p className='tour-date'>august 26th, 2024</p>
                        </div>
                        <div className='tour-info'>
                            <div className='tour-title'>
                                <h4>Tibet Adventure</h4>
                            </div>
                            <p>
                                Embark on a spiritual journey through
                                Tibet&apos;s landscapes, visiting ancient
                                monasteries and witnessing breathtaking
                                Himalayan vistas. Discover enlightenment in
                                Tibet.
                            </p>
                            <div className='tour-footer'>
                                <p>
                                    <FaMap /> china
                                </p>
                                <p>6 days</p>
                                <p>from $2100</p>
                            </div>
                        </div>
                    </article>

                    <article className='tour-card'>
                        <div className='tour-img-container'>
                            <img src={tour2} className='tour-img' alt='' />
                            <p className='tour-date'>september 1th, 2024</p>
                        </div>
                        <div className='tour-info'>
                            <h4>best of java</h4>
                            <p>
                                Experience the heart of Java, Indonesia, with
                                our curated tour. Explore lush jungles, ancient
                                temples, vibrant markets, and savor the rich
                                flavors of Java&apos;s cuisine.
                            </p>
                            <div className='tour-footer'>
                                <p>
                                    <FaMap /> indonesia
                                </p>
                                <p>11 days</p>
                                <p>from $1400</p>
                            </div>
                        </div>
                    </article>

                    <article className='tour-card'>
                        <div className='tour-img-container'>
                            <img src={tour3} className='tour-img' alt='' />
                            <p className='tour-date'>october 15th, 2024</p>
                        </div>
                        <div className='tour-info'>
                            <h4>explore hong kong</h4>
                            <p>
                                Dive into the vibrant energy of Hong Kong. From
                                skyscrapers to traditional markets, savor a
                                fusion of cultures and relish the city&apos;s
                                unique blend of old and new.
                            </p>
                            <div className='tour-footer'>
                                <p>
                                    <FaMap /> hong kong
                                </p>
                                <p>8 days</p>
                                <p>from $5000</p>
                            </div>
                        </div>
                    </article>

                    <article className='tour-card'>
                        <div className='tour-img-container'>
                            <img src={tour4} className='tour-img' alt='' />
                            <p className='tour-date'>december 5th, 2024</p>
                        </div>
                        <div className='tour-info'>
                            <h4>kenya highlights</h4>
                            <p>
                                Witness the untamed beauty of Kenya. Safari
                                through iconic national parks, wildlife, and
                                immerse yourself in Maasai culture. Kenya&apos;s
                                natural wonders await.
                            </p>
                            <div className='tour-footer'>
                                <p>
                                    <FaMap /> kenya
                                </p>
                                <p>20 days</p>
                                <p>from $3300</p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

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
                    <li>
                        <a
                            href='https://www.facebook.com'
                            target='_blank'
                            rel='noreferrer'
                            className='footer-icon'>
                            <FaFacebook />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.twitter.com'
                            target='_blank'
                            rel='noreferrer'
                            className='footer-icon'>
                            <FaTwitter />
                        </a>
                    </li>
                    <li>
                        <a
                            href='https://www.instagram.com'
                            target='_blank'
                            rel='noreferrer'
                            className='footer-icon'>
                            <FaInstagram />
                        </a>
                    </li>
                </ul>
                <p className='copyright'>
                    copyright &copy; Path Pioneers travel tours company
                    <span id='date'></span> all rights reserved
                </p>
            </footer>
        </>
    );
};

export default App;
