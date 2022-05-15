import classNames from "classnames/bind";
import styles from './stepperprofile.module.css'


import StepItem from "./StepItem";

var cx = classNames.bind(styles);

const StepItems = () => {
    return (
        <div className={cx("container")}>
            <StepItem />
            <StepItem />
            <StepItem />
            <StepItem />

        </div>
    );
}

export default StepItems;
