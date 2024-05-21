import React from 'react';
import Breadcrumb from "components/common/Breadcrumb";
import Newsletter from 'components/specific/Newsletter';
import ShoppingPolicy from 'components/specific/Policy/ShoppingPolicy';

const Aboutus = () => {
    let sequence = [
        {
            label: "Home",
            href: "/",
            active: false,
        }, {
            label: "About us",
            href: "#",
            active: true,
        }
    ];

    return (
        <main>
            <Breadcrumb breadcrumbs={sequence} />

            <section className="about-us section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="about-content">
                                <h3>
                                    Welcome To <span>Ecommerce Laravel</span>
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Excepturi eveniet eum
                                    error ducimus nam dolores ut eius hic
                                    laborum labore reiciendis ea enim explicabo,
                                    incidunt mollitia ratione, quo cupiditate
                                    eos.
                                </p>
                                <div className="button">
                                    <a href="#" className="btn">Our Blog</a>
                                    <a href="#" className="btn primary"
                                    >Contact Us</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="about-img overlay">
                                <div className="button">
                                    <a
                                        href="https://youtu.be/EdhR-ry40So?list=RDEdhR-ry40So"
                                        className="video video-popup mfp-iframe"
                                    ><i className="fa fa-play"></i></a>
                                </div>
                                <img
                                    src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
                                    alt="#"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ShoppingPolicy />

            <Newsletter />
        </main>
    )
}

export default Aboutus