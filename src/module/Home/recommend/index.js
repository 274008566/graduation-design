import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import RecommendCard from './recommend-card'
import './index.less'



export class Recommend extends Component {
    constructor(){
        super()
        this.state = {
            RecommendList:[]
        }
    }

    componentWillReceiveProps(nextProps){
        let {RecommendList}=nextProps

        if(RecommendList.length!=this.props.RecommendList.length){
            this.setState({
                RecommendList
            })
        }
    }

    render() {
        let { RecommendList} = this.state
        return (
            <div className="recommend" >
                <div className="title">
                    <h2>最新文章</h2>
                </div>
                <Row>
                    {
                        RecommendList.map((item,index)=>{
                            return (
                            <Col span={12} key={index}>
                                <Link to={{pathname: `home/detail/${item.id}`,search:`?type=article`}}>
                                    <RecommendCard item={item}/>
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
