import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadphonesAlt, faSignInAlt, faTruck, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import classNames from 'classnames/bind';
import { Col, Container, Row } from 'react-bootstrap';

const cx = classNames.bind(styles);

const HeaderTop = () => {
    const isAuth = false;
    const isAdmin = true;
    return (
        <div className={cx('topbar')}>
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12}>
                        <div className={cx("top-left")}>
                            <ul className={cx("list-main")}>
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
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <div className={cx("right-content")}>
                            <ul className={cx("list-main")}>
                                {isAuth && (
                                    <>
                                        <li><FontAwesomeIcon icon={faTruck} /> <a href="#">Track Order</a></li>
                                        <li><FontAwesomeIcon icon={faUser} /> <a href="#" target="_blank">Dashboard</a></li>
                                    </>
                                )}

                                {!isAuth && (
                                    <li>
                                        <FontAwesomeIcon icon={faSignInAlt} />
                                        <a href="#">Login/</a>
                                        <a href="#">Register</a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeaderTop