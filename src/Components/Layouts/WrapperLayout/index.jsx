
import classNames from "classnames/bind";
import styles from './wrapperlayout.module.css'

var cx = classNames.bind(styles);


const WrapperLaypout = ({children}) => {
    return (
        <div className={cx("container")}>
            {children}
        </div>
    );
}

export default WrapperLaypout;
