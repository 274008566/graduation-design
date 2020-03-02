import React, { Component } from 'react';
import Tabs from 'bee-tabs';
import 'bee-tabs/build/Tabs.css';
import './index.less'

import TimeLines from '../timeLine'
const {TabPane} = Tabs;

export class GrowTabs extends Component {
    constructor(){
        super();
        this.state = {
            activeKey:"1"
        }
    }


    onChange = (activeKey) => {
        console.log(`onChange ${activeKey}o-^-o`);
        this.setState({
            activeKey,
        });
    }

    onTabClick = (key) => {
        console.log(`onTabClick ${key}o^o`);
        if (key === this.state.activeKey) {
            this.setState({
                activeKey: '',
            });
        }
    }

    render() {
        return (
            <div className="demo4">
                <Tabs
                    activeKey={this.state.activeKey}
                    tabBarPosition={"left"}
                    onChange={this.onChange}
                    defaultActiveKey="1"
                    className="demo4-tabs"
                    onTabClick={this.onTabClick}
                >
                    {
                        [1,2,3,4,5,6,7,8].map((item,index)=>{
                            return (
                            <TabPane tab={2020-index} key={item}>
                                <TimeLines/>
                            </TabPane>
                            )
                        })
                    }
                </Tabs>
            </div>
        );
    }
}

export default GrowTabs;
