import React, { Component } from 'react';
import './index.less'
import Icon from 'bee-icon';
import 'bee-icon/build/Icon.css';

export class PublishCard extends Component {
    render() {
        return (
            <div className="publish-card">
                <figure>
                    <a href="#" title="给王先生的一封情书" target="_blank">
                        <img src={require('../../../assets/images/publish1.jpg')} original="#"  alt="给王先生的一封情书"/>
                    </a>
                </figure>
                <ul>
                    <h3><a href="#" title="给王先生的一封情书" target="_blank">给王先生的一封情书</a></h3>
                    <p>和王先生在一起已经十个年头。2010年确立恋爱关系2012年开启北漂生涯2016年领证结婚，迈入婚姻殿堂2018年有了豌豆豆2019年辞职在家育儿在这十年期间，每个情人
                    和王先生在一起已经十个年头。2010年确立恋爱关系2012年开启北漂生涯2016年领证结婚，迈入婚姻殿堂2018年有了豌豆豆2019年辞职在家育儿在这十年期间，每个情人...
                        <a href="#" target="_blank" className="detail">[详情]</a>
                    </p>
                    <p className="autor">
                        <span>
                            <Icon type="uf-caven" style={{color: "#f891b7"}} /><a href="#" >韶华追忆</a>
                        </span>
                        <span>
                            <Icon type="uf-time-c-o" style={{color: "#91c8f8"}} /><a href="#" >2017-10-14</a>
                        </span>
                        <span className="good">
                            <Icon type="uf-eye" style={{color: "#759b08"}} /><a>1577次浏览</a>
                        </span>
                        <span className="good">
                            <Icon type="uf-caven" /><a href="#" >韶华追忆</a>
                        </span>
                    </p>
                </ul>
            </div>
        );
    }
}

export default PublishCard;
