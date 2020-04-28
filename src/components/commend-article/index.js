import React, { Component } from 'react';
import './index.less'
import {getArticleDetail, getArticleList} from '../../module/Home/server'


export class Article extends Component {
    constructor(){
        super()
        this.state = {
            ArticleList:[]
        }
    }

    componentDidMount(){
        getArticleList().then(res=>{
            let data = res.data
            if(data.code==200){
                this.setState({
                    ArticleList:data.data
                })
            }
        })
    }
    render() {
        let articleList =this.state.ArticleList
        let newArticleList = articleList.filter(item=>item.sort_id=="recommend")
        return (
            <div className="hot-article">
                <div className="title"><h3>推荐文章</h3></div>
                <div className="content">
                    <ul>
                        {
                            newArticleList.map((item,index)=>{
                                return (
                                    <a href={`#/home/detail/${item.id}?type=article`} title={item.title} target="_blank" key={index}>
                                        <li>
                                                <span className="thumbnail">
                                                    <img src={item.img}/>
                                                </span>
                                                <span className="muted">
                                                <span className="text">{item.title}</span>
                                                    <span className="data">
                                                        <span className="left">{item.createdAt}</span>
                                                        <span style={{color: "#999"}}>{item.click_num}次阅读</span>
                                                    </span>
                                                    
                                                </span>
                                        </li>
                                    </a>
                                    
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
