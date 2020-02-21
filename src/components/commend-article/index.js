import React, { Component } from 'react';
import './index.less'

export class Article extends Component {
    render() {
        return (
            <div className="hot-article">
                <div className="title"><h3>推荐文章</h3></div>
                <div className="content">
                    <ul>
                        <li>
                            <a>
                                <span className="thumbnail">
                                    <img src={require("../../assets/images/logo1.png")}/>
                                </span>
                                <span className="muted">
                                    <span className="text">vue+echarts 动态绘制图表以及异步加载数据</span>
                                    <span className="data">
                                        <span className="left">2017-12-06</span>
                                        <span style={{color: "#999"}} >3187次阅读</span>
                                    </span>
                                    
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="thumbnail">
                                    <img src={require("../../assets/images/logo1.png")}/>
                                </span>
                                <span className="muted">
                                    <span className="text">vue+echarts 动态绘制图表以及异步加载数据</span>
                                    <span className="data">
                                        <span className="left">2017-12-06</span>
                                        <span style={{color: "#999"}}>3187次阅读</span>
                                    </span>
                                    
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="thumbnail">
                                    <img src={require("../../assets/images/logo1.png")}/>
                                </span>
                                <span className="muted">
                                    <span className="text">vue+echarts 动态绘制图表以及异步加载数据</span>
                                    <span className="data">
                                        <span className="left" >2017-12-06</span>
                                        <span style={{color: "#999"}}>3187次阅读</span>
                                    </span>
                                    
                                </span>
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        );
    }
}

export default Article;
