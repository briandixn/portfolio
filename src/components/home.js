import React from 'react';
import {Link,Route} from 'react-router-dom';
import App from './app'
import Aboutme from './aboutme';
import './home.css'
import booklogo from './screenshot.png'
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
                  <li >react.js, redux.js, jquery</li>
                  <li>node.js, express.js, </li>

                </ul>
              </div>
                <div className="project-list-container">
                <div className="projectlist">
                  <img src= {booklogo}/>
                  <p>Lyric Creator <br/> This is a Lyric Creator app that was built primarily with react.js, redux.js on the front end. <br/>
                   with node.js and express.js on the backend. The app uses mongoDB as a database</p>

                </div>
                </div>
            </div>
        )
    }
}
