/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './App.scss'
import Watermark from './componens/watermark'
import Footer from './componens/footer'

function App() {
  return (
    <div className="App">
      <header>
        <h1>水墨清香：一款本地水印添加工具</h1>
        <h5>加水印操作在本地完成，任何证件信息不会上传到网站，请放心使用
          <a href="https://github.com/wu529778790/shenzjd.com" 
          target="_blank">开源更放心</a>
        </h5>
      </header>
      <Watermark />
      <Footer />
    </div>
  );
}

export default App;
