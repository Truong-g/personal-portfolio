import { useEffect } from "react";
import classNames from "classnames/bind";
import styles from './blogpage.module.css'

import DefaultLayout from "~/Components/Layouts/DefaultLayout"
import TitlePage from "~/Components/TitlePage";
import WrapperLaypout from "~/Components/Layouts/WrapperLayout";
import VerticalRestangleItem from "~/Components/RestangleItem/VerticalRestangleItem";
import BlogModal from "~/Components/Modals/BlogModal";



var cx = classNames.bind(styles);

function BlogPage() {

    useEffect(() => {
        document.title = "Blog"
    }, [])

    return (
        <DefaultLayout>
            <div className={cx("container")}>
                <TitlePage firstTitle="my" secondTitle="BLOG" subTitle="posts" />
                <WrapperLaypout>
                    <div className={cx("list")}>
                        <VerticalRestangleItem />
                        <VerticalRestangleItem />
                        <VerticalRestangleItem />
                        <VerticalRestangleItem />
                        <VerticalRestangleItem />
                        <VerticalRestangleItem />

                    </div>
                </WrapperLaypout>

                <BlogModal />

            </div>
        </DefaultLayout>
    )
}

export default BlogPage