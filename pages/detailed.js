import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Row, Col } from 'antd'
import Header from "../components/Header/Header"

export default function Detailed() {
  return (
    <div>
      <Head>
        <title>List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Row className={styles.comm_main} type="flex" justify="center">
        <Col className={styles.comm_left} xs={24} sm={24} md={16} lg={18} xl={14}>
          左侧
        </Col>
        <Col className={styles.comm_right} xs={0} sm={0} md={7} lg={5} xl={4}>
          右侧
        </Col>
      </Row>
    </div>
  )
}
