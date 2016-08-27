import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col, ListGroup, ListGroupItem, Image, Nav, NavItem } from "react-bootstrap";

export class LeftPanel extends React.Component<any, any> {
    render () {
       return (
           <Col xs={3} sm={3} md={3} lg={3} className="floatReset" >
                <ListGroup className="subListGroup">
                    <ListGroupItem header="Create a New Form"><Image src="/components/images/rightSize.png" responsive /></ListGroupItem>
                    <ListGroupItem header="View Existing Forms"><Image src="/components/images/folderSize.png" responsive /></ListGroupItem>
                    <ListGroupItem header="View Database"><Image src="/components/images/databaseSize.png" responsive /></ListGroupItem>
                </ListGroup>
            </Col>
        )
    }
}