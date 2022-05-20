import classNames from "classnames/bind";
import styles from './stepperprofile.module.css'

import steppers from '~/dummyData/milestones.json'


import StepItem from "./StepItem";

var cx = classNames.bind(styles);

const StepItems = () => {
    return (
        <div className={cx("container")}>
            {
                steppers.map(step => (
                    <StepItem data={step} key={step.id} />
                ))
            }
        </div>
    );
}

export default StepItems;
