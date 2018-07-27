import React from 'react';
import {Link,Route} from 'react-router-dom';
import App from './app'
import Aboutme from './aboutme';

export default class Contact extends React.Component {
    render(){
        return(
           <div> 
               <h1>contact</h1>
            
            <Link to="/">Home</Link>

            
                <Link to="/aboutme">About me</Link>
           </div>
        )
    }
}