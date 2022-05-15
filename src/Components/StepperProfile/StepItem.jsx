import classNames from "classnames/bind";
import styles from './stepperprofile.module.css'

import { BsFillBagFill } from 'react-icons/bs'

var cx = classNames.bind(styles);

const StepItem = () => {
    return (
        <div className={cx("step-item")}>
            <span className={`${cx("step-item-icon")} primary-bg-color`}>
                <BsFillBagFill />
            </span>
            <div className={cx("step-item-time")}>
                <span>2013</span>
            </div>
            <h2 className={cx("step-item-title")}>
                WEB DEVELOPER - <span>ENVATO</span>
            </h2>
            <p className={cx("step-item-desc")}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, temporibus exercitationem commodi vero enim eaque eum.
            </p>
        </div>
    );
}

export default StepItem;
