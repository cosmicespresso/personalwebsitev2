import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SEO from 'react-seo-component';

<SEO
  title={'kalli retzepi'}
  description={'personal website'}
  image={'https://www.kalli-retzepi.com/twitter.png'}
  pathname={'https://www.are.na/kalli-retzepi/index'}
/>

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
