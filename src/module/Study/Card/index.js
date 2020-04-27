import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.less'
import Icon from 'bee-icon';
import 'bee-icon/build/Icon.css';

export class StudyCard extends Component {

    go = (id)=>()=>{
        this.props.history.push('/flow/'+id)
    }
    render() {
        let {item}=this.props
        console.log(item)
        return (
            <div className="study-card">
               <div className="env" >思维导图
                    <div className="env-corner"></div>
               </div>
               <div className="app-manager-tile-header tile-app tile-false">
                   <div className="app-manager-tile-header-cage">
                       <span className="default-png app-manager-tile-header-cage-img" style={{display: 'inline-block'}}></span>
                    </div>
                    <h4 className="app-manager-tile-header-title" style={{lineHeight: "normal"}}>{item.name}</h4>
                    <div className="desc">
                        <Icon type="uf-time-c-o" />
                        <span className="time">{item.createdAt}</span>
                    </div>
                </div>
                <ul>
                    <Link to={{pathname: `/flow/${item.id}`}}>
                        <li className="group-control-item">
                        查看详情
                        </li>
                    </Link>
                    
                </ul>
            </div>
        );
    }
}

export default StudyCard;
