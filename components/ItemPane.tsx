import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Row, Col } from "react-bootstrap";





export class ItemPane extends React.Component<any, any> {
    render () {
       return (
            <Col xs={2}  md={3} style={{border: "1px solid blue",
    boxshadow: "0.9px 1px 10px 1px black"}} >

            </Col>
        )
    }
}