import Head from 'next/head'
import styles from '../styles/Home.module.css'
import style from '../styles/Detailed.module.css'
import { Row, Col, Breadcrumb, Affix } from 'antd'
import {CalendarOutlined, FolderOutlined, FireOutlined} from '@ant-design/icons'
import Header from "../components/Header/Header"
import Author from "../components/Author"
import Advert from "../components/Advert"
import Footer from "../components/Footer"
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'
import axios from 'axios'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'

import Tocify from '../components/tocify.tsx'

const Detailed = (props) => {

  const tocify = new Tocify()
  const renderer = new marked.Renderer()

  // ### jspang
  renderer.heading = function(text, level, raw) {
    const anchor = tocify.add(text, level)
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`
  }

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    highlight: function(code) {
      return hljs.highlightAuto(code).value
    }
  })

  let html = marked(props.article_content)

  return (
    <div>
      <Head>
        <title>Detailed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Row className={styles.comm_main} type="flex" justify="center">
        <Col className={styles.comm_left} xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <div className={style.bread_div}>
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                <Breadcrumb.Item><a href="/">XXXXX</a></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div>
              <div className={style.detailed_title}>
                React实战视频教程-Blog开发
              </div>
              <div className={styles.list_icon + " " + style.center}>
                  <span><CalendarOutlined /> {props.addTime}</span>
                  <span><FolderOutlined /> {props.typeName}</span>
                  <span><FireOutlined /> {props.view_count}</span>
              </div>
              <div className={style.detailed_content} 
                dangerouslySetInnerHTML={{__html: html}}
              >
              </div>
            </div>
          </div>
        </Col>
        <Col className={styles.comm_right} xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className={styles.comm_box}>
              <div className={style.nav_title}>文章目录</div>
              {tocify && tocify.render()}
            </div>      
          </Affix>
        </Col>
      </Row>
      
      <Footer />
    </div>
  )
}

Detailed.getInitialProps = async (context) => {
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/default/getArticleById/' + id).then(res => {
      resolve(res.data.data[0])
    })
  })
  return await promise
}

export default Detailed