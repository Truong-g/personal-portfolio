import classNames from "classnames/bind";
import styles from './blogmodal.module.css'

import { FaTimes } from 'react-icons/fa'
import { BsCalendar3, BsTagsFill } from 'react-icons/bs'
import { BiCategory } from 'react-icons/bi'


var cx = classNames.bind(styles);


function BlogModal({ onClose = () => { } }) {
    return (
        <div className={cx("blog-backdrop")}>
            <div className={cx("blog-modal")}>

                <button
                    onClick={() => onClose()}
                    className={`${cx("blog-close")} flex-center`}>
                    <FaTimes />
                </button>
                <div className={cx("blog-modal-content")}>
                    <h3 className={cx("blog-title")}>Post detail</h3>
                    <div className={cx("blog-nav")}>
                        <div className={cx("blog-nav-item")}>
                            <span className={`${cx("blog-nav-icon")} primary-text-color`}>
                                <BsCalendar3 />
                            </span>
                            <span className={cx("blog-nav-text")}>
                                20/7/2022
                            </span>
                        </div>
                        <div className={cx("blog-nav-item")}>
                            <span className={`${cx("blog-nav-icon")} primary-text-color`}>
                                <BiCategory />
                            </span>
                            <span className={cx("blog-nav-text")}>
                                Cam nan, meo, tin cong nghe
                            </span>
                        </div>
                        <div className={cx("blog-nav-item")}>
                            <span className={`${cx("blog-nav-icon")} primary-text-color`}>
                                <BsTagsFill />
                            </span>
                            <span className={cx("blog-nav-text")}>
                                React js, wordpress, java
                            </span>
                        </div>
                    </div>

                    <h1 className={cx("blog-content-title")}>
                        Top 10 Toolkits for Deep Learning in 2020 Learning in 2020
                    </h1>
                    <img
                        src="https://tunis.ibthemespro.com/img/blog/blog-post-2.jpg"
                        alt="img.jpg"
                        className={cx("blog-content-image")}
                    />
                    <div className={cx("blog-content-detail")}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

blog quote
Most photographers find it hard to see interesting pictures in places in which they are most familiar. A trip somewhere new seems always exactly what our photography needed, as shooting away from home consistently inspires us to new artistic heights.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BlogModal