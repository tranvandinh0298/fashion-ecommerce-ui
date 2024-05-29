import React from 'react'
import styles from './styles.module.css';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingBag, faRemove, IconDefinition } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

type Props = {
    iconName: IconDefinition;
    count: number;
    title: string;
    totalAmount: number;
}

const Cart = ({ iconName, count, title, totalAmount, ...props }: Props) => {
    return (
        <div className={cx("sinlge-bar", "shopping")}>
            <a href="#" className={cx("single-icon")}>
                <FontAwesomeIcon icon={iconName} />
                <span className={cx("total-count")}>{count}</span></a>
            <div className={cx("shopping-item")}>
                <div className={cx("dropdown-cart-header")}>
                    <span>{count} Item(s)</span>
                    <a href="#">{title}</a>
                </div>
                <ul className={cx("shopping-list")}>
                    <li>
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
                    </li>
                </ul>
                <div className={cx("bottom")}>
                    <div className={cx("total")}>
                        <span>Total</span>
                        <span className={cx("total-amount")}
                        >{totalAmount}</span>
                    </div>
                    <a href="#" className={cx("btn", "animate")}
                    >Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Cart