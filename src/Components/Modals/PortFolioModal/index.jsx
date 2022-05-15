import { memo } from "react";
import classNames from "classnames/bind";
import styles from './portfoliomodal.module.css'

import { FaTimes } from 'react-icons/fa'

import PortFolioItem from "./PortFolioItem";
import PortFolioSlider from "~/Components/Slider/PortFolioSlider";



var cx = classNames.bind(styles);


function PortFolioModal({ onClose }) {
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

                    <PortFolioItem />
                    <PortFolioItem />
                    <PortFolioItem />
                    <PortFolioItem />

                </ul>

                <PortFolioSlider />
            </div>
        </div>
    )
}

export default memo(PortFolioModal)