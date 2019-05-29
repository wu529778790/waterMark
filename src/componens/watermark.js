/*
 * @Author: 52977890@qq.com 
 * @Date: 2019-05-29 10:26:31 
 * @Last Modified by:   wu529778790 
 * @Last Modified time: 2019-05-29 10:26:31 
 */

import React from 'react'
import './watermark.scss'

class Watermark extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      waterValue: '此证件仅供办理XX业务使用，他用无效',
      waterinputFocus: false,
      imgUrl: 'https://ws1.sinaimg.cn/large/007DE5Hlgy1g3hy90jdjkj30ic0bcaig.jpg',
      imgShow: true,
      waterColor: '#000000',
      waterFont: '10',
      clearance: '100'
    }
  }
  componentDidUpdate(){
    this.addWaterMark()
  }
  // 改变input输入
  handleChange = (event) => {
    if (this.state.imgShow) {
      alert('请先选择图片')
    } else {
      this.setState({
        waterValue: event.target.value
      })
    }
  }
  // 聚焦改变input颜色
  focusChange = () => {
    this.setState({
      waterinputFocus: true
    })
  }
  // 失焦改变input颜色
  blurChange = () => {
    this.setState({
      waterinputFocus: false
    })
  }
  // 监听颜色变化
  colorChange = (event) => {
    event.preventDefault()
    if (this.state.imgShow) {
      alert('请先选择图片')
    } else {
      this.setState({
        waterColor: event.target.value
      })
    }
  }
  // 监听字体大小变化
  fontChange = (event) => {
    if (this.state.imgShow) {
      alert('请先选择图片')
    } else {
      this.setState({
        waterFont: event.target.value
      })
    }
  }
  // 监听文字间隙变化
  clearanceChange = (event) => {
    if (this.state.imgShow) {
      alert('请先选择图片')
    } else {
      this.setState({
        clearance: event.target.value
      })
    }
  }
  //inputchange事件
  inputChange = (event) => {
    let reads = new FileReader()
    let file = event.target.files[0]
    reads.readAsDataURL(file)
    reads.onload = e => {
      this.setState({
        imgUrl: e.target.result,
        imgShow: false
      })
      let img = new Image()
      img.src = e.target.result
      img.onload = () => {
        this.addWaterMark()
      }
    }
  }
  // 添加水印
  addWaterMark = () => {
    const {waterColor,waterFont,clearance,waterValue} = this.state
    let img = document.getElementById('img')
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let ox = canvas.width / 2
    let oy = canvas.height / 2
    canvas.width = img.width
    canvas.height = img.height
    // 原图
    ctx.drawImage(img, 0, 0)
    ctx.save()
    // 旋转图
    ctx.translate(ox, oy) // 将绘图圆点移到画布中点
    ctx.rotate(45 * Math.PI/180) //弧度 = (Math.PI/180)*角度
    ctx.translate(-ox, -oy)
    // // 创建渐变
    // var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
    // gradient.addColorStop("0","magenta");
    // gradient.addColorStop("0.5","blue");
    // gradient.addColorStop("1.0","red");
    // // 用渐变填色
    // ctx.fillStyle=gradient;
    ctx.fillStyle = waterColor
    ctx.font = `${waterFont}px Georgia`
    for (let a = -img.width / clearance; a < img.width / clearance; a++) {
      for (let b = -img.height / clearance; b < img.height / clearance * 2; b++) {
        ctx.fillText(waterValue, a * clearance * 2, 10 + b * clearance)
      }
    }
    ctx.restore()
  }
  // 保存图片
  saveImg = (event) => {
    if (this.state.imgShow) {
      alert('请先选择图片')
      event.preventDefault()
    } else {
      let canvas = document.getElementById('canvas')
      let strDataURI = canvas.toDataURL('image/png')
      let a = document.getElementById('saveimg')
      a.href = strDataURI
    }
  }
  render () {
    let { waterValue,waterinputFocus,imgUrl,imgShow,waterColor,waterFont,clearance } = this.state
    return (
      <div className="watermark">
        <div className="header">
          <label htmlFor="waterValue"
          className="waterLabel">水印文字</label>
          <input type="text" value={waterValue} id="waterValue"
            onFocus={this.focusChange}
            onBlur={this.blurChange}
            className={ `waterinput ${waterinputFocus ? 'active' : ''}`}
            onChange={this.handleChange}/>
          <div className="selectImg">
            <input type="file" id="inputimg"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            onChange={this.inputChange}/>
            <label className="labelimg" htmlFor="inputimg">选择图片</label>
          </div>
          <div className="saveImg"
            onClick={this.saveImg}>
            <a href={{javascript:void(0)}} 
            id="saveimg" 
            download="shenzjd_com.png">保存图片</a>
          </div>
        </div>
        <div className="config">
          <div className="waterColor">
            <label htmlFor="waterColor">水印颜色(点我选择水印颜色)：</label>
            <input value={waterColor} type="color"
            id="waterColor"
            onChange={this.colorChange}/>
          </div>
          <div className="waterFont">
            <label htmlFor="waterFont">字体大小：</label>
            <input type="number" id="waterFont"
             onChange={this.fontChange}
             value={waterFont}/>px
          </div>
          <div className="clearance">
            <label htmlFor="clearance">文字间隙：</label>
            <input type="number" id="clearance"
            onChange={this.clearanceChange}
            value={clearance}/>px
          </div>
        </div>
        <div className="container">
          <img src={imgUrl} alt="" id="img"
          className={imgShow ? '' : 'none'}/>
          <canvas id="canvas"
          className={imgShow ? 'none' : ''}
          width="1000px" height="700px"></canvas>
        </div>
      </div>
    )
  }
}

export default Watermark