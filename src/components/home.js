import React from 'react';
import {Link,Route} from 'react-router-dom';
import App from './app'
import Aboutme from './aboutme';
import './home.css'
export default class Home extends React.Component {
    render(){
        return(

            <div>
              <div className="navbar">
               <Link className="navitem" to="/contact">Contact</Link>
               <Link className="navitem" to="/aboutme">About me</Link>
              </div>
              <div className= 'herotext'>
                <h2>Brian Dixon, Software Developer</h2>
                <p> Hello, my name is Brian Dixon, I am a full stack javascript
                  developer.<br/> I am curently a thinkful student and i love building apps.
                </p>
                <h2>Skillset</h2>
                <ul className="skills-list">
                  <li >react.js</li>
                  <li>redux.js</li>
                  <li>jquery</li>
                </ul>
              </div>
                <div className="project-list-container">
                <ul className="projectlist">
                  <li>Bookmark</li>
                  
                </ul>
                </div>
            </div>
        )
    }
}
