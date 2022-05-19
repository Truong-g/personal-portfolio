import classNames from "classnames/bind";
import styles from './homepage.module.css'

import { useContext, useEffect } from "react";
import { FaUserAlt } from 'react-icons/fa'

import { ContextApi } from "~/GlobalStatesComponent/GlobalState";

import DefaultLayout from "~/Components/Layouts/DefaultLayout";
import Button from "~/Components/Button";
import Avatar from "~/Components/Avatar";


var cx = classNames.bind(styles);

const HomePage = () => {

    const { profile } = useContext(ContextApi)


    useEffect(() => {
        document.title = "Home"
    }, [])



    return (
        <DefaultLayout>
            <div className={cx("container")}>
                <div className={`${cx("block-color")} primary-bg-color`} />
                <div className={cx("wrapper")}>
                    <div className={cx("img-card")}>
                        <Avatar />
                    </div>
                    <div className={cx("content-card")}>
                        <div className={cx("content")}>
                            <div className={cx("content-title")}>
                                <h1 className={`${cx("content-title-name")} primary-text-color`}>
                                    I'm {profile?.fullname}
                                </h1>
                                <h1 className={cx("content-title-job")}>
                                    {profile?.job}
                                </h1>
                            </div>

                            <div className={`${cx("content-line")} primary-bg-color`} />

                            <div className={cx("content-desc")}>
                                <p>{profile?.description}</p>
                            </div>

                            <div className={cx("content-btn")}>
                                <Button icon={FaUserAlt} to="/about" title="more about me" type="solid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default HomePage;
