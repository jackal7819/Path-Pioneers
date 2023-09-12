import { FaSocks, FaTree, FaWallet } from 'react-icons/fa6';

const Services = () => {
    return (
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
                            Our budget-friendly options ensure you explore more
                            without breaking the bank.
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
    );
};

export default Services;
