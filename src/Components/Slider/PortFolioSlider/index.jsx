import { useMemo, useRef } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs'


import classNames from "classnames/bind";
import styles from './portfolioslider.module.css'
import PortFolioSliderItem from "./PortFolioSliderItem";


var cx = classNames.bind(styles);



function PortFolioSlider() {
    const sliderRef = useRef()
    const settings = useMemo(() => {
        return {
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: false,
            slidesToShow: 1,
        }
    }, [])

    const handleLeftBtn = () => {
        sliderRef.current?.slickPrev()
    }

    const handleRightBtn = () => {
        sliderRef.current?.slickNext()
    }



    return (
        <div className={cx("potfolio-list")}>
            <Slider ref={sliderRef}  {...settings}>
                <div>
                    <PortFolioSliderItem />
                </div>
                <div>
                    <PortFolioSliderItem />
                </div>
                <div>
                    <PortFolioSliderItem />
                </div>
                <div>
                    <PortFolioSliderItem />
                </div>
            </Slider>
            <button
                onClick={handleLeftBtn}
                className={`${cx("potfolio-btn-left")} primary-bg-color`}>
                <BsFillCaretLeftFill />
            </button>
            <button
                onClick={handleRightBtn}
                className={`${cx("potfolio-btn-right")} primary-bg-color`}>
                <BsFillCaretRightFill />
            </button>
        </div>
    )
}

export default PortFolioSlider