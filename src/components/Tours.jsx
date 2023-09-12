import { FaMap } from 'react-icons/fa6';
import tour1 from '../assets/tour-1.jpeg';
import tour2 from '../assets/tour-2.jpeg';
import tour3 from '../assets/tour-3.jpeg';
import tour4 from '../assets/tour-4.jpeg';
import tour5 from '../assets/tour-5.jpeg';
import tour6 from '../assets/tour-6.jpeg';

const Tours = () => {
    return (
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
                            Journey to the heart of India and behold the iconic
                            Taj Mahal. Immerse yourself in the grandeur of this
                            architectural masterpiece and explore India&apos;s
                            rich history and culture.
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
                            thrilling safari adventure. Witness the &quot;Big
                            Five&quot; and experience the stunning Serengeti and
                            Ngorongoro Crater.
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
                            Embark on a spiritual journey through Tibet&apos;s
                            landscapes, visiting ancient monasteries and
                            witnessing breathtaking Himalayan vistas. Discover
                            enlightenment in Tibet.
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
                            Experience the heart of Java, Indonesia, with our
                            curated tour. Explore lush jungles, ancient temples,
                            vibrant markets, and savor the rich flavors of
                            Java&apos;s cuisine.
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
                            skyscrapers to traditional markets, savor a fusion
                            of cultures and relish the city&apos;s unique blend
                            of old and new.
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
                            Witness the untamed beauty of Kenya. Safari through
                            iconic national parks, wildlife, and immerse
                            yourself in Maasai culture. Kenya&apos;s natural
                            wonders await.
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
    );
};

export default Tours;
