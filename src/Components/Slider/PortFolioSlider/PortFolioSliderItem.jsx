
import classNames from "classnames/bind";
import styles from './portfolioslider.module.css'


var cx = classNames.bind(styles);


function PortFolioSliderItem({img}) {


  return (
    <div
      className={cx("potfolio-image")}
      style={{ backgroundImage: `url(${img})` }}
    />
  )
}

export default PortFolioSliderItem