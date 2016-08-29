import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as Promise from 'bluebird';
import { Row, Col, ListGroup, ListGroupItem, Image, Nav, NavItem } from "react-bootstrap";



interface newer{
    result: any;

}

interface sNewer{
    sData: any;
    sProgress: any;
}
export class NewForm extends React.Component<any,any>{

    constructor(props: any){
        super(props);
        this.state = { sData: Array<JSX.Element>() };
    }

    componentDidMount(){
        $.getJSON("http://localhost:3000/api/forms",(result:any) => {
            var tempArray: Array<any>= [];
            result.forEach((x:any,i:any)=>{
                tempArray.push(<ListGroupItem key={i}>ID: {x.ID} Name: {x.Name}</ListGroupItem>);
            })
            this.setState({sData: tempArray})
        },NewForm.bind(this));
    }

    componentWillUnmount(){

    }


    render () {

       return <Col xs={3} sm={3} md={3} lg={3}  >
                <ListGroup id="test" className="subListGroup" > {this.state.sData} </ListGroup>
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