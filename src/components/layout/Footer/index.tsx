"use client";

import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-12">
                            <div className="single-footer about">
                                <div className="logo">
                                    <a href="index.html">
                                        <Image src="/images/avatar.png" width={80} height={80} alt="#" />
                                    </a>
                                </div>
                                <p className="text">Liên hệ với chúng tôi</p>
                                <p className="call">
                                    Got Question? Call us 24/7<span
                                    ><a href="tel:123456789"
                                    >0396346204</a></span>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer links">
                                <h4>Information</h4>
                                <ul>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li><a href="#">Faq</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li><a href="#">Help</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-12">
                            <div className="single-footer links">
                                <h4>Customer Service</h4>
                                <ul>
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Money-back</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Shipping</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer social">
                                <h4>Get In Tuch</h4>
                                <div className="contact">
                                    <ul>
                                        <li>Số 27, ngõ 62, Phùng Khoang</li>
                                        <li>tranvandinh0298@gmail.com</li>
                                        <li>0396346204</li>
                                    </ul>
                                </div>
                                <div
                                    className="sharethis-inline-follow-buttons"
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="container">
                    <div className="inner">
                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="left">
                                    <p>
                                        © 2025 Developed By Prajwal Rai - All
                                        Rights Reserved.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="right">
                                    <Image src="/images/payments.png" width={272} height={20} alt="#" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer