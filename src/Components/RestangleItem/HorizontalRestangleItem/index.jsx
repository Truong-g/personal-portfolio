import classNames from "classnames/bind";
import styles from './horizontalrestangleitem.module.css'


var cx = classNames.bind(styles);

function HorizontalRestangleItem() {
    return (
        <div
            className={cx("item-restangle")}
            style={{ backgroundImage: `url("https://tunis.ibthemespro.com/img/projects/project-1.jpg")` }}
        >
            <div className={`${cx("item-restangle-bg")} primary-bg-color`}>
                <h3 className={cx("item-restangle-title")}>SNEAKERS SHOP</h3>
            </div>
        </div>
    )
}

export default HorizontalRestangleItem