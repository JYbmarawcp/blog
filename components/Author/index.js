import React from 'react';
import {Avatar, Divider} from 'antd'
import {GithubOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons'
import styles from './Author.module.css'

const Author = () => {
  return (
    <div className={styles.author_div+" comm_box"}>
      <div><Avatar size={100} src="https://blogimages.jspang.com/blogtouxiang1.jpg" /></div>
      <div className={styles.author_introduction}>
        因为美好的东西都是免费的，比如水、阳光和空气，所以本站视频全部免费。
        <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className={styles.account} />
        <Avatar size={28} icon={<QqOutlined />} className={styles.account} />
        <Avatar size={28} icon={<WechatOutlined />} className={styles.account} />
      </div>
    </div>
  )
}

export default Author