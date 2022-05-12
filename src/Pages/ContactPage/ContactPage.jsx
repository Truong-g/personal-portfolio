
import classNames from "classnames/bind";
import styles from './contactpage.module.css'

import DefaultLayout from "~/Components/DefaultLayout";

var cx = classNames.bind(styles);

const ContactPage = () => {
    return (
        <DefaultLayout>
            <div className={cx("container")}>
                Contact page
            </div>
        </DefaultLayout>

    );
}

export default ContactPage;
