import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import classNames from "classnames/bind";
import styles from './contactpage.module.css'

import { HiLocationMarker } from 'react-icons/hi'
import { FaFacebookF } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si'
import { AiFillYoutube, AiFillPhone } from 'react-icons/ai'
import { CgMail } from 'react-icons/cg'






import DefaultLayout from "~/Components/Layouts/DefaultLayout";
import TitlePage from "~/Components/TitlePage";
import WrapperLaypout from "~/Components/Layouts/WrapperLayout";
import Button from "~/Components/Button";
import FormContact from "~/Components/Forms/FormContact";
import { ContextApi } from "~/GlobalStatesComponent/GlobalState";

var cx = classNames.bind(styles);

const ContactPage = () => {

    const { profile } = useContext(ContextApi)

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
                                            {profile?.address_detail}
                                        </p>
                                    </div>
                                </li>
                                <li className={cx("contact-item")}>
                                    <span className={`${cx("contact-infors-icon")} primary-text-color`}>
                                        <CgMail />
                                    </span>
                                    <div className={cx("contact-infors-content")}>
                                        <h3 className={cx("contact-infors-title")}>
                                            MAIL ME
                                        </h3>
                                        <a href={`mailto:${profile?.email}`} className={cx("contact-infors-name")}>
                                            {profile?.email}
                                        </a>
                                    </div>
                                </li>
                                <li className={cx("contact-item")}>
                                    <span className={`${cx("contact-infors-icon")} primary-text-color`}>
                                        <AiFillPhone />
                                    </span>
                                    <div className={cx("contact-infors-content")}>
                                        <h3 className={cx("contact-infors-title")}>
                                            PHONE ME
                                        </h3>
                                        <a href={`tel:${profile?.phone}`} className={cx("contact-infors-name")}>
                                            {profile?.phone}
                                        </a>
                                    </div>
                                </li>
                            </ul>

                            <ul className={cx("contact-socials")}>
                                <li className={cx("contact-socials-item")}>
                                    <Button
                                        size="small"
                                        icon={FaFacebookF}
                                        href="https://www.facebook.com/ngtuantruong30062k"
                                    />
                                </li>
                                <li className={cx("contact-socials-item")}>
                                    <Button
                                        size="small"
                                        icon={SiZalo}
                                        href="https://zalo.me/0383608951"
                                    />
                                </li>
                                <li className={cx("contact-socials-item")}>
                                    <Button
                                        size="small"
                                        icon={AiFillYoutube}
                                        href="https://youtube.com"
                                    />
                                </li>
                                <li className={cx("contact-socials-item")}>
                                    <Button
                                        size="small"
                                        icon={CgMail}
                                        href="mailto:ngtuantruong30062k@gmail.com"
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
