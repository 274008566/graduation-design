import React, { Component } from 'react';
import Breadcrumb from 'bee-breadcrumb';
import 'bee-breadcrumb/build/Breadcrumb.css';
import Icon from 'bee-icon';
import 'bee-icon/build/Icon.css';

export class BreadCrump extends Component {
    render() {
        let {isEnd, name, href}=this.props
        return (
            <div>
                <Breadcrumb>
                    当前位置：
                    <Breadcrumb.Item href="#">
                        <Icon type="uf-home"></Icon>
                        <span>首页</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href={href}>
                        <Icon type="uf-caven"></Icon>
                        <span>{name}</span>
                    </Breadcrumb.Item>
                    {
                        isEnd　&& 
                        <Breadcrumb.Item active>
                            <Icon type="uf-book"></Icon>
                            <span>正文</span>
                        </Breadcrumb.Item>
                    }
                    
                </Breadcrumb>
            </div>
        );
    }
}

export default BreadCrump;
