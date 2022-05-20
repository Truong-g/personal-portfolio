import { useContext, useEffect } from "react";

import classNames from "classnames/bind";
import styles from './aboutpage.module.css'

import { FaDownload } from 'react-icons/fa'

import DefaultLayout from "~/Components/Layouts/DefaultLayout";
import TitlePage from "~/Components/TitlePage";
import WrapperLaypout from "~/Components/Layouts/WrapperLayout";
import Button from "~/Components/Button";
import BoxStatItem from "~/Components/BoxStatItem";
import SkillSlider from "~/Components/Slider/SkillSlider";
import StepItems from "~/Components/StepperProfile";
import Avatar from "~/Components/Avatar";

import { ContextApi } from "~/GlobalStatesComponent/GlobalState";

import stats from '~/dummyData/stats.json'
import { Link } from "react-router-dom";


var cx = classNames.bind(styles);

const AboutPage = () => {

    const { profile } = useContext(ContextApi)


    useEffect(() => {
        document.title = "About"
    }, [])

    return (
        <DefaultLayout>
            <div className={cx("container")}>
                <TitlePage firstTitle="About" secondTitle="me" subTitle="resume" />
                <div className={cx("avatar")}>
                    <Avatar />
                </div>
                <WrapperLaypout>
                    <div data-src="https://caferati.me/images/series/bojack-0.png"></div>
                    <div className={cx("wrapper")}>
                        <div className={cx("col-left")}>
                            <h1 className={cx("title")}>
                                PERSONAL INFOS
                            </h1>
                            <div className={cx("profile")}>
                                <ul className={cx("profile-list-left")}>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>First name:</span> <span>{profile?.firstname}</span></li>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>Age:</span> <span>{profile?.age}</span></li>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>Job:</span> <span>{profile?.job}</span></li>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>Phone:</span> <span>{profile?.phone}</span></li>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>Hobbies:</span> <span>{profile?.hobbies}</span></li>
                                </ul>
                                <ul className={cx("profile-list-right")}>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>Last name:</span> <span>{profile?.lastname}</span></li>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>Nationlity:</span> <span>{profile?.nationality}</span></li>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>Address:</span> <span>{profile?.address}</span></li>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>Languages:</span> <span>{profile?.languages}</span></li>
                                    <li className={cx("profile-item")}><span className={cx("profile-item-name")}>School:</span> <span>{profile?.school}</span></li>
                                </ul>
                            </div>
                            <div className={cx("profile-download-cv-btn")}>
                                <Link
                                    to="/assets/cv/TUAN-TRUONG-NGUYEN.pdf"
                                    download
                                    target="_blank"
                                >
                                    <Button title="Download cv" icon={FaDownload} type="solid" />
                                </Link>
                            </div>
                        </div>
                        <div className={cx("col-right")}>
                            <div className={cx("box-stat-list")}>
                                {
                                    stats.map(stat => (
                                        <BoxStatItem key={stat.id} data={stat} />
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                    <div className={cx("sperator")} />

                    <h1 className={cx("title-skill")}>my skill</h1>

                    <div className={cx("title-skill-box")}>
                        <SkillSlider />
                    </div>

                    <h1 className={cx("title-skill")}>{`Experence & education`}</h1>

                    <div className={cx("title-skill-box", "exp")}>
                        <StepItems />
                    </div>

                </WrapperLaypout>

            </div>
        </DefaultLayout>
    );
}

export default AboutPage;
