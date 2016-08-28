import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col, ListGroup, ListGroupItem, Image, Tab, Nav, NavItem, Clearfix } from "react-bootstrap";
import { LeftPanel } from "./LeftPanel";





export class SubWindowLayout extends React.Component<any, any> {


    constructor(props: any){
        super(props);
        this.state = { name: "none" };
        this.itemClicked = this.itemClicked.bind(this);
    }



  itemClicked(middleName: String){
        this.setState({ middleName: middleName});
    }



    render () {
       return (
            <Tab.Container id="verticalTab" defaultActiveKey="left">
                <Row >
                    <LeftPanel middleName={this.itemClicked} />


                </Row>
            </Tab.Container>
        )
    }
}