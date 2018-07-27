import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class Aboutme extends React.Component {


    render(){
        return(
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">contact</Link>
                <h1> About Me</h1>
            </div>
        );
    }

}
