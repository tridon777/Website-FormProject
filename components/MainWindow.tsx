import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Row, Col, Image } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';

let abStyle = {marginLeft: "15px", marginTop: "20px", height:"300px", border: "2px solid #b7544d"};

let correction = {marginBottom: 0, borderRadius: 0};
let correction2 = {marginBottom: 0, borderRadius: 0,marginTop: 50,marginLeft:0};
let backgroundImage = {backgroundImage: 'url(./components/images/icon-ios7-gear-128.png)'}
export class MainWindow extends React.Component<any, any> {
    render() {
return          <Row style={correction2}>
                    <Col xs={10}  md={10} style={{position: "absolute", top:100, bot:150,right:178,left:"1.125em",height:"80%",border:"1px solid #b7544d"}} >
                        <Row style={{height: 50, backgroundColor: "#0f504e"}}>
                            <Col xs={3} md={3} style={{textAlign: "left",verticalAlign: "center", fontSize: 24, lineHeight:2, color:"white" }}>
                                Compliance Datastore System
                            </Col>
                            <Col xsOffset={8} mdOffset={8} xs={1} md={1}>
                                <i className="fa fa-cog fa-4"  style={{lineHeight: 2, float: "right",color: "white",marginTop: 7}}></i>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2} md={2} style={abStyle}>Create a New Form
                                <br/>
                                <Image src="/components/images/rightSize.png" style={{textAlign: "center",marginTop:10}}/>
                            </Col>
                            <Col xs={2} md={2} style={abStyle}>View Existing Forms
                                <br/>
                                <Image src="/components/images/folderSize.png" style={{textAlign: "center",marginTop:10}}/>
                            </Col>
                            <Col xs={2} md={2} style={abStyle}>View Database
                                <br/>
                                <Image src="/components/images/rightSize.png" style={{textAlign: "center",marginTop:10}}/>
                            </Col>
                        </Row>
                    </Col>
                </Row >
    }
}



