import React, { Component } from 'react';
import './index.less'
import Icon from 'bee-icon';
import 'bee-icon/build/Icon.css';

export class StudyCard extends Component {
    render() {
        return (
            <div className="study-card">
               <div className="env" >专属测试
                    <div className="env-corner"></div>
               </div>
               <div className="app-manager-tile-header tile-app tile-false">
                   <div className="app-manager-tile-header-cage">
                       <span className="default-png app-manager-tile-header-cage-img" style={{display: 'inline-block'}}></span>
                    </div>
                    <h4 className="app-manager-tile-header-title" style={{lineHeight: "normal"}}>DC-fe-前端fe-core</h4>
                    <div className="desc">
                        <Icon type="uf-time-c-o" />
                        <span className="time"><i class="cl cl-time-02"></i>2020-01-10 10:07:49</span>
                    </div>
                </div>
                <ul>
                    <li class="group-control-item">
                        删除
                    </li>
                    <li class="group-control-item">
                       查看详情
                    </li>
                </ul>
            </div>
        );
    }
}

export default StudyCard;
