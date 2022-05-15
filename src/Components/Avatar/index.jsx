import classNames from "classnames/bind";
import styles from './avatar.module.css'

var cx = classNames.bind(styles);

const Avatar = () => {
    return <div
        className={cx("img")}
        style={{
            backgroundImage: "url('https://tunis.ibthemespro.com/img/hero/dark.jpg')"
        }}
    />

}

export default Avatar;
