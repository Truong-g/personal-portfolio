
import classNames from "classnames/bind";
import styles from './menu.module.css'



import Button from "~/Components/Button";

import routes from "~/Data/JavascriptData/routes";


var cx = classNames.bind(styles);


const Menu = ({path}) => {
    return (
        <div className={cx('container')}>

            <ul className={cx("navbar-list")}>
                {
                    routes.map((route, index) => {
                        return (
                            <li className={cx("navbar-item")} key={index}>
                                <Button icon={route.icon} to={route.to} title={route.title} isActive={path === route.to} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Menu;
