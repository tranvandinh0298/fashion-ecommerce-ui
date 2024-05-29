"use client";

import React from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faSignIn, faSignInAlt, faHeadphonesAlt, faEnvelope, faRemove } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const options = [
    { value: 'all', label: 'Tất cả' },
    { value: 'shirt', label: 'Áo' },
    { value: 'pant', label: 'Quần' },
    { value: 'underwear', label: 'Đồ lót' },
    { value: 'watch', label: 'Đồng hồ' },
];

const Header = () => {
    return (
        <header className={cx("header", "shop")}>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </header>
    )
}

export default Header;