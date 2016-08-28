import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col, ListGroup, ListGroupItem, Image, Nav, NavItem } from "react-bootstrap";





export class NewForm extends React.Component<any,any>{
    render () {
       return <Col xs={3} sm={3} md={3} lg={3}  >
                <div> new form </div>
              </Col>
    }
}

export class ExistingForm extends React.Component<any,any>{
    render() {
        return <Col xs={3} sm={3} md={3} lg={3}  >
                <div> existing form </div>
              </Col>
    }
}

export class ViewDatabase extends React.Component<any,any>{
    render() {
        return <Col xs={3} sm={3} md={3} lg={3}  >
                <div> view database </div>
              </Col>
    }
}