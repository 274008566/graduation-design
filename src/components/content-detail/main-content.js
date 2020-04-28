import React, { Component } from 'react';
import moment from 'moment'
export class MainContent extends Component {
    render() {
        let {detail,type, dataTxt} = this.props
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
                    
                    type !=="grow" && <span>{detail.length>0&&(parseInt(detail[0].click_num)+1)}人已围观</span>
                    }
                </div>
                {
                    type !=="grow" &&
                    <div className="summary">
                        <span>
                            <strong>摘要：</strong>
                            {detail.length>0&&detail[0].remark}
                        </span>
                    </div>
                }
                <div className="content-detail">
                    <ul>
                        <li> </li>
                        {
                            data.map((item,index,arr)=>{
                                if(index==(arr.length>4?4:arr.length-1)){
                                    return(
                                        <li>
                                            <div style={{textAlign:'center'}}>
                                                <img src={detail.length>0&&detail[0].img} />
                                            </div>
                                        <span style={{textIndent: "2em",display:'block'}}>{item}</span>
                                        </li>
                                    )
                                }else{
                                    return (
                                        <li>{item}</li>
                                    )
                                }
                                
                            })
                        }
                    </ul>
                    
                </div>
                
            </div>
        );
    }
}

export default MainContent;
