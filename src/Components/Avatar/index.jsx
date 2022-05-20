import { useContext } from "react";
import classNames from "classnames/bind";
import { ContextApi } from "~/GlobalStatesComponent/GlobalState";
import styles from './avatar.module.css'

var cx = classNames.bind(styles);

const Avatar = () => {
    const { profile } = useContext(ContextApi)

    return <div
        className={cx("img")}
        style={{
            backgroundImage: `url(${profile?.avatar})`
        }}
    />

}

export default Avatar;
