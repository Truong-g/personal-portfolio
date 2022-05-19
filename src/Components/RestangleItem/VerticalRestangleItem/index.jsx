import { memo } from 'react';
import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './verticalRestangleItem.module.css'


var cx = classNames.bind(styles);

function VerticalRestangleItem({data}) {
    return (
        <div className={cx("item")}>

            <div className={cx("item-image")}>
                <div
                    className={cx("image")}
                    style={{ backgroundImage: `url(${data.img})` }}
                />
            </div>
            <div className={cx("item-content")}>
                <h3 className={cx("item-content-title")}>
                   {data.title}
                </h3>
                <p className={cx("item-content-desc")}>
                    {
                        data.short_description
                    }
                </p>
            </div>
        </div>
    )
}


VerticalRestangleItem.propTypes = {
    data: PropTypes.object
}

VerticalRestangleItem.defaultProps = {
    data: {
        img: "",
        title: "",
        short_description: ""
    }
}


export default memo(VerticalRestangleItem)