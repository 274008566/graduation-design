import React, { Component } from 'react';
import Timeline from 'bee-timeline';
import { Link } from 'react-router-dom';

import 'bee-timeline/build/Timeline.css';
// import Icon from 'bee-icon';
// import 'bee-icon/build/Icon.css';
import './index.less'

export class TimeLines extends Component {
    render() {
        return (
            <div>
                <Timeline>
                    {
                        [   
                            {
                                item:'你帮我开一下'
                            },
                            {
                                item:'你帮我开一下111'
                            },
                            {
                                item:'你帮我开一下231'
                            },
                            {
                                item:'你帮我开一下111'
                            },
                        ].map((item,index)=>{
                            return (
                                <Timeline.Item  key={index} >
                                    <Link to={{pathname: `home/detail/${index}`}}>
                                        <div className="title">
                                            {item.item}
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
