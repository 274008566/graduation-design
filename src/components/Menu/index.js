import React, { Component } from 'react'

import './index.less'

// import FormControl from 'bee-form-control';
import Navbar from 'bee-navbar';
import 'bee-navbar/build/Navbar.css';
const NavItem = Navbar.NavItem;
const Header = Navbar.Header;
const Brand = Navbar.Brand;
const Collapse = Navbar.Collapse;
const Toggle = Navbar.Toggle;
const Nav = Navbar.Nav;


export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            selectedkey: 1
        }
    }

    onToggle = (value) => {
        this.setState({expanded: value});
    }

    handleSelect = (index) => {
        this.setState({selectedkey: index});
    }

    render() {
        return (
            <div className="container">
                 <Navbar
                    inverse
                    expanded={this.state.expanded}
                    onToggle={this.onToggle}>
                    <Header>
                        <Brand>
                            <div className="logo">
                                <img src = {require("../../assets/images/logo3.png")}/>
                            </div>
                        </Brand>
                        <Toggle />
                    </Header>

                    <Collapse>
                        <Nav
                            selectedkey={this.state.selectedkey}
                            onSelect={this.handleSelect}>
                            <NavItem href="/#/" eventKey={1}>
                                首页
                            </NavItem>
                            <NavItem href="/#/about" eventKey={2}>
                                关于
                            </NavItem>
                            <NavItem href="/#/grow" eventKey={2}>
                                成长
                            </NavItem>
                            <NavItem href="/#/study" eventKey={2}>
                                学习
                            </NavItem>
                            <NavItem href="/#/amusement" eventKey={2}>
                                娱乐
                            </NavItem>
                            <NavItem href="/#/help" eventKey={2}>
                                求助
                            </NavItem>
                            <NavItem href="/#/reward" eventKey={2}>
                                打赏
                            </NavItem>
                        </Nav>
                        
                        {/* <Navbar.Form pullRight>
                            <FormControl type="text" placeholder="Search"/>
                        </Navbar.Form> */}
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}
