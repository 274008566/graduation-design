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
                    <Breadcrumb.Item href="#">
                        <Icon type="uf-caven"></Icon>
                        <span>Library</span>
                    </Breadcrumb.Item>
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
