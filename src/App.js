import React, { Component } from 'react';
import './App.css';
import jjpd from "./img/mmexport1554561936393.jpg"
import mxjh from "./img/mmexport1554561940540.jpg"

import wanteng from "./img/WANGTENG.png"
import chebole from "./img/chebole.png"
import chezhijian from "./img/chezhijian.png"
import haocheju from "./img/haocheju.png"
import jiayu from "./img/jiayu.png"
import L7 from "./img/L7.png"
import shunjie from "./img/shunjie.png"
import xindinghao from "./img/xindinghao.png"
import xinhaofeng from "./img/xinhaofeng.png"
import xinlida from "./img/xinlida.png"
import xinqi from "./img/xinqi.png"
import yuanfeng from "./img/yuanfeng.png"

import { Input } from 'antd';
import { Pagination } from 'antd';
import 'antd/dist/antd.css'; 
const Search = Input.Search;
const carStores = [yuanfeng,xinqi,xinlida,xinhaofeng,xindinghao,shunjie,L7,jiayu,haocheju,chezhijian,chebole,wanteng]
const urls = ["https://gzyuanfeng.souche.com","https://gyxinqi.souche.com","https://www.xinlidaqiche.com","https://gyxhf.souche.com",
"https://xdh.souche.com","https://shunjie.souche.com","https://s.che168.com/351235.html","https://gzjy.souche.com",
"https://gyhcj.souche.com","https://gyczj.souche.com","https://gycbl.souche.com","https://gz.souche.com"]
function results(urls,carStores){
  var doms = [];
  for(var i=0;i<urls.length;i++){
    doms.push(<li id="item">
    <a href={urls[i]}><img src={carStores[i]} height="50%" width="80%" alt=""/></a>
    </li>);
    console.log(i)
  }
  return doms;
} 


function onShowSizeChange(current, pageSize) {
  console.log(current, pageSize);
}
class App extends Component {
  render() {
    return (
      
      <div className="App">
        <header className="App-header">
        </header>
        <img id="picleft" src={jjpd} height="20%" width="20%" alt=""/>
        <img src={mxjh} height="30%" width="40%" alt=""/>
        <img id="picright" src={jjpd} height="20%" width="20%" alt=""/>
        <div id="text">
        <p id="textContext" contenteditable="true">一流的动力，二手的惊喜</p>
        </div>
      
      <div id="pics">
      <div id="search">
        <Search
      placeholder="搜索你想要的车型"
      enterButton="搜索"
      size="large"
      onSearch={value => console.log(value)}/>
      </div>
      <ul>{results(urls,carStores)}</ul>
      </div>
      <div id="pag">
        <Pagination showSizeChanger onShowSizeChange={onShowSizeChange} defaultCurrent={1} total={500} />
      </div>
      </div>
    );
  }
}

export default App;
