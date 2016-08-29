import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Bootstrap from "bootstrap";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router';


export interface naviB {}
let correction = {marginBottom: 0, borderRadius: 0,};
let correction2 = {marginBottom: 0, borderRadius: 0,marginTop: 50};
export class NavbarB extends React.Component<naviB, {}> {
    render() {
    return  <div>
             <Navbar inverse fluid style={correction}>
                <Navbar.Header >
                    <Navbar.Brand>
                        <Link to="/">Paul Searcy</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Nav pullLeft>
                        <NavItem href="http://www.psearcy.com/formProject" >Form Builder Project</NavItem>
                    </Nav>
                    <Nav pullRight>

                            <NavItem href="http://www.psearcy.com" >Home</NavItem>


                            <NavItem href="http://www.psearcy.com/about" >About</NavItem>

                            <NavItem href="http://www.psearcy.com/projects" >Projects</NavItem>


                            <NavItem href="http://www.psearcy.com/contact" > Contact</NavItem>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    }
}
