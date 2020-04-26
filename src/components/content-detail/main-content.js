import React, { Component } from 'react';
import moment from 'moment'
export class MainContent extends Component {
    render() {
        let {detail,type, dataTxt} = this.props
        console.log(detail)
        let data = []
        dataTxt=dataTxt.replace(/\n/g,"<br/>")
        data = dataTxt.split('<br/>')
        return (
            <div className="main-content">
                <h1 className="content-title">{detail.length>0&&detail[0].title}</h1>
                <div className="meg">
                    <i className="avatar">
                        <img src={require('../../assets/images/person.jpg')} />
                    </i>
                    <span></span>
                    <span>{moment(detail.length>0&&detail[0].createdAt).format('YYYY-MM-DD')}</span>
                    {
                    
                    type !=="grow" && <span>6650人已围观</span>
                    }
                </div>
                {
                    type !=="grow" &&
                    <div className="summary">
                        <span>
                            <strong>摘要：</strong>
                            很多人把感恩当成一种付出，其实感恩本身就是一种幸福。
                        </span>
                    </div>
                }
                <div className="content-detail">
                    <ul>
                        <li> </li>
                        {
                            data.map(item=>{
                                return (
                                    <li>{item}</li>
                                )
                            })
                        }
                    </ul>
                    <div style={{textAlign:'center'}}>
                        <img src={detail.length>0&&detail[0].img} />

                    </div>
                </div>
                
            </div>
        );
    }
}

export default MainContent;
