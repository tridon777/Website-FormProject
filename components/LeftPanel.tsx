import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col, ListGroup, ListGroupItem, Image, Nav, NavItem } from "react-bootstrap";
import { Link  } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export class LeftPanel extends React.Component<any, any> {

    render () {
       return <Col xs={3} sm={3} md={3} lg={3} className="floatReset" >
                <ListGroup className="subListGroup">
                    <LinkContainer to="/new">
                        <ListGroupItem  header="Create a New Form"   ><Image src="/components/images/rightSize.png" responsive /></ListGroupItem>
                    </LinkContainer>
                    <LinkContainer to="/existing">
                        <ListGroupItem id="existingForm"  header="View Existing Forms" ><Image src="/components/images/folderSize.png" responsive /></ListGroupItem>
                     </LinkContainer>
                     <LinkContainer to="/view">
                        <ListGroupItem id="viewDatabase"  header="View Database" ><Image src="/components/images/databaseSize.png" responsive /></ListGroupItem>
                    </LinkContainer>
                </ListGroup>
            </Col>

    }
}