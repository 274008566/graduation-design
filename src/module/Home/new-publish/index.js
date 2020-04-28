import React, { Component } from 'react';
import './index.less'
import PublishCard from './publish-card'


export class NewPublish extends Component {
    constructor(){
        super()
        this.state = {
            NewPublishList:[]
        }
    }
    render() {
        let { NewPublishList }= this.props
        return (
            <div className="new-publish">
                <div className="title">
                    <h2>最新文章</h2>
                </div>
                {
                    NewPublishList.map((item,index)=>{
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
