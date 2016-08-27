import * as React from "react";
import { Row, Grid } from 'react-bootstrap';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { ItemPane } from './ItemPane';
import { NavbarB } from './navbar';
import { MainWindow } from './MainWindow';
import { Footer } from './Footer';




class Page extends React.Component<any,void> {

    render() {
        const {main} = this.props;
        return (
            <div>
                <NavbarB />
                <Grid fluid>
                    <MainWindow />
                    {main}

                </Grid>
                <Footer />
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