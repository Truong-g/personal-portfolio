import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './homepage.module.css'

import {FaUserAlt} from 'react-icons/fa'

import DefaultLayout from "~/Components/DefaultLayout";
import Button from "~/Components/Button";

var cx = classNames.bind(styles);

const HomePage = () => {
    


    return (
        <DefaultLayout paddingNone={true}>
            <div className={cx("container")}>
                <div className={`${cx("block-color")} primary-bg-color`} />
                <div className={cx("wrapper")}>
                    <div className={cx("img-card")}>
                        <div className={cx("img")} style={{ backgroundImage: "url('https://tunis.ibthemespro.com/img/hero/dark.jpg')" }} />
                    </div>
                    <div className={cx("content-card")}>
                        <div className={cx("content")}>
                            <div className={cx("content-title")}>
                                <h1 className={`${cx("content-title-name")} primary-text-color`}>
                                    I'm Nguyen Tuan Truong
                                </h1>
                                <h1 className={cx("content-title-job")}>
                                    Web Developer
                                </h1>
                            </div>

                            <div className={`${cx("content-line")} primary-bg-color`} /> 

                            <div className={cx("content-desc")}>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur molestiae,
                                    alias, cum animi ipsam quibusdam rem itaque expedita, quos illum deserunt.
                                    Nulla veniam tenetur aperiam deserunt! Nulla, at ratione? Blanditiis.
                                </p>
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
