import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.less'
import Icon from 'bee-icon';
import 'bee-icon/build/Icon.css';
import axios from "axios"; //导入axios
// import {updataArticle} from '../server'

export class PublishCard extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    
     componentDidMount(){
        let {item} = this.props
        this.getTxt(item)()
     }
     
    getTxt = (item)=>() =>{
        let content = item.content
        let url = content.split('3001')[1]
        axios(url).then(res=>{
            let data = res.data
            this.setState({
                dataTxt:data
            })
        })
    }

    render() {
        let {item, typeName} = this.props
        
        let {dataTxt}=this.state
        // let dataTxt = this.getTxt(item)()
        // console.log(dataTxt)

        return (
            <div className="publish-card">
                <figure>
                    <a title="给王先生的一封情书" >
                        <img src={item.img} original="#"  alt="给王先生的一封情书"/>
                    </a>
                </figure>
                <ul>
                    <Link to={{pathname: `home/detail/${item.id}`,search:`?type=article`}} >
                        <h3 >{item.title}</h3>
                    </Link>
                    
                    <p className="data-text">{dataTxt}
                        
                    </p>
                    {/* <a href={`#/home/detail/${index}`} className="detail">[详情]</a> */}
                    <p className="autor">
                        <span>
                            <Icon type="uf-caven" style={{color: "#f891b7"}} /><a>{typeName}</a>
                        </span>
                        <span>
                            <Icon type="uf-time-c-o" style={{color: "#91c8f8"}} /><a >{item.createdAt}</a>
                        </span>
                        <span className="good">
                        <Icon type="uf-eye" style={{color: "#759b08"}} /><a>{item.click_num}次浏览</a>
                        </span>
                        {/* <span className="good">
                            <Icon type="uf-caven" /><a >韶华追忆</a>
                        </span> */}
                    </p>
                </ul>
            </div>
        );
    }
}

export default PublishCard;
