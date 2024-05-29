import React from 'react';
import Image from 'next/image';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faRemove } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import classNames from 'classnames/bind';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Cart from './Cart';

const cx = classNames.bind(styles);

const options = [
    { value: 'all', label: 'Tất cả' },
    { value: 'shirt', label: 'Áo' },
    { value: 'pant', label: 'Quần' },
    { value: 'underwear', label: 'Đồ lót' },
    { value: 'watch', label: 'Đồng hồ' },
];

const HeaderMiddle = () => {
    return (
        <div className={cx("middle-inner")}>
            <Container>
                <Row>
                    <Col lg={2} md={2} xs={12}>
                        <div className={cx("logo")}>
                            <a href="#"
                            >
                                <Image src="/images/logo.png" width={110} height={40} alt="Logo" />
                            </a>
                        </div>
                        <div className={cx("search-top")}>
                            <div className={cx("top-search")}>
                                <a href="#0"><FontAwesomeIcon icon={faSearch} /></a>
                            </div>
                            <div className={cx("search-top")}>
                                <form className={cx("search-form")}>
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        name="search"
                                    />
                                    <button value="search" type="submit">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className={cx("mobile-nav")}></div>
                    </Col>
                    <Col lg={8} md={7} xs={12}>
                        <div className={cx("search-bar-top")}>
                            <div className={cx("search-bar")}>
                                <form method="POST" action="#">
                                    <Select className={cx('custom-select')} classNamePrefix="custom" options={options} placeholder="" autoFocus isSearchable />
                                    <input
                                        name="search"
                                        placeholder="Nhập tìm kiếm tại đây"
                                        type="search"
                                    />
                                    <button className={cx("btnn")} type="submit">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col lg={2} md={3} xs={12}>
                        <div className={cx("right-bar")}>
                            <Cart
                                iconName={faHeart}
                                count={1}
                                title={"View Wishlist"}
                                totalAmount={20000}

                            />
                            <Cart
                                iconName={faShoppingBag}
                                count={1}
                                title={"View Cart"}
                                totalAmount={20000}

                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderMiddle