
import classNames from "classnames/bind";
import styles from './portfolioslider.module.css'


var cx = classNames.bind(styles);


function PortFolioSliderItem() {
  return (
    <div
      className={cx("potfolio-image")}
      style={{ backgroundImage: "url('https://tunis.ibthemespro.com/img/projects/project-1.jpg')" }}
    />
  )
}

export default PortFolioSliderItem