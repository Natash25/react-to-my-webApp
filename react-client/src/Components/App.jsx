import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import AboutMe from './AboutMe';
import NavBar from './HeaderComponents/NavBar';
import Footer from "./FooterComponents/Footer";
import {Card} from "semantic-ui-react/dist/commonjs/views/Card/Card";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="aboutMe" exact path="/aboutMe" component={AboutMe} />
                    <div className="ui card"><img src="https://docs.tasktop.com/tasktop/files/47157911/47157912/1/1540232115525/integration-network.png" className="ui image"/>
                        <div className="content">
                            <div className="header">Tasktop Technologies</div>
                            <div className="meta">My first co-op work term!</div>
                            <div className="description">A (lengthy) overview to my experience as a Junior Software Engineer at Tasktop.</div>
                        </div>
                        <div className="extra content"><a><i aria-hidden="true" className="user icon"></i>10 Friends</a>
                        </div>
                    </div>
                    <Route name="footer" exact path="/" component={Footer} />
                </div>
            </Router>
        )

    }
}

export default App;