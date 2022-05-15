import classNames from "classnames/bind";
import styles from './titlepage.module.css'

var cx = classNames.bind(styles);

const TitlePage = ({ firstTitle = "", secondTitle = "", subTitle = "", disbalePadding = false }) => {
    return (
        <div className={cx("wrapper", disbalePadding ? "padding-none" : "")}>
            <h1 className={cx("main-title-page")}>
                {firstTitle} <span className="primary-text-color">{secondTitle}</span>
            </h1>
            {
                subTitle && (
                    <span className={cx("sub-title-page")}>{subTitle}</span>
                )
            }
        </div>
    );
}

export default TitlePage;
