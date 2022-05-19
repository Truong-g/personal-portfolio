import { useCallback, useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from './blogpage.module.css'

import DefaultLayout from "~/Components/Layouts/DefaultLayout"
import TitlePage from "~/Components/TitlePage";
import WrapperLaypout from "~/Components/Layouts/WrapperLayout";
import VerticalRestangleItem from "~/Components/RestangleItem/VerticalRestangleItem";
import BlogModal from "~/Components/Modals/BlogModal";
import blogs from '~/dummyData/blogs.json'



var cx = classNames.bind(styles);

function BlogPage() {
    const [detailPost, setDetailPost] = useState(null)


    useEffect(() => {
        document.title = "Blog"
    }, [])

    const handleSelectItem = (id) => {
        const data = blogs.find(item => item.id === id)
        setDetailPost(data)
    }

    const handleCloseModal = useCallback(() => {
        setDetailPost(null)
    }, [])

    return (
        <DefaultLayout>
            <div className={cx("container")}>
                <TitlePage firstTitle="my" secondTitle="BLOG" subTitle="posts" />
                <WrapperLaypout>
                    <div className={cx("list")}>
                        {
                            blogs.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleSelectItem(item.id)}>
                                    <VerticalRestangleItem data={item} />
                                </div>
                            ))
                        }
                    </div>
                </WrapperLaypout>

                {
                    !!detailPost && <BlogModal data={detailPost} onClose={handleCloseModal} />
                }


            </div>
        </DefaultLayout>
    )
}

export default BlogPage