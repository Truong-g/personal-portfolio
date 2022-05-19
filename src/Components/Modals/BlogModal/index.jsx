import PropTypes from 'prop-types'

import classNames from "classnames/bind";
import styles from './blogmodal.module.css'

import { FaTimes } from 'react-icons/fa'
import { BsCalendar3, BsTagsFill } from 'react-icons/bs'
import { BiCategory } from 'react-icons/bi'
import { Fragment } from 'react';


var cx = classNames.bind(styles);


function BlogModal({ data, onClose = () => { } }) {
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
                                {data.created_at}
                            </span>
                        </div>
                        <div className={cx("blog-nav-item")}>
                            <span className={`${cx("blog-nav-icon")} primary-text-color`}>
                                <BiCategory />
                            </span>
                            <span className={cx("blog-nav-text")}>
                                {
                                    data.categories.map((cat, index, arrCurr) => {
                                        return (
                                            <Fragment key={index}>
                                                {index === arrCurr.length - 1 ? cat + ". " : cat + ", "}
                                            </Fragment>
                                        )
                                    })
                                }

                            </span>
                        </div>
                        <div className={cx("blog-nav-item")}>
                            <span className={`${cx("blog-nav-icon")} primary-text-color`}>
                                <BsTagsFill />
                            </span>
                            <span className={cx("blog-nav-text")}>
                                {
                                    data.tags.map((tag, index, arrCurr) => {
                                        return (
                                            <Fragment key={index}>
                                                {index === arrCurr.length - 1 ? tag + ". " : tag + ", "}
                                            </Fragment>
                                        )
                                    })
                                }

                            </span>
                        </div>
                    </div>

                    <h1 className={cx("blog-content-title")}>
                        {
                            data.title
                        }
                    </h1>
                    <img
                        src={data.img}
                        alt="img.jpg"
                        className={cx("blog-content-image")}
                    />
                    <div className={cx("blog-content-detail")} dangerouslySetInnerHTML={{ __html: data.long_description }} />
                </div>

            </div>
        </div>
    )
}


BlogModal.propTypes = {
    data: PropTypes.object
}

BlogModal.defaultProps = {
    data: {
        title: "",
        categories: [],
        tags: [],
        created_at: "",
        short_description: "",
        img: "",
        long_description: "<p>No content</p>"
    }
}


export default BlogModal