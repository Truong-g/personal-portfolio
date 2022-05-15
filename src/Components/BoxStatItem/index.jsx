import classNames from "classnames/bind";
import styles from './boxstatitem.module.css'

import { HiPlusSm } from 'react-icons/hi'


var cx = classNames.bind(styles);


const BoxStatItem = () => {
    return (
        <div className={cx("box-stat-item")}>
            <h3 className={`${cx("box-stat-title")} primary-text-color`}>
                6
                <HiPlusSm className={cx("box-stat-title-icon")} fontWeight={700} size={30} />
            </h3>
            <p className={cx("box-stat-desc")}>
                months OF EXPERIENCE
            </p>
        </div>
    );
}

export default BoxStatItem;
