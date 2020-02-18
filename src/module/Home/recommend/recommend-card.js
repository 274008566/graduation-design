import React, { Component } from 'react';

export class RecommendCard extends Component {
    render() {
        return (
            <div className="card">
                <a href="#">
                    <img src={require('../../../assets/images/recommend1.jpg')}/>
                    <h3>哈佛大学用这12张图，教育了10亿人_心灵鸡汤</h3>
                    <p class="muted">很多人把感恩当成一种付出，其实感恩本身就是一种幸福。...</p>
                </a>
            </div>
        );
    }
}

export default RecommendCard;
