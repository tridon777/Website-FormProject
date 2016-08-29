import * as React from "react";
import { Row, Grid } from 'react-bootstrap';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router';
import { SubWindowLayout } from './SubWindowLayout';
import { NavbarB } from './navbar';
import { MainWindow } from './MainWindow';
import { Footer } from './Footer';
import { NewForm, ExistingForm, ViewDatabase} from './MiddlePanel';



class Page extends React.Component<any,void> {

    render() {
        const {middle} = this.props;

        return (
            <div>
                <NavbarB />
                <Grid fluid>
                    <MainWindow  middle={middle}/>
                </Grid>
                <Footer />
            </div>
        );
    }
}

render((
    <Router history={browserHistory} >
        <Route path="/formProject" component={Page}>
            <Route path="new" components={{middle: NewForm}} />
            <Route path="existing" components={{middle: ExistingForm}} />
            <Route path="view" components={{middle: ViewDatabase}} />
        </Route>
    </Router>
), document.getElementById("example") )