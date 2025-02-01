import React from 'react'

const Footer = () => {
    return (

        <footer>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-3">
                        <h3>Urban Constructions</h3>
                        <div className='pe-5'>
                            <p>In sed dui libero. Sed nec enim ac metus condimentum blandit sed vel purus. Cras posuere sem eget sem convallis, a convallis ipsum venenatis.</p>
                        </div>

                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-3'>
                            Our Services
                        </h3>
                        <ul>
                            <li><a href="">Civil Construction</a></li>
                            <li><a href="">Residential Construction</a></li>
                            <li>
                                <a href="">Corporate Construction</a>
                            </li>
                            <li><a href="">Building Construction</a></li>
                            <li><a href="">Industrial Construction</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-3'>
                            Quick Links
                        </h3>
                        <ul>
                            <li>
                                <a href="">About Us</a>
                            </li>
                            <li><a href="">Services</a></li>
                            <li><a href="">Projects</a></li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className='mb-3'>
                            Contact Us
                        </h3>
                        <ul>
                            <li>
                                <a href="">(888-000-0000)</a>
                            </li>
                            <li><a href="">info@example.com</a></li>
                            <p>
                                D-20X, Maharaja Puram<br />
                                Delhi, 190017<br />
                                0711300XXXX
                            </p>
                        </ul>
                    </div>
                    <hr />
                    <div className='text-center pt-4'>Copyright @ 2024 Urban Constructions. All rights reserved.</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer