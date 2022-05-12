
import classNames from "classnames/bind";
import DefaultLayout from "~/Components/DefaultLayout";
import styles from './aboutpage.module.css'

var cx = classNames.bind(styles);


const AboutPage = () => {
    return (
        <DefaultLayout>
            <div className={cx("container")}>
                About page
            </div>
        </DefaultLayout>
    );
}

export default AboutPage;
