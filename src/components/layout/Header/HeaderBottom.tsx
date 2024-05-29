import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import classNames from 'classnames/bind';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';

const cx = classNames.bind(styles);

const HeaderBottom = () => {
    return (
        <div className={cx("header-inner")}>
            <Container>
                <div className={cx("cat-nav-head")}>
                    <Row>
                        <Col lg={12} xs={12}>
                            <div className={cx("menu-area")}>
                                <Navbar expand="lg" sticky="top">
                                    <Navbar.Collapse>
                                        <div className={cx("nav-inner")}>
                                            <Nav className={cx("nav", "main-menu", "menu")}>
                                                <li className="active">
                                                    <a href="#">Home</a>
                                                </li>
                                                <li className="">
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li className="">
                                                    <a
                                                        href="#"
                                                    >Products</a><span className={cx("new")}
                                                    >New</span>
                                                </li>
                                                <li>
                                                    <a
                                                        href="javascript:void(0);"
                                                    >Category
                                                        <FontAwesomeIcon icon={faAngleDown} />
                                                    </a>
                                                    <ul
                                                        className={cx("dropdown", "border-0" ,"shadow")}
                                                    >
                                                        <li>
                                                            <a href="#"
                                                            >Thời
                                                                trang</a>
                                                            <ul
                                                                className={cx("dropdown", "sub-dropdown", "border-0", "shadow")}
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
                                                        href="#"
                                                    >Contact Us</a>
                                                </li>
                                            </Nav>
                                        </div>
                                    </Navbar.Collapse>
                                </Navbar>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default HeaderBottom