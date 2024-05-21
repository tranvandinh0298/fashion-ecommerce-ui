"use client";

import React from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faSignIn, faSignInAlt, faHeadphonesAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const options = [
    { value: 'all', label: 'Tất cả' },
    { value: 'shirt', label: 'Áo' },
    { value: 'pant', label: 'Quần' },
    { value: 'underwear', label: 'Đồ lót' },
    { value: 'watch', label: 'Đồng hồ' },
];

const isAuth = true;

const Header = () => {
    return (
        <header className="header shop">
            <div className="topbar">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="top-left">
                                <ul className="list-main">
                                    <li>
                                        <FontAwesomeIcon icon={faHeadphonesAlt} />
                                        0396346204
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                        dinhtv@vnptepay.com.vn
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="right-content">
                                <ul className="list-main">
                                    <li>
                                        <FontAwesomeIcon icon={faSignInAlt} />
                                        <i className="fa fa-sign-in"></i><a href="#">Login /</a>
                                        <a href="#">Register</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="middle-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-12">
                            <div className="logo">
                                <a href="#"
                                ><img src="images/logo.png" alt="logo"
                                    /></a>
                            </div>
                            <div className="search-top">
                                <div className="top-search">
                                    <a href="#0"><i className="ti-search"></i></a>
                                </div>
                                <div className="search-top">
                                    <form className="search-form">
                                        <input
                                            type="text"
                                            placeholder="Search here..."
                                            name="search"
                                        />
                                        <button value="search" type="submit">
                                            <i className="ti-search"></i>
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="mobile-nav"></div>
                        </div>
                        <div className="col-lg-8 col-md-7 col-12">
                            <div className="search-bar-top">
                                <div className="search-bar">
                                    <Select className='custom-select' classNamePrefix="custom" options={options} placeholder="Tất cả" autoFocus isSearchable />
                                    <form method="POST" action="#">
                                        <input
                                            name="search"
                                            placeholder="Nhập tìm kiếm tại đây"
                                            type="search"
                                        />
                                        <button className="btnn" type="submit">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12">
                            <div className="right-bar">
                                <div className="sinlge-bar shopping">
                                    <a href="#" className="single-icon">
                                        <FontAwesomeIcon icon={faHeart} />
                                        <span className="total-count">1</span></a>
                                    <div className="shopping-item">
                                        <div className="dropdown-cart-header">
                                            <span>1 Items</span>
                                            <a href="#">View Wishlist</a>
                                        </div>
                                        <ul className="shopping-list">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="remove"
                                                    title="Remove this item"
                                                ><i className="fa fa-remove"></i></a>
                                                <a className="cart-img" href="#"
                                                ><img
                                                        src="https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg"
                                                        alt="#"
                                                    /></a>
                                                <h4>
                                                    <a href="#" target="_blank"
                                                    >Áo khoác</a>
                                                </h4>
                                                <p className="quantity">
                                                    1 x -
                                                    <span className="amount"
                                                    >10,000</span>
                                                </p>
                                            </li>
                                        </ul>
                                        <div className="bottom">
                                            <div className="total">
                                                <span>Total</span>
                                                <span className="total-amount"
                                                >20,000</span>
                                            </div>
                                            <a href="#" className="btn animate"
                                            >Cart</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sinlge-bar shopping">
                                    <a href="#" className="single-icon">
                                        <FontAwesomeIcon icon={faShoppingBag} />
                                        <span className="total-count">1</span></a>
                                    <div className="shopping-item">
                                        <div className="dropdown-cart-header">
                                            <span>1 Items</span>
                                            <a href="#">View Cart</a>
                                        </div>
                                        <ul className="shopping-list">
                                            <li>
                                                <a
                                                    href="#"
                                                    className="remove"
                                                    title="Remove this item"
                                                ><i className="fa fa-remove"></i></a>
                                                <a className="cart-img" href="#"
                                                ><img
                                                        src="https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg"
                                                        alt="#"
                                                    /></a>
                                                <h4>
                                                    <a href="#" target="_blank"
                                                    >quần áo</a>
                                                </h4>
                                                <p className="quantity">
                                                    1 x -
                                                    <span className="amount"
                                                    >10,000</span>
                                                </p>
                                            </li>
                                        </ul>
                                        <div className="bottom">
                                            <div className="total">
                                                <span>Total</span>
                                                <span className="total-amount"
                                                >10,000</span>
                                            </div>
                                            <a href="#" className="btn animate"
                                            >Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-inner">
                <div className="container">
                    <div className="cat-nav-head">
                        <div className="row">
                            <div className="col-lg-12 col-12">
                                <div className="menu-area">
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="navbar-collapse">
                                            <div className="nav-inner">
                                                <ul
                                                    className="nav main-menu menu navbar-nav"
                                                >
                                                    <li className="active">
                                                        <a href="#">Home</a>
                                                    </li>
                                                    <li className="">
                                                        <a href="#">About Us</a>
                                                    </li>
                                                    <li className="">
                                                        <a
                                                            href="{{route('product-grids')}}"
                                                        >Products</a><span className="new"
                                                        >New</span>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="javascript:void(0);"
                                                        >Category<i
                                                            className="ti-angle-down"></i></a>
                                                        <ul
                                                            className="dropdown border-0 shadow"
                                                        >
                                                            <li>
                                                                <a href="#"
                                                                >Thời
                                                                    trang</a>
                                                                <ul
                                                                    className="dropdown sub-dropdown border-0 shadow"
                                                                >
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                        >Áo</a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                        >Quần</a>
                                                                    </li>
                                                                    <li>
                                                                        <a
                                                                            href="#"
                                                                        >Mũ</a>
                                                                    </li>
                                                                </ul>
                                                            </li>

                                                            <li>
                                                                <a href="#"
                                                                >Điện tử</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="#">
                                                        <a href="#">Blog</a>
                                                    </li>

                                                    <li className="#">
                                                        <a
                                                            href="{{route('contact')}}"
                                                        >Contact Us</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;