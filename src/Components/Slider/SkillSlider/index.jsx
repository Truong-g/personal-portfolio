import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classNames from "classnames/bind";
import styles from './skillslider.module.css'
import SkillSliderItem from "./SkillSliderItem";
import { useMemo } from "react";



var cx = classNames.bind(styles);

const SkillSlider = () => {
    const settings = useMemo(() => {
        return {
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,

                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,

                    }
                }
            ],
        }
    }, [])
    return (
        <div className={cx("skill-list")}>
            <Slider {...settings}>
                <div>
                    <SkillSliderItem />
                </div>
                <div>
                    <SkillSliderItem />
                </div>
                <div>
                    <SkillSliderItem />
                </div>
                <div>
                    <SkillSliderItem />
                </div>
                <div>
                    <SkillSliderItem />
                </div>
                <div>
                    <SkillSliderItem />
                </div>
            </Slider>
        </div>
    );
}

export default SkillSlider;
