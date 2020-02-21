import React, { Component } from 'react';
import './index.less'

export class HotTag extends Component {
    render() {
        return (
            <div className="hot-tag">
                <div className="title"><h3>热门标签</h3></div>
                <div className="content">
                    <ul>
                        <li>js</li>
                        <li>html</li>
                        <li>javascript</li>
                        <li>java</li>
                        <li>js</li>
                        <li>php</li>
                        <li>全栈</li>
                        <li>全栈</li>
                        <li>全栈</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default HotTag;
