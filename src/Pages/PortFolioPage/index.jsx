import { useCallback, useEffect, useState } from "react";

import classNames from "classnames/bind";
import styles from './portfoliopage.module.css'

import navbar_items from '~/Data/JsonData/portfolio-routes.json'


import DefaultLayout from "~/Components/Layouts/DefaultLayout";
import TitlePage from "~/Components/TitlePage";
import Navbar from "~/Components/Navbar";

import WrapperLaypout from "~/Components/Layouts/WrapperLayout";
import HorizontalRestangleItem from "~/Components/RestangleItem/HorizontalRestangleItem";
import PortFolioModal from "~/Components/Modals/PortFolioModal";


var cx = classNames.bind(styles);

const PortFolioPage = () => {
    const [currentItem, setCurentItem] = useState("1")
    const [selectedItem, setSelectedItem] = useState("null")

    useEffect(() => {
        document.title = "Portfolio"
    }, [])


    const handleSetActive = useCallback((id) => {
        setCurentItem(id)
    }, [])

    const handleSetSelected = (id) => {
        setSelectedItem(id)
    }

    const handleCloseModal = useCallback(() => {
        setSelectedItem(null)
    }, [])

    return (
        <DefaultLayout>
            <div className={cx("container")}>
                <TitlePage firstTitle="My" secondTitle="PORTFOLIO" subTitle="works" />

                <WrapperLaypout>

                    <div className={cx("navbar")}>
                        <Navbar
                            activeItem={currentItem}
                            onActive={handleSetActive}
                            items={navbar_items}
                        />
                    </div>

                    <div className={cx("portfolios")}>
                        <HorizontalRestangleItem />
                        <HorizontalRestangleItem />
                        <HorizontalRestangleItem />
                        <HorizontalRestangleItem />
                        <HorizontalRestangleItem />
                        <HorizontalRestangleItem />
                        <HorizontalRestangleItem />
                        <HorizontalRestangleItem />

                    </div>
                </WrapperLaypout>

                {
                    !!selectedItem && (
                        <PortFolioModal onClose={handleCloseModal} />
                    )
                }


            </div>
        </DefaultLayout>
    );
}

export default PortFolioPage;
