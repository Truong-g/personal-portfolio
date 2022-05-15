
import classNames from "classnames/bind";
import styles from './portfoliomodal.module.css'

import {AiOutlineProject} from 'react-icons/ai'


var cx = classNames.bind(styles);

function PortFolioItem() {
    return (
        <li className={cx("portfolio-item")}>
            <span className={cx("portfolio-item-icon")}>
                <AiOutlineProject />
            </span>
            <span className={cx("portfolio-item-title")}>Name: </span>
            <span className={cx("portfolio-item-name")}>Sneakers Shop</span>
        </li>
    )
}

export default PortFolioItem