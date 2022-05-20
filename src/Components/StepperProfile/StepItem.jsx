import classNames from "classnames/bind";
import styles from './stepperprofile.module.css'

import { BsFillBagFill } from 'react-icons/bs'

var cx = classNames.bind(styles);

const StepItem = ({ data }) => {
    return (
        <div className={cx("step-item")}>
            <span className={`${cx("step-item-icon")} primary-bg-color`}>
                <BsFillBagFill />
            </span>
            <div className={cx("step-item-time")}>
                <span>{data?.date}</span>
            </div>
            <h2 className={cx("step-item-title")}>
                {data?.title} - <span>{data?.name}</span>
            </h2>
            <p className={cx("step-item-desc")}>
                {data?.description}
            </p>
        </div>
    );
}

export default StepItem;
