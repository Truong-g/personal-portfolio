import { useEffect } from "react";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './contactpage.module.css'

import { HiLocationMarker } from 'react-icons/hi'
import { FaFacebookF } from 'react-icons/fa'


import DefaultLayout from "~/Components/Layouts/DefaultLayout";
import TitlePage from "~/Components/TitlePage";
import WrapperLaypout from "~/Components/Layouts/WrapperLayout";
import Button from "~/Components/Button";
import FormContact from "~/Components/Forms/FormContact";

var cx = classNames.bind(styles);

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact"
    }, [])
    return (
        <DefaultLayout>
            <div className={cx("container")}>
                <TitlePage firstTitle="GET IN" secondTitle="TOUCH" subTitle="CONTACT" />
                <WrapperLaypout>
                    <div className={cx("wrapper")}>
                        <div className={cx("col-left")}>
                            <h1 className={cx("title")}>
                                Don't be shy!
                            </h1>
                            <p className={cx("description")}>
                                Feel free to get in touch with me.
                                I am always open to discussing new projects,
                                creative ideas or opportunities to be part of your visions.
                            </p>
                            <ul className={cx("contact-infors")}>
                                <li className={cx("contact-item")}>
                                    <span className={`${cx("contact-infors-icon")} primary-text-color`}>
                                        <HiLocationMarker />
                                    </span>
                                    <div className={cx("contact-infors-content")}>
                                        <h3 className={cx("contact-infors-title")}>
                                            ADDRESS POINT
                                        </h3>
                                        <p className={cx("contact-infors-name")}>
                                            123 Stree New York City , United States Of America 750065.
                                        </p>
                                    </div>
                                </li>
                                <li className={cx("contact-item")}>
                                    <span className={`${cx("contact-infors-icon")} primary-text-color`}>
                                        <HiLocationMarker />
                                    </span>
                                    <div className={cx("contact-infors-content")}>
                                        <h3 className={cx("contact-infors-title")}>
                                            ADDRESS POINT
                                        </h3>
                                        <Link to="" className={cx("contact-infors-name")}>
                                            123 Stree New York City , United States Of America 750065.
                                        </Link>
                                    </div>
                                </li>
                                <li className={cx("contact-item")}>
                                    <span className={`${cx("contact-infors-icon")} primary-text-color`}>
                                        <HiLocationMarker />
                                    </span>
                                    <div className={cx("contact-infors-content")}>
                                        <h3 className={cx("contact-infors-title")}>
                                            ADDRESS POINT
                                        </h3>
                                        <Link to="" className={cx("contact-infors-name")}>
                                            123 Stree New York City , United States Of America 750065.
                                        </Link>
                                    </div>
                                </li>
                            </ul>

                            <ul className={cx("contact-socials")}>
                                <li className={cx("contact-socials-item")}>
                                    <Button
                                        size="small"
                                        icon={FaFacebookF}
                                        href="https://facebook.com"
                                    />
                                </li>
                                <li className={cx("contact-socials-item")}>
                                    <Button
                                        size="small"
                                        icon={FaFacebookF}
                                        href="https://facebook.com"
                                    />
                                </li>
                                <li className={cx("contact-socials-item")}>
                                    <Button
                                        size="small"
                                        icon={FaFacebookF}
                                        href="https://facebook.com"
                                    />
                                </li>
                                <li className={cx("contact-socials-item")}>
                                    <Button
                                        size="small"
                                        icon={FaFacebookF}
                                        href="https://facebook.com"
                                    />
                                </li>
                            </ul>
                        </div>
                        <div className={cx("col-right")}>
                            <FormContact />
                        </div>

                    </div>
                </WrapperLaypout>

            </div>
        </DefaultLayout>

    );
}

export default ContactPage;
