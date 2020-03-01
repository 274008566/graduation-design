import React, { Component } from 'react';
import Icon from 'bee-icon';
import classnames from 'classnames';
import Button from "bee-button"
import 'bee-button/build/Button.css';
import StudyCard from '../module/Study/Card/index';
import { Col, Row } from 'bee-layout';
import 'bee-layout/build/Layout.css';

import CreateModal from '../module/Study/create-modal/index'
const btnName = [
    {
        id: 'cd',
        name: '流程图'
    },
    {
        id: 'ci',
        name: '思维导图'
    }
]

export class Study extends Component {
    constructor(){
        super();
        this.state = {
            showType:"cd",
            showCList:false,
            createModal:false
        }
    }

    createModal = (val)=>() =>{
        this.setState({
            createModal:val
        })
    }

    changeView = (view) =>()=>{
        if(view != this.state.cView){
          this.setState({
            cView:view,
            showCList:!this.state.showCList,
          })
        }
      }

    changeShowList = (type) => () => {
        this.setState({
          showType: type
        });
    }
    render() {
        let {showType,createModal}= this.state
        return (
            <div className="study">
                <div className="header-button">
                    <div className="buttonGroup">
                        {
                        btnName.map((item) => {
                            return (
                            <Button
                                key={item.id}
                                onClick={this.changeShowList(item.id)}
                                className={classnames({'active': item.id === showType})}
                                >
                                {item.name}
                            </Button>
                            )
                        })
                        }
                        
                    </div>
                    <Button bordered className="create" onClick={this.createModal(true)}>创建脑图</Button>
                    <span className="change-view">
                        <Icon type="uf-symlist" className={this.state.showCList ? 'cl cl-style-table  active-view' : 'cl cl-style-table '}
                            onClick={this.changeView('list')} title="列表视图"/>
                        <Icon type="uf-4square" className={!this.state.showCList ? 'cl cl-style-card  active-view' : 'cl cl-style-card'} 
                        onClick={this.changeView('card')} title="卡片视图"/> 
                    </span>
                </div>
                <div className="study-content">
                    {
                        [1,2,3,4,5,6].map((item,index)=>{
                            return (
                                <Col md={6} xs={12} sm={12} lg={4} key={index}>
                                     <StudyCard />
                                </Col>
                            )
                        })
                    }
                </div>
                <CreateModal
                show={createModal}
                showModal={this.createModal}
                />
            </div>
        );
    }
}

export default Study;
