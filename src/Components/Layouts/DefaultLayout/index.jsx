import { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

import './defaultlayout.css'

const DefaultLayout = ({ children }) => {


    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className="container">
            <div className={`wrapper`}
                data-aos-duration="1000"
                data-aos="fade-up">
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;
