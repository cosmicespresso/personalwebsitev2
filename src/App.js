import React from 'react';
import ReactGA from 'react-ga';

import './App.css';

function App() {
  ReactGA.initialize('UA-89607558-1', { standardImplementation: true });

  return (
    <div className="App">
      <div className="work">
        <div className="section">
          <div className="name small">Hi this is Kalli</div>
          <p>I do not maintain an online presence right now.</p>
          <p>
            You can take a look{" "}
            <a href="https://www.are.na/kalli-retzepi">here</a> for some loose
            interests.
          </p>
        </div>
        <div className="section">
          <div className="name small">recent image</div>
          <a href="https://www.are.na/kalli-retzepi/personal-film-photographs">
            <img
              width={"66%"}
              src="https://d2w9rnfcy7mm78.cloudfront.net/23331135/original_69c61d3d62a4a4d95d8a104f8d091cc1.jpg?1693039595?bc=0"
              alt="some of kalli's film photography collection"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
