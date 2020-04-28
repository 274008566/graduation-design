import React, { Component } from 'react';

export class RecommendCard extends Component {
    render() {
        let {item}=this.props
        return (
            <div className="card">
                <span>
                    <img src={item.img}/>
                    <h2>{item.title}</h2>
                    <p className="muted">{item.remark}</p>
                </span>
            </div>
        );
    }
}

export default RecommendCard;
