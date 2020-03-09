import React, { Component } from 'react';
import Timeline from 'bee-timeline';
import { Link } from 'react-router-dom';

import 'bee-timeline/build/Timeline.css';
// import Icon from 'bee-icon';
// import 'bee-icon/build/Icon.css';
import './index.less'

export class TimeLines extends Component {
    render() {
        let{ growList }= this.props
        return (
            <div>
                <Timeline>
                    {
                        growList.map((item,index)=>{
                            return (
                                <Timeline.Item  key={index} >
                                    <Link to={{pathname: `home/detail/${index}`}}>
                                        <div className="grow-title">
                                            {item.Gtitle}
                                        </div>
                                    </Link>
                                </Timeline.Item>
                            )
                        })
                    }
                   
                    {/* <Timeline.Item dot={<Icon type="uf-time-c-o" style={{ fontSize: '16px' }} />} color="danger">Technical testing 2015-09-01</Timeline.Item> */}
                </Timeline>
            </div>
        );
    }
}

export default TimeLines;
