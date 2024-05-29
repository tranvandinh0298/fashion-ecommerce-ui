import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SmallProduct = () => {
    return (
        <div>
            <a
                href="#"
                className={cx("remove")}
                title="Remove this item"
            >
                <FontAwesomeIcon icon={faRemove} />
            </a>
            <a className={cx("cart-img")} href="#"
            >
                <img src="https://t4.ftcdn.net/jpg/05/17/53/57/360_F_517535712_q7f9QC9X6TQxWi6xYZZbMmw5cnLMr279.jpg" alt="#" />
            </a>
            <h4>
                <a href="#" target="_blank"
                >Áo khoác</a>
            </h4>
            <p className={cx("quantity")}>
                1 x -
                <span className={cx("amount")}
                >10,000</span>
            </p>
        </div>
    )
}

export default SmallProduct