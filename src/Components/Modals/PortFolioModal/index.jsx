import { memo } from "react";
import classNames from "classnames/bind";
import styles from './portfoliomodal.module.css'

import { FaTimes } from 'react-icons/fa'
import { AiOutlineProject, AiFillGithub } from 'react-icons/ai'
import { CgCalendarDates } from 'react-icons/cg'
import { BsCodeSlash } from 'react-icons/bs'




import PortFolioSlider from "~/Components/Slider/PortFolioSlider";



var cx = classNames.bind(styles);


function PortFolioModal({ data, onClose }) {
    return (
        <div className={cx("portfolio-backdrop")}>
            <div className={cx("portfolio-modal")}>
                <button
                    onClick={() => onClose()}
                    className={`${cx("portfolio-close")} flex-center`}>
                    <FaTimes />
                </button>
                <h3 className={cx("portfolio-title")}>Infor Projects</h3>
                <ul className={cx("portfolio-infors")}>

                    <li className={cx("portfolio-item")}>
                        <span className={cx("portfolio-item-icon")}>
                            <AiOutlineProject />
                        </span>
                        <span className={cx("portfolio-item-title")}>Name: </span>
                        <span className={cx("portfolio-item-name")}>{data.name}</span>
                    </li>
                    <li className={cx("portfolio-item")}>
                        <span className={cx("portfolio-item-icon")}>
                            <CgCalendarDates />
                        </span>
                        <span className={cx("portfolio-item-title")}>Date: </span>
                        <span className={cx("portfolio-item-name")}>{`${data.start_date} - ${data.end_date}`}</span>
                    </li>
                    <li className={cx("portfolio-item")}>
                        <span className={cx("portfolio-item-icon")}>
                            <BsCodeSlash />
                        </span>
                        <div>
                            <span className={cx("portfolio-item-title")}>Technologies: </span>
                            <span className={cx("portfolio-item-name")}>
                                {
                                    data.technologies.map((tech, index, arr) => {
                                        return index === arr.length - 1 ? `${tech}.` : `${tech}, `
                                    })
                                }
                            </span>
                        </div>

                    </li>
                    <li className={cx("portfolio-item")}>
                        <span className={cx("portfolio-item-icon")}>
                            <AiFillGithub />
                        </span>
                        <span className={cx("portfolio-item-title")}>Source: </span>
                        <span className={cx("portfolio-item-name")}><a target="_blank" href={data.source}>Click here</a></span>
                    </li>

                </ul>

                <PortFolioSlider data={data.img} />

                <a href={data.demo} target="_blank" className={`${cx("portfolio-item-bottom-name")} primary-text-color`}>DEMO</a>
            </div>
        </div>
    )
}

export default memo(PortFolioModal)