import React, { Component } from 'react';
import './index.less'
import classnames  from 'classnames';

export class Like extends Component {
    constructor(){
        super()
        this.state={
            activekey:0
        }
    }

    changeKey=(index)=>()=>{
        this.setState({
            activekey:index
        })
    }
    render() {
        let {activekey}=this.state
        return (
            <div className="like" >
                <h2 className="htitle">猜你喜欢</h2>
                <section className="topnews imgscale">
                    <a><img src={require('../../assets/images/paihang.jpg')} /><span>细节决定成败</span></a>
                </section>
                <ul >
                    {
                        [1,2,3,4,5].map((item,index)=>{
                            return(
                                <li onMouseOver={this.changeKey(index)}  className={classnames({active:activekey==index})}>
                                    <i data-key={index+1}></i>
                                    <a  title="十条设计原则教你学会如何设计网页布局!" target="_blank">十条设计原则教你学会如何设计网页布局!</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Like;
