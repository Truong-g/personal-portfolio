
import { memo } from "react";
import classNames from "classnames/bind";
import styles from './navbar.module.css'

var cx = classNames.bind(styles);


 function Navbar({activeItem, onActive, items = [] }) {

    return (
        <ul className={`${cx("navbar-list")} hide-scroll`}>
            {
                items.map((item, index) => {
                    return (
                        <li className={cx("navbar-item")} key={index}>
                            <button
                                onClick={() => onActive(item.id)}
                                className={cx(activeItem === item.id ? "active" : "")}>{item.title}</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default memo(Navbar)
