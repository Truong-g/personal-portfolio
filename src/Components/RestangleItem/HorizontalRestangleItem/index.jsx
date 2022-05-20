import classNames from "classnames/bind";
import styles from './horizontalrestangleitem.module.css'


var cx = classNames.bind(styles);

function HorizontalRestangleItem({data}) {
    return (
        <div
            className={cx("item-restangle")}
            style={{ backgroundImage: `url(${data.img[0]})` }}
        >
            <div className={`${cx("item-restangle-bg")} primary-bg-color`}>
                <h3 className={cx("item-restangle-title")}>{data.name}</h3>
            </div>
        </div>
    )
}

export default HorizontalRestangleItem