import * as React from "react";
import { Row } from 'react-bootstrap';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { ItemPane } from './ItemPane';
import { NavbarB } from './navbar';
import { MainWindow } from './MainWindow';



class Page extends React.Component<any,void> {

    render() {
        const {main} = this.props;
        return (
            <div>
                <NavbarB />
                <MainWindow />
                {main}

            </div>
        );
    }
}

render((
    <Router history={browserHistory} >
        <Route path="/" component={Page}>

        </Route>
    </Router>
), document.getElementById("example") )