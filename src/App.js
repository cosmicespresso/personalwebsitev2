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
              src="https://d2w9rnfcy7mm78.cloudfront.net/21182967/original_a9d7117ee772ed2cbff5d15c7eb7b205.jpg?1680367189?bc=0"
              alt="film photography of mount fuji in japan"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
