import React, { Component } from 'react';
import Breadcrumb from 'bee-breadcrumb';
import 'bee-breadcrumb/build/Breadcrumb.css';
import Icon from 'bee-icon';
import 'bee-icon/build/Icon.css';

export class BreadCrump extends Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    当前位置：
                    <Breadcrumb.Item href="#">
                        <Icon type="uf-home"></Icon>
                        <span>首页</span>
                    </Breadcrumb.Item>
                    {
                        this.props.type == "grow" ? 
                        <Breadcrumb.Item href="#/grow">
                            <Icon type="uf-caven"></Icon>
                            <span>时间轴</span>
                        </Breadcrumb.Item>
                        :null
                    }
                    <Breadcrumb.Item active>
                        <Icon type="uf-book"></Icon>
                        <span>正文</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default BreadCrump;
