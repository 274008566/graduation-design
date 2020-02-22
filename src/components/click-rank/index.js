import React, { Component } from 'react';
import './index.less'

export class ClickRank extends Component {
    render() {
        return (
            <div className="click-rank">
                <h2 className="htitle">点击排行</h2>
                <section className="topnews imgscale">
                    <a><img src={require('../../assets/images/paihang.jpg')} /><span>细节决定成败</span></a>
                </section>
                <ul>
                    <li>
                        <i data-key="1"></i>
                        <a  title="十条设计原则教你学会如何设计网页布局!" target="_blank">十条设计原则教你学会如何设计网页布局!</a>
                    </li>
                    <li>
                        <i data-key="2"></i>
                        <a  title="作为一个设计师,如果遭到质疑你是否能恪守自己的原则?" target="_blank">作为一个设计师,如果遭到质疑你是否能恪守自己的原则?</a>
                    </li>
                    <li>
                        <i data-key="3"></i>
                        <a  title="Come on,行动起来吧!我们和时间来一场赛跑!" target="_blank">Come on,行动起来吧!我们和时间来一场赛跑!</a>
                    </li>
                    <li>
                        <i data-key="4"></i>
                        <a  title="为什么说10月24日是程序员的节日？" target="_blank">为什么说10月24日是程序员的节日？</a>
                    </li>
                    <li>
                        <i data-key="5"></i>
                        <a  title="个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。" target="_blank">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的。</a>
                    </li>
                    <li>
                        <i data-key="6"></i>
                        <a  title="【个人博客空间申请】金牛云服，免费领空间啦" target="_blank">【个人博客空间申请】金牛云服，免费领空间啦</a></li>
                    <li>
                        <i data-key="7"></i>
                        <a  title="个人网站做好了，百度不收录怎么办？来，看看他们怎么做的" target="_blank">个人网站做好了，百度不收录怎么办？来，看看他们怎么做的</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default ClickRank;
