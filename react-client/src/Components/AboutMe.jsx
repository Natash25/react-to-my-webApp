import React, { Component } from 'react';
import {Route} from "react-router-dom";

class AboutMe extends Component{
    render() {
        return (
            <div className="aboutMe">
                    <h2> All about me!</h2>
                    <h3>Links to social media</h3>
                    <p>My name is Natasha Carson- I'm a 3rd year Computer Science Student at UBC. I am currently a
                        Junior Software Engineer at Tasktop Technologies. My internship experience has been, so
                        far so great! I started out by working on the project that started the company itself- Mylyn
                        for Eclipse. Tasktop holds a responsibility for the maintainability of Mylyn, and over the years
                        it has been, well, up in the attic- its there but we never go upstairs! For about a month, I've
                        been updating Mylyn's Gerrit connector such that it supports the newer, RESTful versions of
                        Gerrit.
                    </p>
            </div>
        )
    }
}

export default AboutMe;