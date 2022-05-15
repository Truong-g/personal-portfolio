import classNames from "classnames/bind";
import styles from './verticalRestangleItem.module.css'


var cx = classNames.bind(styles);

function VerticalRestangleItem() {
    return (
        <div className={cx("item")}>

            <div className={cx("item-image")}>
                <div
                    className={cx("image")}
                    style={{ backgroundImage: `url("https://tunis.ibthemespro.com/img/blog/blog-post-1.jpg")` }}
                />
            </div>
            <div className={cx("item-content")}>
                <h3 className={cx("item-content-title")}>
                    How to Own Your Audience by Creating an Email List,
                    How to Own Your Audience by Creating an Email List
                </h3>
                <p className={cx("item-content-desc")}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nesciunt atque rem fuga laudantium dolorem modi suscipit deleniti tempora,
                    doloremque explicabo in? A commodi repellat incidunt culpa ullam accusamus,
                    exercitationem voluptas.
                </p>
            </div>
        </div>
    )
}

export default VerticalRestangleItem