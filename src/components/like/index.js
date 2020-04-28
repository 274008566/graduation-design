import React, { Component } from 'react';
import './index.less'
import classnames  from 'classnames';
import {getArticleList} from '../../module/Home/server'

export class Like extends Component {
    constructor(){
        super()
        this.state={
            activekey:0,
            LikeList:[]
        }
    }

    componentDidMount(){
        getArticleList().then(res=>{
            let data =res.data
            if(data.code==200){
                this.setState({
                    LikeList:data.data
                })
            }
        })
    }

    changeKey=(index)=>()=>{
        this.setState({
            activekey:index
        })
    }
    render() {
        let {activekey, LikeList}=this.state
        let newLikeList = LikeList.filter(item=>{return item.sort_id == 'like' ||item.sort_id == 'new' })
        console.log(newLikeList)
        return (
            <div className="like" >
                <h2 className="htitle">猜你喜欢</h2>
                <section className="topnews imgscale">
                    <a><img src={require('../../assets/images/paihang.jpg')} /><span>细节决定成败</span></a>
                </section>
                <ul >
                    {
                        newLikeList.map((item,index)=>{
                            return(
                                <li onMouseOver={this.changeKey(index)}  className={classnames({active:activekey==index})} key={index}>
                                    <i data-key={index+1}></i>
                                    <a href={`#/home/detail/${item.id}?type=article`} target="_blank" title={item.title}>{item.title}</a>
                                    
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
