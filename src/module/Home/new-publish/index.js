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
        let { NewPublishList, typeName }= this.props
        return (
            <div className="new-publish">
                <div className="title">
                    <h2>特别推荐</h2>
                </div>
                {
                    NewPublishList.map((item,index)=>{
                        return (
                            <PublishCard item={item} key={index} index={index} typeName={typeName}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default NewPublish;
