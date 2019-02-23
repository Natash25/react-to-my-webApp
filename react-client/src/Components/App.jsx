import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponents/NavBar';
import Footer from "./FooterComponents/Footer";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <h1> All about me!</h1>
                    <h2>Links to social media</h2>
                    <p>My name is Natasha Carson- I'm a 3rd year Computer Science Student at UBC. I am currently a
                        Junior Software Engineer at Tasktop Technologies. My internship experience has been, so
                        far, so great! I started out by working on the project that started the company itself- Mylyn
                        for Eclipse. Tasktop holds a responsibility for the maintainability of Mylyn, and over the years
                        it has been, well, up in the attic- its there but we never go upstairs! For about a month, I've
                        been updating Mylyn's Gerrit connector such that it supports the newer, RESTful versions of
                        Gerrit.
                    </p>

                    <Route name="footer" exact path="/" component={Footer} />
                </div>
            </Router>
            //todo: route the navBar and footer.
        )

    }
}

export default App;