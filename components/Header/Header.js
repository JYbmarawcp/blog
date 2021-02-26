import React from 'react';
import styles from './Header.module.css'
import {Row, Col, Menu, Icon} from 'antd'
import {HomeOutlined, YoutubeOutlined, SmileOutlined} from '@ant-design/icons'

const Header = () => {
  return (
    <div className={styles.header}>
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12} className={styles.header_left}>
          <span className={styles.header_logo}>技术派</span>
          <span className={styles.header_txt}>专注前端开发，每年100集免费视频</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <HomeOutlined />
              首页
            </Menu.Item>
            <Menu.Item key="video">
              <YoutubeOutlined />
              视频
            </Menu.Item>
            <Menu.Item key="life">
              <SmileOutlined />
              生活
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header