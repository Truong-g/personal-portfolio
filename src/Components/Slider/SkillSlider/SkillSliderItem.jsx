

import classNames from "classnames/bind";
import styles from './skillslider.module.css'
import selectedIcon from '~/dummyData/skill-icons';

var cx = classNames.bind(styles);

const SkillSliderItem = ({ data }) => {



    const IconComponent = selectedIcon(data.slug)

    return (
        <div className={cx("skill-item")}>
            <span className={cx("skill-item-icon")}>
                <IconComponent />
            </span>
            <div className={cx("skill-item-contents")}>
                <h2 className={cx("skill-item-name")}>{data.name}</h2>
                <p className={cx("skill-item-desc")}>
                    {data.description}
                </p>

            </div>
        </div>
    );
}

export default SkillSliderItem;
