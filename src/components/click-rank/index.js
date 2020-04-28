import React, { Component } from 'react';
import './index.less'
import {getArticleList} from '../../module/Home/server'

export class ClickRank extends Component {
    constructor(){
        super()
        this.state = {
            ClickList:[]
        }
    }
    componentDidMount(){
        getArticleList().then(res=>{
            let data =res.data
            if(data.code==200){
                this.setState({
                    ClickList:data.data
                })
            }
        })
    }
    render() {
        let {ClickList} = this.state
        let NewClickList = ClickList.sort((a,b)=>b.click_num-a.click_num)
        return (
            <div className="click-rank">
                <h2 className="htitle">点击排行</h2>
                <section className="topnews imgscale">
                    <a><img src={require('../../assets/images/paihang.jpg')} /><span>细节决定成败</span></a>
                </section>
                <ul>
                    {
                        NewClickList.map((item,index)=>{
                            if(index<7){
                                return(
                                    <li key={index}>
                                        <i data-key={index+1}></i>
                                        <a href={`#/home/detail/${item.id}?type=article`} title={item.title} target="_blank">{item.title}</a>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ClickRank;
