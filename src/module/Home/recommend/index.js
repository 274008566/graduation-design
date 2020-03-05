import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import RecommendCard from './recommend-card'
import './index.less'

let {getSidebarList} = require('../server')

export class Recommend extends Component {
    constructor(){
        super()
        this.state = {
            recommendList:[1,2,3,4,5,6]
        }
    }

    componentDidMount(){
        getSidebarList().then(res=>{
            console.log(res)
        })
    }
    render() {
        let {recommendList} = this.state
        return (
            <div className="recommend" >
                <div className="title">
                    <h2>特别推荐</h2>
                </div>
                <Row>
                    {
                        recommendList.map((item,index)=>{
                            return (
                            <Col span={12} key={index}>
                                <Link to={{pathname: `home/detail/${index}`}}>
                                    <RecommendCard/>
                                </Link>
                            </Col>
                            )
                        })
                    }
                </Row>
            </div>
        );
    }
}

export default Recommend;
