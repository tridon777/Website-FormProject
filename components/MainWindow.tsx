import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';



let correction = {marginBottom: 0, borderRadius: 0};
let correction2 = {marginBottom: 0, borderRadius: 0,marginTop: 50};
let backgroundImage = {backgroundImage: 'url(./components/images/icon-ios7-gear-128.png)'}
export class MainWindow extends React.Component<any, any> {
    render() {
    return  <div>
             <Navbar fluid style={correction2}>
                <div className="navbar-inner">
                    <Navbar.Header>
                        <Navbar.Brand>
                                Compliance Datastore System
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem style={backgroundImage}> <b>'test'</b> </NavItem>
                    </Nav>
                </div>
            </Navbar >
        </div>
    }
}



