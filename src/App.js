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
  for(var i=0;i<urls.length-1;i=i+2){
    doms.push(<li id="item">
    <a href={urls[i]}><img src={carStores[i]} height="500px" width="880px" alt=""/>
    &nbsp<img src={carStores[i+1]} height="500px" width="880px" alt=""/></a>
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
        <div>
	<div class="wrapper">
		<div class="line line1">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line2">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line3">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line4">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line5">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line6">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line7">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line8">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line9">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line10">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
		<div class="line line11">
			<span class="circle circle-top"></span>
			<div class="dotted">
				<span class="dot dot-top"></span>
				<span class="dot dot-middle-top"></span>
				<span class="dot dot-middle-bottom"></span>
				<span class="dot dot-bottom"></span>
			</div>
			<span class="circle circle-bottom"></span>
		</div>
	</div>
	
</div>

        <img id="picleft"  height="20%" width="20%" alt=""/>
        <img src={mxjh} height="30%" width="40%" alt=""/>
        <img id="picright" src={jjpd} height="20%" width="20%" alt=""/>
        <div id="text">
        <p id="textContext" contenteditable="true">一流的动力，二手的惊喜</p>
        </div>
      
      <div id="pics">
     
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
