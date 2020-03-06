import React from 'react';
import bar from './assets/bar.svg';
import './App.css';
import ReactGA from 'react-ga';

function App() {

  ReactGA.initialize('UA-89607558-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (

    <div className="App">
      <img className='bar' src={bar} alt='bar'/>
      <div className='main'>
        
        <p className='text'>
        I use code and design to re-imagine the Web. CV and Portfolio upon request.
        </p>

        <p className='currently'>CURRENTLY  &#x2192; <a href="https://www.recurse.com">Recurse Center</a>, adj. faculty SVA DSI, <a href="https://foreignobjects.net/" target="_blank" rel="noopener noreferrer"> FOREIGN OBJECTS</a>. <br/>
          PREVIOUSLY &#x2192; MIT Media Lab.
        </p>

        <p className='links'> 
          <a href="mailto:kalli.retzepi@gmail.com" target="_blank" rel="noopener noreferrer">email</a> <br/>
          <a href="https://www.are.na/kalli-retzepi/index" target="_blank" rel="noopener noreferrer">are.na</a> <br/>
          <a href="https://twitter.com/kallirroi" target="_blank" rel="noopener noreferrer">twitter</a>
        </p>
      </div>
    </div>
  );
}

export default App;
