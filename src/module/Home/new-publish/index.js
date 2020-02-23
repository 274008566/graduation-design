import React, { Component } from 'react';
import './index.less'
import PublishCard from './publish-card'


export class NewPublish extends Component {
    constructor(){
        super()
        this.state = {
            arr:[1,2,3,4,5,6]
        }
    }
    render() {
        let arr = this.state.arr
        return (
            <div className="new-publish">
                <div className="title">
                    <h2>最新文章</h2>
                </div>
                {
                    arr.map((item,index)=>{
                        return (
                            <PublishCard item={item} key={index} index={index}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default NewPublish;
