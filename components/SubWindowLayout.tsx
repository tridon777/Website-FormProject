import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col, ListGroup, ListGroupItem, Image, Tab, Nav, NavItem, Clearfix } from "react-bootstrap";
import { LeftPanel } from "./LeftPanel";



export class SubWindowLayout extends React.Component<any, any> {
    render () {
       return (
            <Tab.Container id="verticalTab" defaultActiveKey="left">
                <Row >
                    <LeftPanel />
                </Row>
            </Tab.Container>
        )
    }
}