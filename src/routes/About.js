import React, { Component } from 'react';
import Timeline from 'bee-timeline';
import 'bee-timeline/build/Timeline.css';

export class About extends Component {
    constructor(){
        super();
        this.state = {
            seeMore : true,
            dataSource : [
                '开始创建项目 2019-12-15',
                '利用webpack搭建react项目 2019-12-27',
                '开始完成首页模块 2020-2-01',
                '开始完成娱乐模块 2020-2-10',
            ]
        }
    }

    handleClick =()=> {
        let newDataSource = this.state.dataSource.concat(['开始完成关于模块 2020-02-18','完成打赏模块 2020-02-25','完成娱乐模块 2020-03-03']);
        this.setState({
            seeMore: false,
            dataSource: newDataSource
        })
    }

    render() {
        let { seeMore,dataSource } = this.state;
        let timelineList = dataSource.map((item,index)=>{
            return  <Timeline.Item color="success" key={index}>{item}</Timeline.Item>
        })
        return (
            <div className="about">
                <div className='about-content'>
                    <h2>关于本站</h2>
                    <span className="first">本网站创建于2019年12月30日，用于记录与分享个人学习心得。</span>
                    <span>网站结构：</span>
                    <ul>
                        <li>前 端 ：<code>React+Webpack</code></li>
                        <li>后 端 ：<code>nodejs+express</code></li>
                    </ul>
                    <span className='first'>个人网站水平有限，大佬路过还请多批评指正。</span>
                </div>
                <div className='about-content'>
                    <h2>关于我</h2>
                    <span className="first me">大四毕业党，软件工程专业，主修前端方向。人生就是得与失的过程，而我，却在短短的一年内得到了太多，友情、爱情、知识，最重要的是懂得了如何做人，如何去面对职场。</span>
                    <ul>
                        <li>可以通过以下方式联系到我：</li>
                        <li>邮 箱 ：1479605026@qq.com</li>
                        <li>Github ：https://github.com/21duxue</li>
                    </ul>
                </div>
                <div className='about-content'>
                    <h2>更新日志</h2>
                    <Timeline pending={ seeMore ? <a onClick={this.handleClick}>See more</a>: false }>
                        {timelineList}
                    </Timeline>
                </div>
                <div className='about-content'>
                    <h2>特别说明</h2>
                    <ul>
                        <li>本站所有内容仅代表个人观点，和任何组织或个人无关。</li>
                        <li>本站内容仅供学习交流，请勿用于任何形式商业行为。</li>
                        <li>对于本站原创文章，如需转载使用，请务必<code>注明</code>文章作者和来源.</li>
                        <li>本网站如无意中侵犯了某些组织或个人的知识产权，请来信或来电告之，本网站将立即予以删除。</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default About;
