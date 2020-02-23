import React, { Component } from 'react';
import './index.less'

export class ClickRank extends Component {
    constructor(){
        super()
        this.state = {
            ClickList:[1,2,3,4,5,6]
        }
    }
    render() {
        let {ClickList} = this.state
        return (
            <div className="click-rank">
                <h2 className="htitle">点击排行</h2>
                <section className="topnews imgscale">
                    <a><img src={require('../../assets/images/paihang.jpg')} /><span>细节决定成败</span></a>
                </section>
                <ul>
                    {
                        ClickList.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <i data-key={index+1}></i>
                                    <a href={`#/home/detail/${index}`} title="十条设计原则教你学会如何设计网页布局!" target="_blank">十条设计原则教你学会如何设计网页布局!</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default ClickRank;
