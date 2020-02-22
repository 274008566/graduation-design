import React, { Component } from 'react';

export class MainContent extends Component {
    render() {
        return (
            <div className="main-content">
                <h1 className="content-title">哈佛大学用这12张图，教育了10亿人_心灵鸡汤</h1>
                <div className="meg">
                    <i className="avatar">
                        <img src={require('../../assets/images/person.jpg')} />
                    </i>
                    <span></span>
                    <span>2018-11-08</span>
                    <span>6650人已围观</span>
                </div>
                <div className="summary">
                    <span>
                        <strong>摘要：</strong>
                        很多人把感恩当成一种付出，其实感恩本身就是一种幸福。
                    </span>
                </div>
            </div>
        );
    }
}

export default MainContent;
