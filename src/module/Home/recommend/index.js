import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import RecommendCard from './recommend-card'
import './index.less'

export class Recommend extends Component {
    render() {
        return (
            <div className="recommend" >
                <div className="title">
                    <h2>特别推荐</h2>
                </div>
                <Row>
                    <Col span={12}>
                        <Link to={{pathname: `home/detail/${1}`}}>
                            <RecommendCard/>
                        </Link>
                    </Col>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                    <Col span={12}>
                        <RecommendCard/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Recommend;
