import React from 'react';
import bar from './assets/bar.svg';
import './App.css';
import ReactGA from 'react-ga';
import * as Draggable from 'react-draggable'

function App() {
  ReactGA.initialize('UA-89607558-1', { standardImplementation: true });

  return (
    <div className='wrapper'>
      <Draggable>
        <div className="App">
          <img className='bar' src={bar} alt='bar'/>
          <div className='main'>
            <p className='text'>
            I am into code, design and the Internet. CV and Portfolio upon request.
            </p>

            <p className='currently'>CURRENTLY  &#x2192; <a href="https://www.recurse.com">Recurse Center</a>, adj. faculty SVA DSI, <a href="https://foreignobjects.net/" target="_blank" rel="noopener noreferrer"> FOREIGN OBJECTS</a>. <br/>
              PREVIOUSLY &#x2192; MIT Media Lab.
            </p>
            
            <p className='links'> 
            Find me on:
              <a href="https://www.are.na/kalli-retzepi/index" target="_blank" rel="noopener noreferrer">are.na</a> • 
              <a href="https://twitter.com/kallirroi" target="_blank" rel="noopener noreferrer">twitter</a>  • 
              <a href="https://github.com/Kallirroi" target="_blank" rel="noopener noreferrer">github</a> 
            </p>            
            
            <p className='links'> 
            Or talk to me via: 
              <a href="mailto:kalli.retzepi@gmail.com" target="_blank" rel="noopener noreferrer">email</a>  • 
              <a href="https://keybase.io/kallirroi/chat" target="_blank" rel="noopener noreferrer">keybase</a>
            </p>
          </div>
        </div>
      </Draggable>
      <div className='location'>currently (stuck) in Brooklyn, NY</div>
    </div>
  );
}

export default App;
