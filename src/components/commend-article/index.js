import React, { Component } from 'react';
import './index.less'
import { Link } from 'react-router-dom';


export class Article extends Component {
    constructor(){
        super()
        this.state = {
            articleList:[1,2,3,4]
        }
    }
    render() {
        let articleList =this.state.articleList
        return (
            <div className="hot-article">
                <div className="title"><h3>推荐文章</h3></div>
                <div className="content">
                    <ul>
                        {
                            articleList.map((item,index)=>{
                                return (
                                    <Link to={{pathname: `home/detail/${index}`}} key={index}>
                                        <li>
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
                                        </li>
                                    </Link>
                                    
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Article;
