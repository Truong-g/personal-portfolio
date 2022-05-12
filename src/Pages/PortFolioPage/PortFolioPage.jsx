

import classNames from "classnames/bind";
import styles from './portfoliopage.module.css'

import DefaultLayout from "~/Components/DefaultLayout";

var cx = classNames.bind(styles);

const PortFolioPage = () => {
    return (
        <DefaultLayout>
            <div className={cx("container")}>
                Contact page
            </div>
        </DefaultLayout>
    );
}

export default PortFolioPage;
