import React from 'react'
import AboutImg from '../../assets/images/about-us.jpg'
import Footer from '../common/Footer'
import Header from '../common/Header'

const Home = () => {
    return (
        <>
            <Header />
            <main>
                {/*Hero Section*/}
                <section className='section-1'>
                    <div className="hero d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="text-center">
                                <span>Welcome Amazing Construction</span>
                                <h1>Crafting dreams with <br />precision and excellence.</h1>
                                <p>We excel at transforming visions into reality through outstanding craftsmanship and precise <br /> attention to detail. with years of experience and a dedication to quality.</p>
                                <div className="mt-4">
                                    <a className='btn btn-primary'>Contact Now</a>
                                    <a className='btn btn-secondary ms-2'>View Projects</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About Section*/}
                <section className='section-2 py-5'>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={AboutImg} className="w-100" />
                            </div>
                            <div className="col-md-6">
                                <span>about us</span>
                                <h2>Crafting structures that last a lifetime</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam velit lectus, auctor ut feugiat non, consequat at magna. Ut vel nisl semper, varius augue vel, congue augue. Curabitur purus est, blandit ut felis non, rhoncus porta dui. Aenean quis condimentum velit, ac placerat est.</p>
                                <p>Nunc et maximus dolor. Aliquam nec dolor vitae libero pretium placerat eu quis nibh. Duis rhoncus laoreet mi, eget finibus mi dictum sed. Phasellus fringilla magna dui.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer />
        </>

    )
}

export default Home