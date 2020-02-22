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
                    <Breadcrumb.Item href="#">
                        <Icon type="uf-home"></Icon>
                        <span>Home</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        <Icon type="uf-caven"></Icon>
                        <span>Library</span>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        <Icon type="uf-cart-o"></Icon>
                        <span>Cart</span>
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default BreadCrump;
