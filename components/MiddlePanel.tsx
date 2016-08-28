import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import { Row, Col, ListGroup, ListGroupItem, Image, Nav, NavItem } from "react-bootstrap";



interface newer{
    result: any;
}

export class NewForm extends React.Component<newer,any>{
    public successCall(data: any){
        console.log(data);
    }

    public AjaxCall(url: string, data: any,errorMessage: String, successCall: (data: any) => void){
        let request = $.ajax({
            type: "GET",
            url: url,
            data: data,
            dataType: "json",
            xhrFields: {withCredentials: false}

        });

        request.done(successCall);

        request.fail(function (jqXHR:any, textStatus:any, errorThrown: SyntaxError)
        {
            console.log(textStatus);
        });
    }


    componentDidMount(){
        this.AjaxCall("http://localhost:3000/api/employee",{},"Something went wrong", this.successCall)
    }
    render () {

       return <Col xs={3} sm={3} md={3} lg={3}  >
                <div> {this.props.result} </div>
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