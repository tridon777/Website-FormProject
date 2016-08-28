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
                        <ListGroupItem  header="Create a New Form"   ><a><Image src="/components/images/rightSize.png" responsive /></a></ListGroupItem>
                    </LinkContainer>
                    <LinkContainer to="/existing">
                        <ListGroupItem id="existingForm"  header="View Existing Forms" ><a><Image src="/components/images/folderSize.png" responsive /></a></ListGroupItem>
                     </LinkContainer>
                     <LinkContainer to="/view">
                        <ListGroupItem id="viewDatabase"  header="View Database" ><a><Image src="/components/images/databaseSize.png" responsive /></a></ListGroupItem>
                    </LinkContainer>
                </ListGroup>
            </Col>

    }
}