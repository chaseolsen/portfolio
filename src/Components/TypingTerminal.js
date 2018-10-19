import React, { Component } from 'react'

// Import Typist & CSS for blinking effect etc
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

export default class TypingTerminal extends Component {

  onCharacterTyped(){
    console.log('finsihed');
  }

  render(){
    // const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    // {(new Date()).toLocaleDateString('en-US', DATE_OPTIONS)}
    const currentDate = new Date().toString();
    return (
      <div className="typingContent">
        > Chase Olsen - chase.olsen22@gmail.com<br/>
        {currentDate}


        <p></p>
        <Typist startDelay={2000} avgTypingDelay={50}>
          Hello, my name is Chase. I deisgn
          <Typist.Backspace count={4} delay={200} />
          sign & build everything from small business sites, to rich interactive web apps.
          <Typist.Delay ms={500} />
          <ul>
            <li>ReactJS</li>
            <li>HTML/CSS/SASS</li>
            <li>Meteor.js & Vue.js</li>
            <li>NodeJS (Express)</li>
          </ul>

        Follow me on <a href="https://www.linkedin.com/in/chaseolsen/">LinkedIn</a> and <a href="https://github.com/chaseolsen">Github</a>!<br/>
      Or checkout my freelance work at <a href="https://roopidesigns.com/">https://roopidesigns.com/</a>

        </Typist>

      </div>
    )
  }
}
