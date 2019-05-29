/*
 * @Author: 52977890@qq.com 
 * @Date: 2019-05-29 10:26:47 
 * @Last Modified by:   wu529778790 
 * @Last Modified time: 2019-05-29 10:26:47 
 */

/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import './footer.scss'

class Footer extends React.Component {
  render () {
    return (
      <div className="footer">
        <div className="container">
          官方网站： <a href="https://shenzjd.com"target="_blank">神族九帝</a>&emsp;
          源码：<a href="https://github.com/wu529778790/shenzjd.com"target="_blank">Github</a>
        </div>
      </div>
    )
  }
}
export default Footer