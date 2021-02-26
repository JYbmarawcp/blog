import React from 'react';
import styles from "./Advert.module.css"

const Advert = () => {
  return (
    <div className={styles.ad_div+" comm_box"}>
      <div><img src="https://newimg.jspang.com/kaikeba20201120.png" width="100%" /></div>
      <div><img src="https://blogimages.jspang.com/WechatIMG12.jpeg" width="100%" /></div>
    </div>
  )
}

export default Advert