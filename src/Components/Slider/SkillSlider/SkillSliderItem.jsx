
import { RiReactjsLine } from 'react-icons/ri';

import classNames from "classnames/bind";
import styles from './skillslider.module.css'

var cx = classNames.bind(styles);

const SkillSliderItem = () => {
    return (
        <div className={cx("skill-item")}>
            <span className={cx("skill-item-icon")}>
                <RiReactjsLine />
            </span>
            <div className={cx("skill-item-contents")}>
                <h2 className={cx("skill-item-name")}>REACT JS</h2>
                <p className={cx("skill-item-desc")}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                    mollitia ullam ipsum repellendus possimus porro nulla cupiditate.
                    Minus qui ut aperiam natus perferendis mollitia officiis illo.
                    Quas iure adipisci dolore?
                </p>

            </div>
        </div>
    );
}

export default SkillSliderItem;
