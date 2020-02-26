import React, { Component } from 'react';
import Icon from 'bee-icon';
import classnames from 'classnames';
import Button from "bee-button"
const btnName = [
    {
        id: 'cd',
        name: '流水线任务'
    },
    {
        id: 'ci',
        name: '流水线任务'
    }
]

export class Study extends Component {
    constructor(){
        super();
        this.state = {
            showType:"cd",
            showCList:"card"
        }
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
        let {showType}= this.state
        return (
            <div className="study">
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
                {
                        showType === 'ci' || showType === 'cd' ? (
                        <span className="change-view">
                            <Icon type="uf-symlist" className={this.state.showCList ? 'cl cl-style-table  active-view' : 'cl cl-style-table '}
                              onClick={this.changeView('list')} title="列表视图"/>
                                <Icon type="uf-4square" className={!this.state.showCList ? 'cl cl-style-card  active-view' : 'cl cl-style-card'} 
                                onClick={this.changeView('card')} title="卡片视图"/> 

                        </span>
                        ) : null
                    }
            </div>
        );
    }
}

export default Study;
